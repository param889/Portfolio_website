import logo from "../assets/me.JPG";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import main from "../assets/undraw_websites.svg";
export const Nav = () => {
  return (
    <header className="h-screen" id="top">
      <nav className="h-[70px] max-w-screen-xl mx-auto flex items-center justify-between p-4 text-black">
        <div className="text-xl sm:text-2xl text-violet-700 font-bold">
          Param Chaudhary
        </div>
        <ul className="flex items-center space-x-6 text-[17px] font-semibold cursor-pointer group">
          <li
            className="relative hidden sm:block 
          after:absolute
          after:block
          after:h-1
          after:bg-black
          after:-bottom-[2px]
          after:right-0
          after:w-0
          after:transition-all
          after:duration-300

          hover:after:w-full
          hover:after:left-0
          
          "
            onClick={() => window.location.replace("/#languages")}
          >
            Language
          </li>
          <li
            className="relative hidden sm:block
                    after:absolute
                    after:block
                    after:h-1
                    after:bg-black
                    after:-bottom-[2px]
                    after:right-0
                    after:w-0
                    after:transition-all
                    after:duration-300
          
                    hover:after:w-full
                    hover:after:left-0
          
          
          "
            onClick={() => window.location.replace("/#projects")}
          >
            Projects
          </li>
          <li className="text-sm sm:text-[17px]
           bg-violet-700 text-white px-5 py-2 rounded-2xl
           transition-all
           duration-300
           hover:bg-violet-500
 

           
           ">
            Contact
          </li>
        </ul>
      </nav>
      <div className="h-[calc(100vh-70px)] 
      flex flex-col items-center 
      max-w-screen-sm mx-auto text-center justify-evenly">
        <figure className="w-16 h-16 sm:w-28 rounded-full sm:h-28 overflow-hidden animate-[profile_700ms_200ms_ease-in-out_backwards]">
          <img src={logo} alt="" className="scale-[1.2] pl-1 pt-1" />
        </figure>
        <h1 className="text-2xl sm:text-5xl font-semibold leading-tight animate-[fadeup_700ms_800ms_ease-in-out_backwards]">
          Hey! I'm <span className="text-violet-700">Param Chaudhary</span>
          <span
          className="text-4xl inline-block animate-[wavy_1000ms_ease-in-out_infinite]">👋</span>
        </h1>
        <p className="text-sm sm:text-lg font-medium sm:leading-8 animate-[fadeup_700ms_1000ms_ease-in-out_backwards]">
          I'm a{" "}
          <span className="text-violet-700">frontend software enginner</span>{" "}
          with a strong passion fpr building responsive and performant web
          application with great user experiences that positively imapacts the
          world.
        </p>

        <div className="flex items-center space-x-3 mb-6 animate-[fadeup_700ms_1100ms_ease-in-out_backwards]">
          <LinkedInIcon className="" />
          <TwitterIcon />
          <MailOutlineIcon />
          <FacebookIcon />
        </div>
        <figure className="max-w-screen-sm flex flex-col items-center justify-center animate-[fadeup_700ms_12 nyh00ms_ease-in-out_backwards]">
          <img src={main} alt="" />
        </figure>
      </div>
    </header>
  );
};
