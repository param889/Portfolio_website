const Project = ({ image, projectName, languageUse, projectDes }) => {
  return (
    <div className="rounded-2xl overflow-hidden relative max-w-screen-md transition-all duration-300 group shadow-2xl">
      <img
        src={image}
        alt=""
        className="group-hover:scale-[1.3] transition-all duration-500 group-hover:blur-sm"
      />
      <div
        className=" rounded-2xl
        absolute w-full h-0
         bg-black group-hover:top-0 group-hover:left-0 opacity-40 z-20 group-hover:h-full
         group-hover:block transition-all duration-700 "
      ></div>
      <div
        className="absolute invisible -top-[700px] group-hover:visible group-hover:top-1/2 -translate-y-1/2 
      left-12 group-hover:flex flex-col justify-center 
      max-w-lg text-white z-20 transition-all duration-500
      "
      >
        <h2 className="text-xl sm:text-4xl font-semibold">{projectName}</h2>
        <h3 className="font-semibold text-sm">{languageUse}</h3>
        <p className="hidden sm:block text-justify mt-6">{projectDes}</p>
      </div>
    </div>
  );
};
export default Project;
