import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto h-14 px-6 flex items-center justify-between">

        <div className="flex items-center">
          <img
            src={Logo}
            alt="DevStack"
            className="w-24 h-auto"
          />
        </div>

        <ul className="flex items-center gap-6 text-xs text-gray-600">
          <li className="text-pink-600 cursor-pointer">Home</li>
          <li className="hover:text-pink-600 cursor-pointer">Technologies</li>
          <li className="hover:text-pink-600 cursor-pointer">Projects</li>
          <li className="hover:text-pink-600 cursor-pointer">About</li>
          <li className="hover:text-pink-600 cursor-pointer">Contact</li>
        </ul>


        <div className="flex items-center gap-4 text-xs">
          <button className="text-gray-700 hover:text-pink-600">Sign In
          </button>

          <button className="bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700">Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Nav;