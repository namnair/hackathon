import { useState } from "react";
import { Inter } from "next/font/google";
import data from "../data.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    const results = data.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });

    setSearchResults(results);
  };

  return (
    <main className="  flex space-x-4">
      <div className=" w-80 h-96  rounded-bl-full rounded-br-full bg-green-300 ">
        <h2 className="text-7xl mt-7 ml-7 font-bold ">How can we help you?</h2>
        <div className="relative p-10">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-56 px-4 py-2 border shadow hover:shadow-lg border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {searchTerm && (
            <ul className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg">
              {searchResults.map((item) => (
                <li
                  key={item.id}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                   <a href={`/${item.name.toLowerCase()}`}>{item.name}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-5">
  {data.map((item) => (
    <div className="ml-20" key={item.id}>
      <button className="bg-blue-400 hover:bg-blue-500 text-white ml-20 font-bold py-2 px-9 rounded-full">
        <a href={`/${item.name.toLowerCase()}`}>
          <div className="flex flex-row">
            <div className="flex flex-col p-2 px-5 w-72"> {/* Adjust the width as needed */}
              <h1 className="m-1 text-3xl overflow-hidden">{item.name}</h1> {/* Add overflow-hidden to truncate long text */}
              <p className="m-3 overflow-hidden">{item.desc}</p> {/* Add overflow-hidden to truncate long text */}
            </div>
            <div className="w-40 h-40">
              <img
                src={item.img}
                alt={item.name}
                className="rounded-full object-cover"
                width={160}
                height={160}
              />
            </div>
          </div>
        </a>
      </button>
    </div>
  ))}
</div>

    </main>
  );
}
