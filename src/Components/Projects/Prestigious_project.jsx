import { NavLink } from "react-router-dom";

function Prestigious_project() {
    return (
        <div className="flex-col lg:flex lg:justify-center  pt-16 pb-10">
            <NavLink to="/Projects" className="flex px-8">
            <h6 className="underline my-auto"> Go Back</h6>
            <h1 className="text-xl mx-auto">
        <strong>Prestigious E-commerce website</strong>
      </h1>
      </NavLink>
      
      <p className="py-3 px-8 text-start text-base text-gray-700 leading-relaxed">
      An e-commerce website to sell jewelries and accessories, this application based on MERN stack technologies (MongoDB for DataBase, Express, ReactJs and NodeJs) and Redux Toolkit. I create this website in partnership with two people ( Taha-arch and amineelbouzydy).
      </p>
      <h5 className="py-3 px-8  text-start text-base text-gray-700 leading-relaxed"><strong>Live Demo:</strong><a href="https://prestigious-five.vercel.app/"> see the project</a></h5>
      <h4 className="text-sm pb-2 text-start px-8">
        Here&apos;s some screen shot:
      </h4>
      <div>
        <img src="https://res.cloudinary.com/dfin3vmgz/image/upload/v1712279784/Screenshot1_z0xmkc.png" alt="" className="py-2 w-2/3 mx-auto" />
      </div>
      <div>
        <img src="https://res.cloudinary.com/dfin3vmgz/image/upload/v1712279784/Screenshot2_vzcjw4.png" alt="" className="py-2 w-2/3 mx-auto" />
      </div>
      <div>
        <img src="https://res.cloudinary.com/dfin3vmgz/image/upload/v1712279784/Screenshot3_kqj0gj.png" alt="" className="py-2 w-2/3 mx-auto" />
      </div>
    </div>
    );
}

export default Prestigious_project;