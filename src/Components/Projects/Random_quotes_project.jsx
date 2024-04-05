import { NavLink } from "react-router-dom";
import Screenshot5 from "../../../public/assets/images/Screenshot5.png";

function Random_quotes_project() {
    return (
        <div className="flex-col lg:flex lg:justify-center  pt-16 pb-10">
            <NavLink to="/Projects" className="flex px-8">
            <h6 className="underline my-auto"> Go Back</h6>
            <h1 className="text-xl mx-auto">
        <strong>Random quotes</strong>
      </h1>
      </NavLink>
      
      <p className="py-3 px-8 text-start text-base text-gray-700 leading-relaxed">
      a simple application generate random quotes with HTML, CSS, javaScript.
      </p>
      <h5 className="py-3 px-8  text-start text-base text-gray-700 leading-relaxed"><strong>Live Demo:</strong><a href="https://random-quotes-ruby.vercel.app/"> see the project</a></h5>
      <h4 className="text-sm pb-2 text-start px-8">
        Here&apos;s some screen shot:
      </h4>
      <div>
        <img src={Screenshot5} alt="" className="py-2 w-2/3 mx-auto" />
      </div>
    </div>
    );
}

export default Random_quotes_project;