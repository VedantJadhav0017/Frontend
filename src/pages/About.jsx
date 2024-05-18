import React from 'react';
import Vedant from "../assets/Vedant.jpeg";
import profile from "../assets/profile.jpg";
import Soham from "../assets/Soham.webp";
import Vishal from "../assets/Vishal.png";

function About() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight light:text-white">Our leadership</h2>
        <p className="mt-1 text-gray-600 light:text-neutral-400">Creative people</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Vishal */}
        <div style={{backgroundImage: "linear-gradient(to right, #87CEEB, #ffffff)"}} className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 light:bg-neutral-900 light:border-neutral-700 light-bg-gradient">
          <div className="flex items-center gap-x-4">
            <img className="rounded-full size-20" src={Vishal} alt="Vishal Satpute"/>
            <div className="grow">
              <h3 className="font-medium text-gray-800 light:text-neutral-200">Vishal Satpute</h3>
              <p className="text-xs uppercase text-gray-500 light:text-neutral-500">Backend/Frontend Developer</p>
            </div>
          </div>
          <p className="mt-3 text-gray-500 light:text-neutral-500">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
          <div className="mt-3 space-x-1">
            {/* Social media icons */}
          </div>
        </div>

        {/* Vedant */}
        <div style={{backgroundImage: "linear-gradient(to right, #87CEEB, #ffffff)"}} className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 light:bg-neutral-900 light:border-neutral-700">
          <div className="flex items-center gap-x-4">
            <img className="rounded-full size-20" src={Vedant} alt="Vedant Jadhav"/>
            <div className="grow">
              <h3 className="font-medium text-gray-800 light:text-neutral-200">Vedant Jadhav</h3>
              <p className="text-xs uppercase text-gray-500 light:text-neutral-500">UI/UX Designer</p>
            </div>
          </div>
          <p className="mt-3 text-gray-500 light:text-neutral-500">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
          <div className="mt-3 space-x-1">
            {/* Social media icons */}
          </div>
        </div>

        {/* Soham */}
        <div style={{backgroundImage: "linear-gradient(to right, #87CEEB, #ffffff)"}} className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 light:bg-neutral-900 light:border-neutral-700">
          <div className="flex items-center gap-x-4">
            <img className="rounded-full size-20" src={Soham} alt="Soham Balwant"/>
            <div className="grow">
            <h3 className="font-medium text-gray-800 light:text-neutral-200">Soham Balwant</h3>
              <p className="text-xs uppercase text-gray-500 light:text-neutral-500">Graphic Designer</p>
            </div>
          </div>
          <p className="mt-3 text-gray-500 light:text-neutral-500">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
          <div className="mt-3 space-x-1">
            {/* Social media icons */}
          </div>
        </div>

        {/* Anamika */}
        <div style={{backgroundImage: "linear-gradient(to right, #87CEEB, #ffffff)"}} className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 light:bg-neutral-900 light:border-neutral-700">
          <div className="flex items-center gap-x-4">
            <img className="rounded-full size-20" src={profile} alt="Anamika Saini"/>
            <div className="grow">
              <h3 className="font-medium text-gray-800 light:text-neutral-200">Anamika Saini</h3>
              <p className="text-xs uppercase text-gray-500 light:text-neutral-500">SEO Analyst</p>
            </div>
          </div>
          <p className="mt-3 text-gray-500 light:text-neutral-500">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
          <div className="mt-3 space-x-1">
            {/* Social media icons */}
          </div>
        </div>

        {/* Yamini */}
        <div style={{backgroundImage: "linear-gradient(to right, #87CEEB, #ffffff)"}} className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 light:bg-neutral-900 light:border-neutral-700">
          <div className="flex items-center gap-x-4">
            <img className="rounded-full size-20" src={profile} alt="Yamini"/>
            <div className="grow">
              <h3 className="font-medium text-gray-800 light:text-neutral-200">Yamini</h3>
              <p className="text-xs uppercase text-gray-500 light:text-neutral-500">Marketing Manager</p>
            </div>
          </div>
          <p className="mt-3 text-gray-500 light:text-neutral-500">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
          <div className="mt-3 space-x-1">
            {/* Social media icons */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

