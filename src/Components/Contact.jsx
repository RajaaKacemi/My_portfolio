import myImage from '../../public/assets/images/undraw_newsletter_re_wrob.svg';

function Contact() {
    return (
        <div className="lg:flex lg:justify-between justify-between px-8 pt-12">

            <div className="lg:w-1/2">
            <div className="max-w-md mx-auto p-6 border ">
      <h1 className="text-xl font-semibold mb-4">Contact Me</h1>
      <form className="flex flex-col gap-4 text-start ">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm text-gray-500 py-2">Name</label>
          <input type="text" id="name" name="name" placeholder=" "  className="border-b border-gray-300 focus:outline-none focus:border-black" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm text-gray-500 py-2">Email *</label>
          <input type="email" id="email" name="email" placeholder=" " required className="border-b border-gray-300 focus:outline-none focus:border-black" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm text-gray-500 py-2">Message *</label>
          <textarea id="message" name="message" rows="4" placeholder=" " required className="border border-gray-300 focus:outline-none focus:border-black" />
        </div>
        <button type="submit" className="bg-black text-white py-2 px-4  hover:bg-gray-800 transition-colors">Submit</button>
      </form>
    </div>
            </div>

            <div className="lg:w-1/2 py-3">
            <img src={myImage} alt="developer" className='w-full lg:w-auto mx-auto max-w-full' />
            </div>
            
        </div>
    );
}

export default Contact;