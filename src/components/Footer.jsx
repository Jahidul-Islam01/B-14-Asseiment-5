const Footer = () => {
  return (
    <footer id="about" className="border-t border-slate-100 bg-white pt-14">
      <div className="mx-auto max-w-[1180px] px-5">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <img
              src="/assets/logo-text.png"
              alt="Dev Stack"
              className="h-8 w-auto"
            />

            <p className="mt-4 max-w-[340px] text-sm leading-6 text-slate-500">
              Explore useful technologies and create a development stack that
              fits your ideas, projects, and workflow.
            </p>

            <div className="mt-6 flex flex-wrap gap-5 text-sm font-medium text-slate-600">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div id="projects">
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-800">
              Product
            </h4>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500">
              <a href="#home" className="transition hover:text-pink-500">
                Home
              </a>
              <a
                href="#technologies"
                className="transition hover:text-pink-500"
              >
                Technologies
              </a>
              <a href="#projects" className="transition hover:text-pink-500">
                Projects
              </a>
            </div>
          </div>

          <div id="contact">
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-800">
              Company
            </h4>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500">
              <a href="#about" className="transition hover:text-pink-500">
                About
              </a>
              <a href="#contact" className="transition hover:text-pink-500">
                Contact
              </a>
              <a href="#contact" className="transition hover:text-pink-500">
                Careers
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-800">
              Legal
            </h4>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500">
              <a href="#privacy" className="transition hover:text-pink-500">
                Privacy Policy
              </a>
              <a href="#terms" className="transition hover:text-pink-500">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-100 py-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 StackForge Hub. All rights reserved.</p>

          <div className="flex gap-6">
            <a
              id="privacy"
              href="#privacy"
              className="transition hover:text-pink-500"
            >
              Privacy
            </a>

            <a
              id="terms"
              href="#terms"
              className="transition hover:text-pink-500"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;