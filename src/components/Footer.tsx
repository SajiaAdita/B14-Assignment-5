import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (

      <footer className="border-t border-gray-100 bg-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          
          <div>
            <img src={Logo} alt="Dev Stack" className="w-24"/>

            <p className="text-[9px] text-gray-500 leading-4 mt-3 max-w-[250px]">
              Curated tools, technologies, and resources for developers
              building modern software.</p>

            <div className="flex gap-4 mt-4">
              <a href="#" className="text-[9px] text-gray-600 hover:text-pink-500">GitHub</a>

              <a href="#" className="text-[9px] text-gray-600 hover:text-pink-500">Twitter</a>

              <a href="#" className="text-[9px] text-gray-600 hover:text-pink-500">LinkedIn</a>
            </div>
          </div>

          
          <div>
            <h3 className="text-[9px] font-semibold text-gray-900 uppercase">Product</h3>

            <ul className="mt-3 space-y-2 text-[9px] text-gray-500">
              <li>
                <a href="#" className="hover:text-pink-500">Home</a>
              </li>

              <li>
                <a href="#" className="hover:text-pink-500">Technologies</a>
              </li>

              <li>
                <a href="#" className="hover:text-pink-500"> Projects</a>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-[9px] font-semibold text-gray-900 uppercase">Company
            </h3>

            <ul className="mt-3 space-y-2 text-[9px] text-gray-500">
              <li>
                <a href="#" className="hover:text-pink-500">About</a>
              </li>

              <li>
                <a href="#" className="hover:text-pink-500">Contact</a>
              </li>

              <li>
                <a href="#" className="hover:text-pink-500">Careers</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[9px] font-semibold text-gray-900 uppercase">Legal</h3>

            <ul className="mt-3 space-y-2 text-[9px] text-gray-500">
              <li>
                <a href="#" className="hover:text-pink-500">Privacy Policy</a>
              </li>

              <li>
                <a href="#" className="hover:text-pink-500">Terms of Service</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-100 mt-8 pt-5 flex items-center justify-between">
          <p className="text-[9px] text-gray-400">© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="text-[9px] text-gray-400 hover:text-gray-600"
            >Privacy</a>

            <a href="#" className="text-[9px] text-gray-400 hover:text-gray-600"
            >Terms</a>
          </div>
        </div>

        </div>
        </footer>
  );
};

export default Footer;