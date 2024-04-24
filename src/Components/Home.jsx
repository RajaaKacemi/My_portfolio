import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import imageLogo from "../../public/assets/images/girl.svg";
import imageLogoWhite from "../../public/assets/images/girl_white.png";

const Home = ({ isDarkMode }) => {
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease',
            once: true,
        });
    }, []);

    return (
        <div className={`flex flex-col items-center justify-center mx-auto h-screen pt-12 px-12 bg-${isDarkMode ? 'black' : 'white'} text-${isDarkMode ? 'white' : 'black'} `}>
            <h6 className={`text-base sm:text-xl font-normal ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Hello World, I&apos;m
            </h6>
            <h1 className="xs:text-6xl text-7xl md:text-8xl lg:text-10xl xl:text-[120px] font-normal xl:leading-[120px]" data-aos="flip-left">
                KACEMI
                <br />
                <span className={`sm:ml-16 mt-36 ${isDarkMode ? 'text-white' : 'text-black'}`}>RAJAA</span>
            </h1>
            <p className={`pt-10 sm:block text-sm md:text-lg text-center font-raleway font-normal sm:w-2/3 lg:w-1/2 px-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                I&apos;m a Full Stack Developer. I make things better for users by coming up with new ideas that make them happy and keep them interested.
            </p>

            <div className={`pt-4 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
                <img
                    src={isDarkMode ? imageLogoWhite : imageLogo}
                    alt="developer"
                    className={`m-auto w-26 sm:w-32 lg:w-40`}
                    data-aos="fade-up"
                />
            </div>
        </div>
    );
};

export default Home;
