const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Quick Links:</p>
        <p>|</p>
        <a href="https://github.com/guptasuraj125" className="hover:underline">GitHub</a>
        <p>|</p>
        <a href="https://www.instagram.com/suraj.gupta2006/profilecard/?igsh=MWpuNjNibHR3Z2traw==" className="hover:underline">Instagram</a>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/guptasuraj125" target="_blank" rel="noopener noreferrer">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.instagram.com/suraj.gupta2006/profilecard/?igsh=MWpuNjNibHR3Z2traw==" target="_blank" rel="noopener noreferrer">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2024 Gupta Suraj. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
