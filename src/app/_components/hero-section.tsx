export function HeroSection() {
  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-0 max-w-7xl mx-auto flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        Welcome to <span className="text-primary">RX Group of Corporation</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
        Empowering your business with innovative solutions, expert consulting,
        and a passion for your success.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#services"
          className="inline-block px-8 py-3 rounded-md bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition-colors"
        >
          Our Services
        </a>
        <a
          href="#contact"
          className="inline-block px-8 py-3 rounded-md border border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
