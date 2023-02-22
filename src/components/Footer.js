import logo from "../assets/logo.svg";
const Footer = () => {
  return (
    <footer
      className="bg-[#242424] flex flex-col items-center p-4 sm:p-12
     justify-center space-y-8 text-white"
    >
      <figure className="w-14 group relative">
        <img src={logo} alt="" className="cursor-pointer" />
        <p
          className="cursor-pointer absolute scale-0 group-hover:scale-100 top-2 right-1
         group-hover:-right-16 group-hover:block
          transition-all duration-300 text-lg"
          onClick={() => {
            window.location.replace("#top");
          }}
        >
          Top&uarr;
        </p>
      </figure>
      <ul className="flex items-center justify-center space-x-6 sm:space-x-14 cursor-pointer">
        <li
          className="relative
            after:absolute
            after:block
            after:h-1
            after:bg-white
            after:-bottom-[2px]
            after:right-0
            after:w-0
            after:transition-all
            after:duration-300
  
            hover:after:w-full
            hover:after:left-0
  
            
            "
        >
          GitHub
        </li>
        <li
          className="relative
                        after:absolute
                        after:block
                        after:h-1
                        after:bg-white
                        after:-bottom-[2px]
                        after:right-0
                        after:w-0
                        after:transition-all
                        after:duration-300
              
                        hover:after:w-full
                        hover:after:left-0
              
                        
                        "
        >
          LinkDin
        </li>
        <li
          className="relative
            after:absolute
            after:block
            after:h-1
            after:bg-white
            after:-bottom-[2px]
            after:right-0
            after:w-0
            after:transition-all
            after:duration-300
  
            hover:after:w-full
            hover:after:left-0
  
            
            "
        >
          Email
        </li>
        <li
          className="relative
            after:absolute
            after:block
            after:h-1
            after:bg-white
            after:-bottom-[2px]
            after:right-0
            after:w-0
            after:transition-all
            after:duration-300
  
            hover:after:w-full
            hover:after:left-0
  
            
            "
        >
          Resume
        </li>
      </ul>
      <p className="text-base text-center">Copyright&copy;2023 Param Chaudhary</p>
    </footer>
  );
};
export default Footer;
