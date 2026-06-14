"use client";

import React, { useState } from "react";
import { FaFacebook, FaMeta, FaMinus, FaPlus } from "react-icons/fa6";
import Lottie from "lottie-react";
import img from "@/assets/digital/Facebook-marketing-strategy-that-works-in-2021-1.jpg";
import img4 from "@/assets/digital/5.webp";
import img1 from "@/assets/digital/6287ca34-ceee-405c-af1f-c98906b7add2-1024x1024-1.webp";
import img2 from "@/assets/digital/academic-1024x1024-1.webp";
import img3 from "@/assets/digital/img3.webp";
import animationmarketing from "./_Digital/pay-per-click-digital-marketing.json";
import Container from "@/Components/utils/Container";
import Image from "next/image";

const FACEBOOKMARKETING = () => {
  let [show1, setShow1] = useState(false);
  let [show2, setShow2] = useState(false);
  let [show3, setShow3] = useState(false);

  let handleshow1 = () => {
    setShow1(!show1);
    setShow2(false);
    setShow3(false);
  };
  let handleshow2 = () => {
    setShow1(false);
    setShow2(!show2);
    setShow3(false);
  };
  let handleshow3 = () => {
    setShow1(false);
    setShow2(false);
    setShow3(!show3);
  };
  const features = [
    { 
      icon: img1,
      title: "Ad Development",
      desc: "After placing your order, before running the ad, we will guide you through the ad planning process, including content planning and various aspects related to the ad. We will also give you an idea of what type of ad will be created.Furthermore, if you require a specific marketing plan as part of our complete Facebook marketing package, we will conduct market research and case studies to deliver a comprehensive marketing plan tailored to your business.",
    },
    {
      icon: img2,
      title: "Ad Management",
      desc: "After your ad starts running, we will continuously monitor its performance and provide you with timely reports so that you are fully informed about its status. Additionally, if your ad spending becomes higher than expected, we will offer complete support and guidance to optimize the ad and reduce costs. You will receive full instructions from us on ad optimization to ensure the best possible results.",
    },
    {
      icon: img3,
      title: "Post-Ad Services",
      desc: "Once the ad campaign is complete, we provide a full report on its performance. Additionally, if you have encountered any marketing-related challenges or need guidance on planning, we offer one-on-one consultancy through virtual meetings. In case of any issues with the ad, such as ad rejection, creative fatigue, or page restrictions, we provide complete solutions and guidance to help you overcome these challenges.",
    },
  ];
  return (
    <>
      <div className=" pb-20">
        <Container>
          <div className=" lg:flex gap-1 items-center ">
             <div className=" lg:hidden block h-130 sm:h-full md:h-210 ">
              <Lottie animationData={animationmarketing} className="md:-mt-70 -mt-35 sm:mt-0" loop={true} />
            </div>
            <div className=" sm:mt-0 px-5 lg:px-0">
              <h2 className=" font-bold text-4xl md:text-6xl md:w-160 font-rajdhani leading-10 md:leading-18">
                Nowadays, Facebook marketing is a significant part of digital
                marketing
              </h2>
              <p className=" mt-3 sm:text-[17px] md:text-xl lg:text-2xl font-medium font-rubik lg:mt-12 text-gray-300 lg:w-150 lg:leading-10">
                Facebook marketing is the process of promoting a company’s
                products or services through Facebook to easily reach customers
                and increase brand awareness and visibility. In this method,
                advertisements are created for specific products or services and
                targeted toward potential customers
              </p>
              <button className="mt-10 text-sm md:text-xl font-medium px-2 md:px-4 py-2 md:py-2 shadow-[0_3px_0_4px] bg-black rounded-[2px] cursor-pointer shadow-amber-600 ">
                GET FREE CONSULTATION
              </button>
            </div>
            <div className=" hidden lg:block ">
              <Lottie animationData={animationmarketing} loop={true} />
            </div>
          </div>
        </Container>
      </div>

      <div className=" bg-gray-700/60 text-white py-10 md:py-18">
        <Container>
          <div className=" flex justify-between items-center px-2 lg:px-0">
            <div className=" text-center">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold flex gap-2 justify-center ">
                <FaMeta /> Meta
              </h2>
              <p className="mt-5 font-medium  text-[10px] sm:text-sm md:text-xl lg:text-2xl">Meta Business Partner</p>
            </div>
            <div className=" text-center">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold flex justify-center gap-2 ">
                10+ Years
              </h2>
              <p className="mt-5 font-medium  text-[10px] sm:text-sm md:text-xl lg:text-2xl">
                Facebook Ads Experience
              </p>
            </div>
            <div className=" text-center">
              <h2 className=" text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold flex justify-center gap-2 ">
                400+
              </h2>
              <p className="mt-5 font-medium  text-[10px] sm:text-sm md:text-xl lg:text-2xl">Client Successes</p>
            </div>
            <div className=" text-center">
              <h2 className=" text-xl sm:text-2xl md:text-4xl lg:text-5xl  font-bold flex justify-center gap-2 ">
                $80 M
              </h2>
              <p className="mt-5 font-medium  text-[10px]  sm:text-sm md:text-xl lg:text-2xl">Revenue Generated</p>
            </div>
          </div>
        </Container>
      </div>

      <div className="lg:my-20 my-10">
        <Container>
          <div className=" lg:flex justify-between items-center px-2 lg:px-0">
            <div className="">
              <h3 className=" text-3xl sm:text-4xl md:text-5xl font-bold text-white  md:leading-15">
                Why is Facebook marketing necessary?
              </h3>
              <h3 className=" font-bol lg:w-140 d text-2xl md:text-3xl mt-7 text-gray-400">
                At least 42% of business owners worldwide believe that Facebook
                is the primary tool for growing and promoting their businesses.
              </h3>
             
            </div>
            <div className="w-full lg:w-300">
               <Image src={img} alt="" className=" rounded-[10px] w-full" />
            </div>
          </div>
           <p className="font-rubik text-gray-400 max-w-full font-medium  sm:text-xl md:text-2xl mt-10 md:mt-24 md:leading-10">
                Facebook is widely known as the largest social networking
                platform in the world. Every day, about 1.5 billion people log
                into Facebook at least once, and the number rises to around 2.3
                billion users per month. More than 7 million active companies
                create advertisements for this huge audience. In Bangladesh,
                more than 52.7 million people currently use Facebook, which
                represents about 32.2% of the country’s total population. Among
                these users, a large number are customers as well as many
                sellers. These numbers clearly show how important Facebook
                marketing has become. Over the past decade, Facebook has
                transformed from the largest social networking platform on the
                internet into the biggest marketplace and has established itself
                as one of the most reliable platforms for business promotion.
              </p>
        </Container>
      </div>
      <div className=" ">
        <Container>
          <div className="py-20">
            <h3 className=" text-3xl px-1 lg:px-0 lg:text-6xl font-bold bg-gradient-to-r from-blue-400 bg-clip-text text-transparent to-amber-400  lg:leading-19  text-center  mx-auto">
              Why should you choose our Facebook marketing services?
            </h3>
            <p className=" px-2 lg:px-0 md:text-xl text-center mt-5 font-medium ">
              We have skilled and experienced Facebook marketers who create the
              right marketing plans and advertisements for your business and
              continuously track their performance, ensuring you get the best
              possible ROI on your investment. We are dedicated to achieving the
              optimal results for your business.
            </p>

            <div className=" grid px-2 md:grid-cols-2 lg:grid-cols-3 gap-2 my-15 justify-between">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="bg-linear-to-b from-blue-700 to-blue-950 text-white p-8 rounded-xl shadow-lg text-center hover:scale-103 transition duration-300"
                >
                  <div className="flex justify-center mb-4 ">
                    {/* <img
                      src={item.icon}
                      className=" w-60 rounded-[10px]"
                      alt="img"
                    /> */}
                    <Image src={item.icon} alt="img" width={224} height={224} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                  <p className="text-sm leading-7">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div className="lg:my-20 my-5">
        <Container>
          <div className=" lg:flex justify-between px-3 xl:px-0 items-center">
            <div className="">
              <h3 className=" text-3xl lg:w-120 xl:w-200  md:text-5xl font-bold text-green-400 md:leading-15">
                Would you like to have a meeting about Facebook marketing?
              </h3>

              <p className=" lg:w-120 xl:w-200 font-medium text-xl md:text-2xl md:mt-24 mt-10 leading-8 md:leading-10">
                Our experienced Facebook marketing team will create a tailored
                marketing plan based on your budget and requirements, providing
                comprehensive support to help your business grow.
              </p>
              <button className=" cursor-pointer rounded-[10px] hover:bg-green-800 px-4 py-2 bg-green-700 text-white font-medium mt-9">
                GET FREE CONSULTATION
              </button>
            </div>
            <div className="">
              <Image src={img4} alt="" className=" rounded-[10px] w-full" />
            </div>
          </div>
        </Container>
      </div>

      <div className="  py-20 px-3  md:px-0">
        <Container>
          <div className="">
            <h3 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-t from-blue-800 to-amber-500 bg-clip-text text-transparent lg:leading-19 text-center ">
              Some questions related to Facebook marketing:
            </h3>
            <div className=" flex items-center gap-3 justify-center my-5">
              <div className=" flex">
                <FaMinus />
                <FaMinus className="-ml-1" />
                <FaMinus className="-ml-1" />
                <FaMinus className="-ml-1" />
                <FaMinus className="-ml-1" />
                <FaMinus className="-ml-1" />
              </div>
              <FaFacebook className=" text-5xl text-blue-700  " />
              <div className=" flex">
                <FaMinus />
                <FaMinus className="-ml-1" />
                <FaMinus className="-ml-1" />
                <FaMinus className="-ml-1" />
                <FaMinus className="-ml-1" />
                <FaMinus className="-ml-1" />
              </div>
            </div>

            <div className=" shadow mt-5">
              <div
                onClick={handleshow1}
                className=" border cursor-pointer border-gray-200 bg-white flex justify-between px-2 py-4"
              >
                <h2 className=" text-xl md:text-2xl text-black font-medium">
                  For how long will my advertisement campaign run?
                </h2>
                {show1 ? (
                  <FaMinus className="text-3xl text-green-600" />
                ) : (
                  <FaPlus className="text-3xl text-green-600" />
                )}
              </div>
              {show1 ? (
                <div className=" bg-green-50 p-6 border border-gray-100">
                  <p className="  md:text-xl leading-7 text-black font-medium md:leading-9">
                    The duration of an ad depends on its budget. You can set the number of days according to your convenience and allocate your budget accordingly. The results you get will be proportional to your daily spend. You can run a campaign with a minimum of $1 per day, which means a $30 budget can run for up to 30 days.

However, if you want to optimize your ad from the start and achieve better results, we recommend allocating at least $3–$10 per day to ensure a standard delivery speed and quality leads. If Facebook does not spend your full budget or any excess amount remains, we provide a refund for the unused portion.
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className=" shadow mt-5">
              <div
                onClick={handleshow2}
                className=" border cursor-pointer border-gray-200 bg-white flex justify-between px-2 py-4"
              >
                <h2 className="text-xl md:text-2xl text-black font-medium">
                  How long will my ad run?
                </h2>
                {show2 ? (
                  <FaMinus className="text-3xl text-green-600" />
                ) : (
                  <FaPlus className="text-3xl text-green-600" />
                )}
              </div>
              {show2 ? (
                <div className=" bg-green-50 p-6 border border-gray-100">
                  <p className="md:text-xl leading-7 text-black font-medium md:leading-9">
                    The duration of an ad depends on its budget. You can set the
                    number of days according to your preference and allocate
                    your budget accordingly. The results you get will be
                    proportional to your daily spend. You can run a campaign
                    with a minimum of $1 per day. For example, with a $30
                    budget, you can run a campaign for up to 30 days. However,
                    if you want to optimize your ad from the start and achieve
                    better results, we recommend allocating at least $3–$10 per
                    day to ensure standard speed and quality leads. If Facebook
                    does not spend your full budget or any excess amount
                    remains, we provide a refund for the unused portion.
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className=" shadow mt-5">
              <div
                onClick={handleshow3}
                className=" border cursor-pointer border-gray-200 bg-white flex justify-between px-2 py-4"
              >
                <h2 className=" text-xl md:text-2xl text-black font-medium">
                  For how long will my advertisement campaign run?
                </h2>
                {show3 ? (
                  <FaMinus className="text-3xl text-green-600" />
                ) : (
                  <FaPlus className="text-3xl text-green-600" />
                )}
              </div>
              {show3 ? (
                <div className=" bg-green-50 p-6 border border-gray-100">
                  <p className=" md:text-xl leading-7 text-black font-medium md:leading-9">
                    The duration of an ad depends on its budget. You can choose
                    the number of days according to your convenience and
                    allocate your budget accordingly. The results you get will
                    be proportional to your daily spend. You can run a campaign
                    with a minimum of $1 per day. For example, with a $30
                    budget, you can run a campaign for up to 30 days. However,
                    if you want to optimize your ad from the start and achieve
                    better results, we recommend allocating at least $3–$10 per
                    day to ensure standard delivery speed and quality leads. If
                    Facebook does not spend your full budget or any excess
                    remains, we provide a refund for the unused portion.
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default FACEBOOKMARKETING;