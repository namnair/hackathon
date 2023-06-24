// pages/services/[service].js

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import servicesData from "../data.json";
import Confetti from "../components/Confetti";

export default function Service() {
  const router = useRouter();
  const { service } = router.query;

  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const foundService = servicesData.find(
      (data) => data.name.toLowerCase() === service
    );

    if (foundService) {
      setServiceData(foundService);
    }

    setLoading(false); // Set loading to false after fetching data
  }, [service]);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setIsVisible(false);
      }, 1500); // Change the duration as per your requirement
    }
  }, [isVisible]);

  if (loading) {
    return <div>Loading...</div>; // Display loading state while fetching data
  }

  if (!serviceData) {
    return <div>Service not found</div>;
  }

  return (
    <div className="">
      {isVisible && <Confetti />}
      <div className="h-48 text-lg bg-black text-left text-white items-center justify-center flex">
        <h2 className="text-3xl font-bold pt-5 pl-3">{serviceData.name}</h2>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <h1 className="text-xl pt-5">Categories</h1>
        <ul className="grid grid-cols-2 gap-4 max-w-fit">
          {serviceData.categories.map((category) => (
            <li className="p-2" key={category.name}>
              <div className=" h-64 w-64 text-lg bg-gray-200 m-4 border-2 border-gray-300 rounded-lg p-4 max-w-md mx-auto relative">
                <h3 className="text-2xl text-center mb-4">{category.name}</h3>
                <p className=" text-justify mb-4">{category.desc}</p>
                <h3 className="">{category.price}</h3>
                <button
                  className="absolute bottom-4 right-4 px-4 py-2 bg-blue-500 text-white rounded "
                  onClick={() => {
                    setIsVisible(true);
                  }}
                >
                  Book Now
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
