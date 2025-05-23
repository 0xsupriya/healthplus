import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ------Left Section------ */}
        <div>
          <img className="mb-5 w-55" src={assets.logo_} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            HealthPlus is your trusted partner in healthcare, connecting you
            with top doctors and specialists. Our mission is to make healthcare
            accessible, reliable, and convenient for everyone. Book
            appointments, access medical resources, and stay informed with
            Prescripto.
          </p>
        </div>

        {/* ------Center Section------ */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* ------Right Section------ */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-8837089216</li>
            <li>0xsupriya@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright Text  */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ HealthPlus - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
