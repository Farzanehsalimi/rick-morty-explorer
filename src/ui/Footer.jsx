function Footer() {
  return (
    <div className="w-full shadow-header-footer bg-header fixed bottom-0">
      <div className="container mx-auto py-3 text-center">
        <p className="text-secondary-100">
          Crafted with ❤️ by
          <a
            href="https://farzanehsalimi.ir"
            className="text-primary-500 font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Farzaneh Salimi!
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
