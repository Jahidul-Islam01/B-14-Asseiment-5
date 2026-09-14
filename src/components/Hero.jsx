const Hero = () => {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20 lg:min-h-[520px] lg:py-24">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-extrabold leading-[1.08] text-slate-900 sm:text-5xl lg:text-[54px]">
            Build Your Perfect
            <br />
            <span className="brand-gradient-text">Developer Toolkit</span>
          </h1>


          <p className="mx-auto mt-6 max-w-[570px] text-sm leading-6 text-slate-500 sm:text-base sm:leading-7 md:mx-0">
            Discover useful frontend, backend, database, and development tools,
            compare your options, and create a stack that matches your project.
          </p>


          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#technologies"
              className="brand-gradient-bg rounded-lg px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Browse Technologies
            </a>


            <a
              href="#technologies"
              className="rounded-lg border border-slate-200 bg-white px-7 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>


        <div className="flex justify-center md:justify-end">
          <img
            src="/assets/banner-stack.png"
            alt="Developer technology stack illustration"
            className="w-full max-w-[280px] object-contain sm:max-w-[340px] lg:max-w-[400px]"
          />
        </div>
      </div>
    </section>
  );
};


export default Hero;

