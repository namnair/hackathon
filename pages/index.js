import Image from "next/image";
import data from '../data.json'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main className="">
    <div className="bg-gray-100 h-80">
      <input type="text" placeholder="search.." className="border border-gray-300 rounded-lg p-2  ">
      </input>
    </div>
   <div className="flex flex-col gap-4 justify-center items-center h-screen m-5">
   {data.map((item) => (
          <div key={item.id}>
            <button className="bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
            <h1 className="m-1">{item.name}</h1>
            <div className="flex flex-row p-2">
            <p className="p-5">{item.desc}</p>
            <div className="h-20 w-20"><img src={item.img}/></div>
            </div>
            </button>
          </div>
        ))}
   </div>
  </main>;
}
