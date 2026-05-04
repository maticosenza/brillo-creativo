const Index = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center bg-brand-red text-brand-white px-6 md:px-12 pt-32 pb-20">
        <span className="eyebrow mb-8 opacity-80">Productora de eventos · Buenos Aires</span>
        <h1 className="font-display text-hero uppercase max-w-[14ch]">
          Eventos que dejan huella
        </h1>
        <p className="mt-10 max-w-xl text-lg md:text-xl opacity-90">
          Diseño, producción y dirección creativa para marcas que quieren ser recordadas.
        </p>
      </section>

      <section className="section-y bg-brand-black text-brand-white px-6 md:px-12">
        <span className="eyebrow opacity-60">Próximamente</span>
        <h2 className="font-display text-h2 uppercase mt-6 max-w-[16ch]">
          Estamos armando esta sección
        </h2>
      </section>
    </>
  );
};

export default Index;
