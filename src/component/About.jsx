import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              excepturi expedita sunt recusandae molestiae odit officia
              asperiores soluta, tenetur blanditiis voluptatem labore! Pariatur
              doloremque laudantium sunt labore rerum quis tempore. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Inventore repellat sapiente
              iusto. Quos impedit modi hic sequi ipsam vero quod! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. At incidunt aliquid
              quo, ea quasi aut? Repudiandae facere cupiditate rerum recusandae
              nihil magnam fugit atque amet officia, reiciendis molestias saepe
              eaque voluptatem quos sequi qui veniam enim eligendi laudantium
              Voluptatibus!
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact us
            </NavLink>
          </div>
          <div className="col-md-6 my-5 d-flex justify-content-center">
            <img
              src="./assets/aboutUs.jpg"
              alt="about us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
