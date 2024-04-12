import { NavLink } from "react-router-dom";

function Dashboard_project({ isDarkMode }) {
  return (
    <div className={`flex-col lg:flex lg:justify-center pt-16 pb-10 ${isDarkMode ? 'text-white bg-black' : 'text-black bg-white'}`}>
      <NavLink to="/Projects" className="flex px-8">
        <h6 className="underline my-auto text-sm"> Go Back</h6>
        <h1 className="sm:text-xl mx-auto text-sm">
          <strong>E-commerce Management Dashboard</strong>
        </h1>
      </NavLink>
      <p className="py-3 px-8 text-start text-base leading-relaxed">
        Our E-commerce Management Dashboard is a robust solution designed to empower businesses operating online retail platforms with efficient management of products, orders, and user interactions, while providing valuable statistical insights for informed decision-making.
      </p>
      <p className="py-1 px-8 text-start text-base leading-relaxed"><strong>Product Management:</strong></p>
      <p className="py-1 px-8 text-start text-base leading-relaxed">
        -Easily add, edit, and remove products from the e-commerce platform.
      </p>
      <p className="py-1 px-8 text-start text-base leading-relaxed">-Organize products into categories and manage inventory effortlessly.</p>
      <p className="py-1 px-8 text-start text-base leading-relaxed"><strong>Order Tracking and Management:</strong></p>
      <p className="py-1 px-8 text-start text-base leading-relaxed">
        -Centralized dashboard to monitor incoming orders, processing status, and order fulfillment.
      </p>
      <p className="py-1 px-8 text-start text-base leading-relaxed">-Efficient order tracking with real-time updates on order status and shipping details.</p>
      <p className="py-1 px-8 text-start text-base leading-relaxed">-Integrated payment processing and order invoicing for seamless transactions.</p>
      <p className="py-1 px-8 text-start text-base leading-relaxed"><strong>User Administration:</strong></p>
      <p className="py-1 px-8 text-start text-base leading-relaxed">
        -Manage user accounts, permissions, and access levels securely.
      </p>
      <p className="py-1 px-8 text-start text-base leading-relaxed">-Detailed user profiles with purchase history, preferences, and activity logs,</p>
      <p className="py-1 px-8 text-start text-base leading-relaxed">I create this website in partnership with two people <a target="_blank" href="https://www.linkedin.com/in/taha-el-atoui-4089a2227/" >@Taha El atoui</a> and <a target="_blank" href="https://www.linkedin.com/in/amine-el-bouzydy-06943a22b/">@Amine Elbouzydy</a>.</p>
      {/* <h5 className="py-1 px-8 text-start text-base leading-relaxed"><strong>Live Demo:</strong><a href="https://github.com/RajaeKacemi/E-commerceWebsite"> see the project</a></h5> */}
      <h4 className="text-sm pb-2 text-start px-8">
        Here&apos;s some screens shot:
      </h4>
      <div>
        <img src="https://res.cloudinary.com/dfin3vmgz/image/upload/v1712765396/images/Screenshot_2024-04-10_160446_khbwk2.png" alt="" className="py-2 w-2/3 mx-auto" />
        <p>screen 1</p>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dfin3vmgz/image/upload/v1712765407/images/Screenshot_2024-04-10_160621_elzdto.png" alt="" className="py-2 w-2/3 mx-auto" />
        <p>screen 2</p>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dfin3vmgz/image/upload/v1712765396/images/Screenshot_2024-04-10_160646_cvv0kd.png" alt="" className="py-2 w-2/3 mx-auto" />
        <p>screen 3</p>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dfin3vmgz/image/upload/v1712765396/images/Screenshot_2024-04-10_160701_bsa8ye.png" alt="" className="py-2 w-2/3 mx-auto" />
        <p>screen 4</p>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dfin3vmgz/image/upload/v1712765407/images/Screenshot_2024-04-10_160720_l31oqb.png" alt="" className="py-2 w-2/3 mx-auto" />
        <p>screen 5</p>
      </div>
    </div>
  );
}

export default Dashboard_project;
