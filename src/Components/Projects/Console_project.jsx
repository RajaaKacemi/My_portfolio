import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Console_project({ isDarkMode }) {
  return (
    <div className={`flex-col lg:flex lg:justify-center px-8 pt-16 pb-10  ${isDarkMode ? 'text-white bg-black' : 'text-black bg-white'}`}>
      <NavLink to="/Projects" className="flex">
        <h6 className="underline my-auto text-sm"> Go Back</h6>
        <h1 className="sm:text-xl mx-auto">
          <strong>The Console (CLI)</strong>
        </h1>
      </NavLink>
      <p className="py-3 text-start text-base leading-relaxed">
        The HBNB console is the first step in an attempt to clone the known AirBnb site. The console is a commmand line interface that enables the user manage models, i.e perform crate, read, update, delete,.. operations on the models. “model” in a OOP project is the representation of an object/instance.
      </p>
      <div>
        <img src="https://res.cloudinary.com/dfin3vmgz/image/upload/v1712279781/image_l6ppps.png" alt="" className="py-2 mx-auto" />
      </div>
      <h4 className="text-xl py-1">
        <strong>Storage</strong>
      </h4>
      <p className="py-3 text-start text-base leading-relaxed">
        Persistency is really important for a web application. It means: every time your program is executed, it starts with all objects previously created from another execution. Without persistency, all the work done in a previous execution won’t be saved and will be gone. In this project, you will manipulate 2 types of storage: file and database. For the moment, you will focus on file. Why separate “storage management” from “model”? It’s to make your models modular and independent. With this architecture, you can easily replace your storage system without re-coding everything everywhere. You will always use class attributes for any object. Why not instance attributes? For 3 reasons: Provide easy class description: everybody will be able to see quickly what a model should contain (which attributes, etc…) Provide default value of any attribute In the future, provide the same model behavior for file storage or database storage
      </p>
      <h4 className="text-xl py-1">
        <strong>Here&apos;s an illustration:</strong>
      </h4>
      <img src="https://res.cloudinary.com/dfin3vmgz/image/upload/v1712279782/imageT_a4a4qw.png" alt="" className="pt-2" />
    </div>
  );
}

export default Console_project;
