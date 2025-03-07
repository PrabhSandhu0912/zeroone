import React from "react";
import aboutImg from "../assets/mobile-login.png";
import Maecenas from '../assets/maecenas.png'

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Product = () => {
  return (
    <div className="my-12" id="product">
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          >
            <img src={aboutImg} alt="Business Growth" className="w-full" />
          </motion.div>
          <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              Elevate Your Business with Expert Financial Consulting
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Our team of experienced consultants specializes in tax advisory, accounting services, and business strategy development. We provide tailored financial solutions to help your business grow efficiently while ensuring compliance with industry regulations. Let us take care of the numbers, so you can focus on what truly matters—your business.
            </p>
            <button className="btn-primary">Learn More</button>
          </motion.div>
        </div>
      </div>

      {/* company stats */}
      <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-start items-center gap-8">
          <div className="md:w-1/3">
            <img src={Maecenas} alt="Success Stories" />
          </div>

          {/* stats */}
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-6">
                Our clients trust us to provide in-depth financial insights and strategic guidance. With years of expertise, we have helped businesses across various industries optimize their financial operations, maximize profits, and stay ahead in the competitive market.
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">Alex Johnson</h5>
              <p className="text-base text-neutralGrey mb-8">
                CEO, Global Financial Solutions
              </p>
              <div>
                <div className="flex gap-8 items-center flex-wrap">
                  <img src="/src/assets/icons/company1.png" alt="Company 1" className="cursor-pointer" />
                  <img src="/src/assets/icons/company2.png" alt="Company 2"  className="cursor-pointer"/>
                  <img src="/src/assets/icons/company3.png" alt="Company 3" className="cursor-pointer" />
                  <img src="/src/assets/icons/company4.png" alt="Company 4" className="cursor-pointer" />
                  <img src="/src/assets/icons/company5.png" alt="Company 5" className="cursor-pointer" />
                  <img src="/src/assets/icons/company6.png" alt="Company 6" className="cursor-pointer" />
                  <div className="flex gap-8 items-center">
                    <a href="/" className="font-bold text-brandPrimary hover:text-neutralBlack">
                      Meet all customers
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="11"
                        viewBox="0 0 17 11"
                        fill="none"
                        className="inline-block ml-2"
                      >
                        <path
                          d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                          stroke="#4CAF4F"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Product;