export const Language = ({ image,name }) => {
  return (
    <>
      <figure
        className="flex flex-col items-center 
    justify-center relative w-[18%] hover:scale-[0.8] 
    transition-all duration-300 hover:brightness-75 hover:opacity-80 group"
      >
        <img src={image} alt="" className="w-24" />
        <span
          className=" transition 
        duration-300 scale-[0] group-hover:scale-[1] 
        absolute -bottom-8 group-hover:-bottom-11 font-medium text-xl"
        >
          {name}
        </span>
      </figure>
    </>
  );
};
