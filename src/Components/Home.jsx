import React from 'react';

const Home = ({ isDarkMode }) => {
  return (
    <div className={`bg-${isDarkMode ? 'black' : 'white'} text-${isDarkMode ? 'white' : 'black'} flex flex-col justify-center items-center m-auto h-screen py-4 px-12 `}>
      <h6 className={`text-base sm:text-xl font-normal ${isDarkMode ? 'text-white' : 'text-black'}`}>
        Hello World, I&apos;m
      </h6>
      <h1 className="xs:text-6xl text-7xl md:text-8xl lg:text-10xl xl:text-[120px] font-normal xl:leading-[120px]">
        KACEMI
        <br />
        <span className={`sm:ml-16 mt-36 ${isDarkMode ? 'text-white' : 'text-black'}`}>RAJAA</span>
      </h1>
      <p className={`py-10 sm:block text-sm md:text-lg text-center font-raleway font-normal sm:w-2/3 lg:w-1/2 px-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        I&apos;m a Full Stack Developer. I make things better for users by coming up with new ideas that make them happy and keep them interested.
      </p>
      
    </div>
  );
};

export default Home;
