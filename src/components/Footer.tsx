function Footer() {
  return (
    <footer className="bg-[var(--color-accent)] bottom-0">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6 md:flex md:items-center md:justify-between">
        <span className="text-md text-[var(--color-text-secondary)]">
          &copy; Copyright {new Date().getFullYear()} Cosma Andrei.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5">
          <a
            href="#"
            className="text-[var(--color-text-secondary)] hover:text-gray-900"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-[var(--color-text-secondary)] hover:text-gray-900"
          >
            Discord
          </a>
          <a
            href="#"
            className="text-[var(--color-text-secondary)] hover:text-gray-900"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-[var(--color-text-secondary)] hover:text-gray-900"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-[var(--color-text-secondary)] hover:text-gray-900"
          >
            Dribbble
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
