import { NavLink } from "react-router-dom";

function Random_quotes_project({ isDarkMode }) {
  return (
    <div className={`flex-col lg:flex lg:justify-center pt-16 pb-10 ${isDarkMode ? 'text-white bg-black' : 'text-black bg-white'}`}>
      <NavLink to="/Projects" className="flex px-8">
        <h6 className="underline my-auto text-sm"> Go Back</h6>
        <h1 className="sm:text-xl mx-auto">
          <strong>Random quotes</strong>
        </h1>
      </NavLink>
      
      <p className="py-3 px-8 text-start text-base leading-relaxed">
        A simple application to generate random quotes with HTML, CSS, and JavaScript.
      </p>
      <h5 className="py-3 px-8 text-start text-base leading-relaxed"><strong>Live Demo:</strong><a target="_blank" href="https://random-quotes-ruby.vercel.app/"> see the project</a></h5>
      <h4 className="text-sm pb-2 text-start px-8">
        Here&apos;s some screen shot:
      </h4>
      <div>
        <img src="https://res.cloudinary.com/dfin3vmgz/image/upload/v1712279784/Screenshot5_uqo3hr.png" alt="" className="py-2 w-2/3 mx-auto" />
      </div>
    </div>
  );
}

export default Random_quotes_project;
