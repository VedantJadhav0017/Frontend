import { useNavigate } from "react-router-dom";
import mentalhealth from "../assets/mentalhealth.webp";
import { useSelector } from "react-redux";
import people from "../assets/people.png";

function MainHeader() {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <div className="flex px-16 pt-12 max-lg:flex-wrap-reverse max-md:p-2 ">
        <div className="px-4">
          <h1 className="bg-text text-7xl font-semibold py-8 text-start max-lg:text-4xl text-blue-600">
            <strong className="text-blue-800">Mental Bliss</strong>
            <br />
            Nurture Your Mind!
          </h1>

          <p className="text-gray-800 text-xl mb-7 font-mono">
            Mental Bliss is a comprehensive online platform dedicated to
            supporting mental health and wellness. Our mission is to provide
            accessible, reliable, and compassionate resources to help
            individuals achieve mental clarity and emotional balance. At Mental
            Bliss, we understand the complexities of mental health, and we are
            committed to offering a safe space where you can explore a variety
            of tools and strategies for personal growth and well-being.
          </p>
          <div>
            <div className="py-2 flex">
              <img src={people} alt="people" className="max-md:w-full" />
              <p className="text-black py-2 pl-2 text-lg max-md:text-xs">
                Connect with lots and lots of people....
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={mentalhealth} alt="ai" className="w-3/4 rounded-full" />
        </div>
      </div>
      {/* <Links /> */}
    </>
  );
}

export default MainHeader;

