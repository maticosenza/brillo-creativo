import { useEffect, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { IntroBanner } from "@/components/shared/IntroBanner";
import { FloatingField, inputClass } from "@/components/contact/FloatingField";
import { cn } from "@/lib/utils";

const schema = z.object({
  nombre: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  empresa: z.string().trim().min(1).max(120),
  proyecto: z.string().trim().min(1).max(140),
  objetivos: z.string().trim().min(10).max(2000),
  audiencia: z.string().trim().min(1).max(500),
  fecha: z.string().trim().max(60).optional().or(z.literal("")),
  presupuesto: z.enum(["< 50k USD", "50-150k USD", "150-500k USD", "+500k USD"]),
  referencias: z.string().trim().max(2000).optional().or(z.literal("")),
});

const RANGOS = ["< 50k USD", "50-150k USD", "150-500k USD", "+500k USD"] as const;

const Brief = () => {
  useEffect(() => { window.scrollTo(0, 0); document.title = "Brief — Productora"; }, []);
  const [data, setData] = useState({
    nombre: "", email: "", empresa: "", proyecto: "",
    objetivos: "", audiencia: "", fecha: "", presupuesto: "", referencias: "",
  });
  const set = (k: keyof typeof data) => (v: string) => setData((d) => ({ ...d, [k]: v }));
  const [sending, setSending] = useState(false);

  const submit = () => {
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0]?.message ?? "Revisá los datos");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Brief enviado. Te respondemos en menos de 24 horas.");
      setData({ nombre: "", email: "", empresa: "", proyecto: "", objetivos: "", audiencia: "", fecha: "", presupuesto: "", referencias: "" });
    }, 600);
  };

  return (
    <>
      <IntroBanner lines={[["MANDANOS"], ["TU", "BRIEF"]]} subtitle="Cuanta más información nos pases, mejor podemos responderte." height="60vh" />

      <section className="bg-brand-black text-brand-white section-y px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-3">
          <FloatingField label="Nombre" required hasValue={!!data.nombre}>
            {(p) => <input type="text" value={data.nombre} onChange={(e) => set("nombre")(e.target.value)} className={inputClass} maxLength={100} {...p} />}
          </FloatingField>
          <FloatingField label="Email" required hasValue={!!data.email}>
            {(p) => <input type="email" value={data.email} onChange={(e) => set("email")(e.target.value)} className={inputClass} maxLength={255} {...p} />}
          </FloatingField>
          <FloatingField label="Empresa" required hasValue={!!data.empresa}>
            {(p) => <input type="text" value={data.empresa} onChange={(e) => set("empresa")(e.target.value)} className={inputClass} maxLength={120} {...p} />}
          </FloatingField>
          <FloatingField label="Nombre del proyecto" required hasValue={!!data.proyecto}>
            {(p) => <input type="text" value={data.proyecto} onChange={(e) => set("proyecto")(e.target.value)} className={inputClass} maxLength={140} {...p} />}
          </FloatingField>
          <FloatingField label="Objetivos del proyecto" required hasValue={!!data.objetivos}>
            {(p) => <textarea value={data.objetivos} onChange={(e) => set("objetivos")(e.target.value)} rows={4} maxLength={2000} className={cn(inputClass, "resize-none")} {...p} />}
          </FloatingField>
          <FloatingField label="Audiencia objetivo" required hasValue={!!data.audiencia}>
            {(p) => <input type="text" value={data.audiencia} onChange={(e) => set("audiencia")(e.target.value)} className={inputClass} maxLength={500} {...p} />}
          </FloatingField>
          <FloatingField label="Fecha estimada" hasValue={!!data.fecha}>
            {(p) => <input type="text" placeholder="" value={data.fecha} onChange={(e) => set("fecha")(e.target.value)} className={inputClass} maxLength={60} {...p} />}
          </FloatingField>
          <FloatingField label="Rango de presupuesto" required hasValue={!!data.presupuesto}>
            {(p) => (
              <select value={data.presupuesto} onChange={(e) => set("presupuesto")(e.target.value)} className={cn(inputClass, "uppercase tracking-wide")} {...p}>
                <option value="" disabled className="bg-brand-black"></option>
                {RANGOS.map((r) => <option key={r} value={r} className="bg-brand-black">{r}</option>)}
              </select>
            )}
          </FloatingField>
          <FloatingField label="Referencias o links" hasValue={!!data.referencias}>
            {(p) => <textarea value={data.referencias} onChange={(e) => set("referencias")(e.target.value)} rows={3} maxLength={2000} className={cn(inputClass, "resize-none")} {...p} />}
          </FloatingField>

          <div className="pt-10">
            <button type="button" onClick={submit} disabled={sending}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brand-white text-brand-red border border-brand-white px-10 py-5 text-base font-medium uppercase tracking-wider disabled:opacity-50">
              <span aria-hidden className="absolute inset-0 bg-brand-black origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100" />
              <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-brand-white">
                {sending ? "Enviando..." : "Enviar brief"}
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Brief;
