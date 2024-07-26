import React from "react";
import banner from "../../public/Banner.png";
import additionalImage from "../../public/AdditionalImage.webp"; // Add your additional image here

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, We welcome you here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
              Explore our online bookstore, your one-stop destination for educational books. We offer a vast selection of textbooks, reference materials, and academic resources. Whether you're a student, teacher, or lifelong learner, you'll find the books you need to succeed.
            </p>
          </div>
          <div className="mt-8">
            <img
              src={additionalImage}
              className="w-full md:w-3/4 mx-auto rounded-lg"
              alt="Additional"
            />
          </div>
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[650px] md:h-[560px] md:ml-12"
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
