import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
  return (
   <footer className="flex items-center justify-between w-full p-4  bg-surface-tonal-a0 bottom-[-5rem]">
       <div>
        <span>© 2025 Your Company, Inc. All rights reserved.</span>
      </div>
      <div className="flex items-center justify-start gap-2 md:gap-6 max-w-1/2">
        <a href="#" className="text-2xl cursor-pointer text-slate-400 hover:text-slate-200"><FaFacebook /></a>
        <a href="#" className="text-2xl cursor-pointer text-slate-400 hover:text-slate-200"><FaInstagram /></a>
        <a href="#" className="text-2xl cursor-pointer text-slate-400 hover:text-slate-200"><FaXTwitter /></a>
        <a href="#" className="text-2xl cursor-pointer text-slate-400 hover:text-slate-200"><FaSquareGithub /></a>
        <a href="#" className="text-2xl cursor-pointer text-slate-400 hover:text-slate-200"><FaYoutube /></a>
      </div>

    </footer>
  )
}

export default Footer