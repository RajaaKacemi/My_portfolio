import { NavLink } from "react-router-dom";

function Template_travel({ isDarkMode }) {
  return (
    <div className={`flex-col lg:flex lg:justify-center pt-16 pb-10 ${isDarkMode ? 'text-white bg-black' : 'text-black bg-white'}`}>
      <NavLink to="/Projects" className="flex px-8">
        <h6 className="underline my-auto text-sm"> Go Back</h6>
        <h1 className="sm:text-xl mx-auto">
          <strong>A simple  template created using HTML and CSS.</strong>
        </h1>
      </NavLink>
      
      <p className="py-3 px-8 text-start text-base leading-relaxed">
      A simple template created using HTML and CSS.
      </p>
      <h5 className="py-3 px-8 text-start text-base leading-relaxed"><strong>Live Demo:</strong><a target="_blank" href="https://traveltemplate-ml2nmb40b-rajaakacemis-projects.vercel.app/"> see the project</a></h5>
      <h4 className="text-sm pb-2 text-start px-8">
        Here&apos;s some screen shot:
      </h4>
      <div>
        <img src="https://res.cloudinary.com/dfin3vmgz/image/upload/v1716881302/products/Screenshot_2024-05-28_082633_tdmbfv.png" alt="" className="py-2 w-2/3 mx-auto" />
      </div>
      <div>
        <img src="https://res.cloudinary.com/dfin3vmgz/image/upload/v1716881301/products/Screenshot_2024-05-28_082653_kzduzk.png" alt="" className="py-2 w-2/3 mx-auto" />
      </div>
      <div>
        <img src="https://res.cloudinary.com/dfin3vmgz/image/upload/v1716881301/products/Screenshot_2024-05-28_082644_am4sa2.png" alt="" className="py-2 w-2/3 mx-auto" />
      </div>
    </div>
  );
}

export default Template_travel;
