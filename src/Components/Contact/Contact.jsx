import myImage from '../../../public/assets/images/undraw_newsletter_re_wrob.svg';
import EmailForm from './Components/EmailForm';
function Contact() {
    return (
        <div className="lg:flex lg:justify-between justify-between px-8 pt-12">

            <div className="lg:w-1/2">
            <div className="max-w-md mx-auto p-6 border ">
      <h1 className="text-xl font-semibold mb-4">Contact Me</h1>
      <EmailForm />
    </div>
            </div>

            <div className="lg:w-1/2 py-3">
            <img src={myImage} alt="developer" className='w-full lg:w-auto mx-auto max-w-full' />
            </div>
            
        </div>
    );
}

export default Contact;