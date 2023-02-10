import { Link } from "react-scroll"
import me from "../img/mee.png"

const Header = () => {

  return (
    <nav className="h-[10vh] p-4 px-10 flex items-center justify-center z-40">
        <div className="flex justify-between gap-20">
        <img src={me} alt="me" className="w-10 ring-2 rounded-xl"/>
        <ul className="flex items-center gap-6">
            <Link 
            to="home" 
            smooth={true}
            spy={true}
            className="hover:text-[#7a7cf3] transition-colors cursor-pointer"
            >
                Home
            </Link>
            <Link 
            to="portfolio" 
            smooth={true}
            spy={true}
            className="hover:text-[#7a7cf3] transition-colors cursor-pointer"
            >
                Portfolio
            </Link>
            <Link 
            to="certificates" 
            smooth={true}
            spy={true}
            className="hover:text-[#7a7cf3] transition-colors cursor-pointer"
            >
                Certificates
            </Link>
            <Link 
            to="contact" 
            smooth={true}
            spy={true}
            className="hover:text-[#7a7cf3] transition-colors cursor-pointer"
            >
                Contact
            </Link>
        </ul>
        </div>
        
        
    </nav>
  )
}

export default Header