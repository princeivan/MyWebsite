import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareTwitter, FaStackOverflow } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" relative mb-19 flex items-center justify-between py-6">
      <div className="  flex flex-shrink-0 items-center  sticky top-0">
        <p className="text-xl font-bold">IR</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer">
        <a href="https://www.linkedin.com/in/ivan-rono-412694166/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/princeivan?tab=repositories">
          <FaGithub />
        </a>
        <a href="">
          <FaSquareTwitter />
        </a>
        <a href="">
          <FaInstagram />
        </a>
        <a href="https://stackoverflow.com/users/25506229/ivan-rono">
          <FaStackOverflow />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
