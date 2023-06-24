import Image from "next/image";
import data from "../data.json";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <div class="grid place-items-center bg-green-300 p-28 rounded-b-3xl">
        <h2 className="text-5xl font-bold mb-7">How can we help you?</h2>
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-lg p-2 w-1/2"
          autoFocus
        ></input>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center my-10">
        {data.map((item) => (
          <div key={item.id}>
            <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
              <a href={"/" + item.name.toLowerCase()}>
                <div className="flex flex-row">
                  <div className="flex flex-col p-2 px-5">
                    <h1 className="m-1 text-3xl">{item.name}</h1>
                    <p className="m-3">{item.desc}</p>
                  </div>
                  <div className="w-40 max-w-fit max-h-fit">
                    <img src={item.img} className="rounded-lg" />
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
