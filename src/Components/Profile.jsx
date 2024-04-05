import myImage from '../../public/assets/images/undraw_dev_focus_re_6iwt.svg';

function Profile() {
    return (
        <div className="lg:flex lg:justify-center px-8 pt-10">
            <div className="lg:w-1/2 py-3">
                <img src={myImage} alt="developer" className='w-full lg:w-auto mx-auto max-w-full' />
            </div>
            <div className='lg:w-1/2 lg:px-8'>
                <p className='text-sm sm:text-base text-justify xl:text-lg font-normal text-black mt-2 md:mt-4 leading-loose'>
                    I am a passionate and skilled Software Developer specializing in <strong> Mobile and Web development </strong> with a strong dedication to quality and attention to detail. I am constantly seeking new challenges and opportunities to improve my craft. I stay updated with the latest industry trends and best practices <strong> by attending conferences , taking online courses</strong>, and experimenting with new technologies. I build functional, beautiful and user-friendly designs. My commitment to innovation ensures that clients receive cutting-edge and effective solutions.
                </p>
                <div className='py-2 flex gap-3'>
                <a className="px-2 py-2 border text-sm bg-black text-white " href='#' >Download Resume</a>
                <a className="px-2 py-2 border text-sm bg-black text-white" href="/Contact">Contact me</a>
                </div>
            </div>
        </div>
    );
}

export default Profile;
