import { useState } from "react";
import logo from "../assets/personalLogo.png";
import { Link as ScrollLink } from "react-scroll";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4 px-8 flex items-center justify-between">
      <div className="flex items-center ml-20">
      <ScrollLink to="hero" smooth={true} duration={500}>
        <img className="w-10 h-auto cursor-pointer" src={logo} alt="logo" />
      </ScrollLink>
    </div>

      <div className="hidden lg:flex items-center gap-10 text-l mr-20 text-gray-600 font-medium">
        {/* <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer"
        >
          About
        </ScrollLink> */}
        <ScrollLink
          to="experience"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer"
        >
          Experience
        </ScrollLink>
        <ScrollLink
          to="education"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer"
        >
          Education
        </ScrollLink>
        
        <ScrollLink
          to="technologies"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer"
        >
          Technologies
        </ScrollLink>
        <ScrollLink
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer"
        >
          Contact
        </ScrollLink>
        <div className="flex items-center gap-2 text-xl">
          <a
            href="https://www.linkedin.com/in/sashenw/"
            className="cursor-pointer"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/sashenwin" className="cursor-pointer">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/SashenWindsor/" className="cursor-pointer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/sashe.n/" className="cursor-pointer">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="flex lg:hidden items-center">
        <FiMenu
          className="text-3xl cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>

      {showMenu && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white text-gray-700 shadow-md py-4 px-8 flex flex-col items-center">
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer mb-4 text-xl"
            onClick={() => setShowMenu(false)}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="education"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer mb-4 text-xl"
            onClick={() => setShowMenu(false)}
          >
            Education
          </ScrollLink>
          <ScrollLink
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer mb-4 text-xl"
            onClick={() => setShowMenu(false)}
          >
            Experience
          </ScrollLink>
          <ScrollLink
            to="technologies"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer mb-4 text-xl"
            onClick={() => setShowMenu(false)}
          >
            Technologies
          </ScrollLink>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer mb-4 text-xl"
            onClick={() => setShowMenu(false)}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer mb-4 text-xl"
            onClick={() => setShowMenu(false)}
          >
            Contact
          </ScrollLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
