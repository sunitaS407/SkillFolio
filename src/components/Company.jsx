import { FaMicrosoft, FaGoogle, FaAmazon } from "react-icons/fa";
import { SiCognizant } from "react-icons/si";
import { FaBuilding } from "react-icons/fa"; // IBM placeholder

const Company = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-indigo-50 via-white to-sky-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-sm md:text-base font-bold mb-6">
          Get Hired at <span className="text-indigo-500">Top Companies</span>
        </h2>

        {/* Logos with names */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* Microsoft */}
          <div className="flex items-center space-x-2">
            <FaMicrosoft className="text-3xl text-gray-700 hover:text-indigo-500 transition duration-300" />
            <span className="text-base font-medium text-gray-700">
              Microsoft
            </span>
          </div>

          {/* IBM */}
          <div className="flex items-center space-x-2">
            <FaBuilding className="text-3xl text-gray-700 hover:text-indigo-500 transition duration-300" />
            <span className="text-base font-medium text-gray-700">IBM</span>
          </div>

          {/* Cognizant (logo only) */}
          <div className="flex items-center justify-center">
            <SiCognizant className="text-5xl text-gray-700 hover:text-indigo-500 transition duration-300" />
          </div>

          {/* Google */}
          <div className="flex items-center space-x-2">
            <FaGoogle className="text-3xl text-gray-700 hover:text-indigo-500 transition duration-300" />
            <span className="text-base font-medium text-gray-700">Google</span>
          </div>

          {/* Amazon */}
          <div className="flex items-center space-x-2">
            <FaAmazon className="text-3xl text-gray-700 hover:text-indigo-500 transition duration-300" />
            <span className="text-base font-medium text-gray-700">Amazon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
