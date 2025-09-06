function Footer() {
  return (
    <footer className="bg-[var(--color-accent)] bottom-0">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6 md:flex md:items-center md:justify-between">
        <span className="text-md text-[var(--color-text-secondary)]">
          &copy; Copyright {new Date().getFullYear()} Cosma Andrei.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5">
          <a
            href="https://www.linkedin.com/in/andrei-cosma-28b720273/"
            className="text-[var(--color-text-secondary)] hover:text-gray-900"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/NeRrO106"
            className="text-[var(--color-text-secondary)] hover:text-gray-900"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
