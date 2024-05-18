import React from "react";

function TextBox() {
  return (
    <div className="bg-gradient-to-r from-skyblue to-white m-20 p-12 shadow-2xl max-md:m-8 rounded-lg">
      <div className="flex justify-between items-start max-md:flex-wrap">
        <div>
          <div className="bg-bar w-20 rounded-lg h-1" />
          <h1 className="py-1">What is Mental Bliss</h1>
        </div>
        <p className="text-[#1c3146] text-start w-[60%] py-1 max-md:w-full px-2">
          Mental Bliss is an innovative online platform dedicated to enhancing
          mental health and well-being. Our aim is to provide individuals with
          the tools, resources, and support needed to achieve mental clarity,
          emotional balance, and overall happiness. At Mental Bliss, we
          understand the challenges of maintaining mental health in today's
          fast-paced world, and we are here to offer a safe and welcoming space
          for your mental wellness journey.
        </p>
      </div>
      <div className="flex justify-between items-center py-12 max-md:flex-wrap">
        <p className="text-5xl font-semibold w-1/2 max-md:w-full py-6 text-black">
          Explore Limitless Possibilities
        </p>
        <p className="bg-text text-2xl font-normal">Therapist Directory</p>
      </div>
      <div>
        <div className="flex gap-4 max-md:flex-wrap">
          <div className="">
            <div className="bg-bar w-20 rounded-lg h-1" />
            <p className="font-bold py-1">Therapist Directory</p>
            <p className="text-[#1c3146] text-start py-1">
              Easily locate and connect with licensed mental health
              professionals through our comprehensive therapist directory,
              making it simple to find the right support for your needs.
            </p>
          </div>
          <div className="">
            <div className="bg-bar w-20 rounded-lg h-1" />
            <p className="font-bold py-1">Community Support</p>
            <p className="text-[#1c3146] text-start py-1">
              Join our vibrant community forum, where users come together to
              share insights, ask questions, and collaborate on projects.
              Connect with like-minded individuals, exchange ideas, and expand
              your network in an engaging and supportive environment.
            </p>
          </div>
          <div className="">
            <div className="bg-bar w-20 rounded-lg h-1" />
            <p className="font-bold py-1">Crisis Support</p>
            <p className="text-[#1c3146] text-start py-1">
              A dedicated section with information on immediate resources for
              users in crisis, including hotlines, emergency contact details,
              and links to crisis intervention services.Ensures that users have
              quick access to critical support and resources when they need it
              most, potentially saving lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextBox;
