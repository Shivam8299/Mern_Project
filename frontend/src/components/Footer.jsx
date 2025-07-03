import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate()
  return (
    <div>
      <div className="flex flex-col sm:grid  grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm">
        <div>
          <button
            onClick={() => navigate("/")}
            className="text-xl cursor-pointer font-semi-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500"
            >
            TRENDYFY.
          </button>
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
            molestiae sed provident! Expedita dolore laudantium dolorem. Quia
            reprehenderit praesentium, est magni ratione illum nemo dolore
            quidem perferendis, aperiam cupiditate officia.
          </p>
        </div>
            <div className="mb-3">
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li >Privacy Policy </li>
                </ul>
            </div>
            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>9317958711</li>
                    <li>shivam@navgurukul.org</li>
                </ul>
            </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">copyright 2025@ trendyfy.com - All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
