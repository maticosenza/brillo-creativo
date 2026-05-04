import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { FloatingField, inputClass } from "./FloatingField";

const schema = z.object({
  nombre: z.string().trim().min(1, "Ingresá tu nombre").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  empresa: z.string().trim().max(120).optional().or(z.literal("")),
  tipo: z.enum(["Corporativo", "Activación", "Lanzamiento", "Festival", "Otro"], { errorMap: () => ({ message: "Elegí un tipo" }) }),
  fecha: z.date().optional(),
  mensaje: z.string().trim().min(10, "Contanos un poco más (mínimo 10 caracteres)").max(1000),
});

const TIPOS = ["Corporativo", "Activación", "Lanzamiento", "Festival", "Otro"] as const;

export const ContactForm = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [tipo, setTipo] = useState<string>("");
  const [fecha, setFecha] = useState<Date | undefined>();
  const [mensaje, setMensaje] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    const parsed = schema.safeParse({ nombre, email, empresa, tipo, fecha, mensaje });
    if (!parsed.success) {
      toast.error(parsed.error.errors[0]?.message ?? "Revisá los datos del formulario");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("¡Mensaje enviado! Te respondemos en menos de 24 horas.");
      setNombre(""); setEmail(""); setEmpresa(""); setTipo(""); setFecha(undefined); setMensaje("");
    }, 600);
  };

  return (
    <div className="space-y-2">
      <FloatingField label="Nombre" required hasValue={!!nombre}>
        {(p) => <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className={inputClass} maxLength={100} {...p} />}
      </FloatingField>

      <FloatingField label="Email" required hasValue={!!email}>
        {(p) => <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} maxLength={255} {...p} />}
      </FloatingField>

      <FloatingField label="Empresa" hasValue={!!empresa}>
        {(p) => <input type="text" value={empresa} onChange={(e) => setEmpresa(e.target.value)} className={inputClass} maxLength={120} {...p} />}
      </FloatingField>

      <FloatingField label="Tipo de evento" required hasValue={!!tipo}>
        {(p) => (
          <select value={tipo} onChange={(e) => setTipo(e.target.value)} className={cn(inputClass, "uppercase tracking-wide")} {...p}>
            <option value="" disabled className="bg-brand-black"></option>
            {TIPOS.map((t) => <option key={t} value={t} className="bg-brand-black">{t}</option>)}
          </select>
        )}
      </FloatingField>

      <FloatingField label="Fecha estimada" hasValue={!!fecha}>
        {(p) => (
          <Popover>
            <PopoverTrigger asChild>
              <button type="button" onFocus={p.onFocus} onBlur={p.onBlur} id={p.id}
                className={cn(inputClass, "flex items-center justify-between text-left")}>
                <span>{fecha ? format(fecha, "dd/MM/yyyy") : ""}</span>
                <CalendarIcon className="w-4 h-4 opacity-60" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-brand-black border-white/20 text-brand-white" align="start">
              <Calendar mode="single" selected={fecha} onSelect={setFecha}
                disabled={(d) => d < new Date(new Date().setHours(0,0,0,0))}
                initialFocus className="p-3 pointer-events-auto" />
            </PopoverContent>
          </Popover>
        )}
      </FloatingField>

      <FloatingField label="Mensaje" required hasValue={!!mensaje}>
        {(p) => <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)}
          rows={4} maxLength={1000} className={cn(inputClass, "resize-none")} {...p} />}
      </FloatingField>

      <div className="pt-10">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-brand-white px-8 py-4 text-[13px] font-medium uppercase tracking-wider disabled:opacity-50"
        >
          <span aria-hidden className="absolute inset-0 bg-brand-white origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100" />
          <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-brand-red">
            {submitting ? "Enviando..." : "Enviar mensaje"}
            <ArrowRight className="w-4 h-4" />
          </span>
        </button>
      </div>
    </div>
  );
};
