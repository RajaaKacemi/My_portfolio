import { useState } from 'react';
import CertificationsData from '../Data/Certifications.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJava, faJs, faNode, faPhp, faLaravel, faHtml5, faBootstrap, faReact, faCss3Alt} from '@fortawesome/free-brands-svg-icons'; 

function Skills({ isDarkMode }) {
    const [isExperiences, setIsExperiences] = useState(true);
    const [isCertifications, setIsCertifications] = useState(false);
    const [isSkills, setIsSkills] = useState(false);
    
    const toggleExperiences = () => {
        setIsExperiences(true);
        setIsCertifications(false);
        setIsSkills(false);
    };
    
    const toggleCertifications = () => {
        setIsExperiences(false);
        setIsCertifications(true);
        setIsSkills(false);
    };
    
    const toggleSkills = () => {
        setIsExperiences(false);
        setIsCertifications(false);
        setIsSkills(true);
    };
    
    return (
        <div className={`flex flex-col justify-center px-8 pt-10 pb-6 `}>
            <div className="flex justify-center gap-2 flex-wrap py-5">
    <button 
        className={`px-4 py-2 border ${
            isExperiences 
                ? (isDarkMode ? 'bg-white text-black' : 'bg-black text-white')
                : (isDarkMode ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white')
        } transition-all ease-in-out`}  
        onClick={toggleExperiences}
    >
        Education & Experiences
    </button>
    <button 
        className={`px-4 py-2 border ${
            isCertifications 
                ? (isDarkMode ? 'bg-white text-black' : 'bg-black text-white')
                : (isDarkMode ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white')
        } transition-all ease-in-out`}  
        onClick={toggleCertifications}
    >
        Certifications
    </button>
    <button 
        className={`px-4 py-2 border ${
            isSkills 
                ? (isDarkMode ? 'bg-white text-black' : 'bg-black text-white')
                : (isDarkMode ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white')
        } transition-all ease-in-out`}  
        onClick={toggleSkills}
    >
        Coding Skills
    </button>
</div>


            <div className="sm:flex justify-between px-46 my-4">
                
                {isExperiences && (
                    <>
                        <div className="flex flex-col sm:w-1/2 p-2">
                            <h1 className="py-2">Experiences</h1>
                            <div className="p-2">
                                <div className={`border py-4 px-3 hover:border-2 hover:border-${isDarkMode ? 'white' : 'black'} transition-all ease-in-out`}>
                                    <div className="flex justify-between gap-10">
                                        <h6 className="sm:text-sm text-xs text-start"><span className='font-semibold'>Internship:</span> Jan. 2024 - Mar. 2024</h6>
                                        <p className="sm:text-sm text-xs text-end"><strong>Full stack Mobile Developer</strong></p>
                                    </div>
                                    <p className="py-3 text-sm text-start">Developed a mobile e-commerce application, with Flutter.</p>
                                </div>
                            </div>
                            <div className="p-2">
                                <div className={`border py-4 px-3 hover:border-2 hover:border-${isDarkMode ? 'white' : 'black'} transition-all ease-in-out`}>
                                    <div className="flex justify-between gap-1">
                                        <h6 className="sm:text-sm text-xs text-start"><span className='font-semibold'>Internship:</span> Jul. 2023 - Dec. 2023</h6>
                                        <p className="sm:text-sm text-xs text-end"><strong>Full Stack Web Developer </strong></p>
                                    </div>
                                    <p className="py-3 text-sm text-start">Developed an e-commerce web application utilizing the MERN Stack, with ReactJs, MongoDB, Tailwind CSS, Redux toolkit, NodeJs, ExpressJs, and JavaScript.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:w-1/2 p-4">
                            <h1 className="py-2">Education</h1>
                            <div className="p-2">
                                <div className={`border py-4 px-3 hover:border-2 hover:border-${isDarkMode ? 'white' : 'black'} transition-all ease-in-out`}>
                                    <div className="flex justify-between">
                                        <h6 className="text-sm w-2/3 text-start"><span className='font-semibold'>ALX Africa </span>| Software Engineering</h6>
                                        <p className="text-sm"><strong>2023 - Present</strong></p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2">
                                <div className={`border py-4 px-3 hover:border-2 hover:border-${isDarkMode ? 'white' : 'black'} transition-all ease-in-out`}>
                                    <div className="flex justify-between">
                                        <h6 className="text-sm w-3/4 text-start"><span className='font-semibold'>UH2C</span> | Bachelor&apos;s degree in Mathematical Sciences and Computer Science</h6>
                                        <p className="text-sm"><strong>2021 - 2022</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {isCertifications && (
                    <>
                        {CertificationsData.map((Certification, index) => (
                            <div key={index} className="p-4 sm:w-1/3 flex-grow flex">
                                <div className={`border py-4 px-3 hover:border-2 hover:border-${isDarkMode ? 'white' : 'black'} transition-all ease-in-out flex-grow flex flex-col justify-between`}>
                                    <div className="">
                                        <p className="text-sm"><strong>{Certification.title}</strong></p>
                                        <img className="w-full" src={Certification.image} alt={Certification.title} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>)
                }

                {isSkills && (
                    <>
                        <div className='flex  mx-auto'>
                            <div className='md:flex'>
                                <div  className="p-4 sm:w-1/2 flex-grow flex ">
                                    <div className={`bg-${isDarkMode ? 'white' : 'black'} border py-4 px-3 flex-grow flex flex-col justify-between`}>
                                        <div className="">
                                            <h6 className={`text-sm py-2 text-start ${isDarkMode ? 'text-black' : 'text-white'}`}><strong>BackEnd</strong></h6>
                                            <p className={`text-sm ${isDarkMode ? 'text-black' : 'text-white'} text-start`}>Building powerful server-side systems, coding from scratch. </p>
                                            <p className={`text-sm ${isDarkMode ? 'text-black' : 'text-white'} py-2 text-start`}>- Python, Java, php, Laravel, nodeJs, ExpressJs, API Restful</p>
                                            <p className={`${isDarkMode ? 'text-black' : 'text-white'} text-sm text-start pt-3`}>
                                                <FontAwesomeIcon icon={faPython} className="text-2xl font-normal color-white p-1 px-3" />
                                                <FontAwesomeIcon icon={faJava} className="text-2xl font-normal color-white p-1 px-3" /> 
                                                <FontAwesomeIcon icon={faJs} className="text-2xl font-normal color-white p-1 px-3" />
                                                <FontAwesomeIcon icon={faNode} className="text-2xl font-normal color-white p-1 px-3" /> 
                                                <FontAwesomeIcon icon={faPhp} className="text-2xl font-normal color-white p-1 px-3" />
                                                <FontAwesomeIcon icon={faLaravel} className="text-2xl font-normal color-white p-1 px-3" />
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div  className="p-4 sm:w-1/2 flex-grow flex">
                                    <div className={`bg-${isDarkMode ? 'white' : 'black'} border py-4 px-3 flex-grow flex flex-col justify-between`}>
                                        <div className="">
                                            <h6 className={`text-sm py-2 text-start ${isDarkMode ? 'text-black' : 'text-white'}`}><strong>FrontEnd</strong></h6>
                                            <p className={`text-${isDarkMode ? 'black' : 'white'} text-sm text-start`}>I bring ideas to life in the browser, coding from scratch.</p>
                                            <p className={`text-sm ${isDarkMode ? 'text-black' : 'text-white'} py-2 text-start`}>- HTML, CSS, JavaScript, ReactJs, Bootstrap, Tailwind CSS</p>
                                            <p className={`${isDarkMode ? 'text-black' : 'text-white'} text-sm text-start pt-2`}>
                                                <FontAwesomeIcon icon={faHtml5} className="text-2xl font-normal color-white p-1 px-3" />
                                                <FontAwesomeIcon icon={faBootstrap} className="text-2xl font-normal color-white p-1 px-3" /> 
                                                <FontAwesomeIcon icon={faJs} className="text-2xl font-normal color-white p-1 px-3" />
                                                <FontAwesomeIcon icon={faReact} className="text-2xl font-normal color-white p-1 px-3" />
                                                <FontAwesomeIcon icon={faCss3Alt} className="text-2xl font-normal color-white p-1 px-3" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div  className="p-4 sm:w-1/2 flex-grow flex">
                                    <div className={`bg-${isDarkMode ? 'white' : 'black'} border py-4 px-3 hover:border-2 hover:border-${isDarkMode ? 'white' : 'black'} transition-all ease-in-out flex-grow flex flex-col justify-between`}>
                                        <div className="">
                                            <p className={`text-sm py-2 text-start ${isDarkMode ? 'text-black' : 'text-white'}`}><strong>DataBases</strong></p>
                                            <p className={`text-sm ${isDarkMode ? 'text-black' : 'text-white'} text-start pt-2`}>- MySQL, MongoDB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Skills;
