import { useState } from "react";
import { BsDiscord } from "react-icons/bs";

function App() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  return (
    <div className="bg-[#313338] min-h-screen">
      <div className="flex">
        <div className="bg-[#1e1f22] min-h-screen fixed top-0 w-[72px] flex flex-col shadow-lg">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(index)}
              className={`relative flex text-green-500
              ${
                selectedItem === index
                  ? "rounded-xl bg-[#23a559] text-white"
                  : "rounded-3xl hover:rounded-xl bg-[#313338] hover:bg-[#23a559] hover:text-white "
              } transition-all duration-300 ease-linear h-12 w-12 items-center 
              justify-center mt-2 mb-2 mx-auto cursor-pointer group`}
            >
              <BsDiscord size={25} />
              <div
                className={`bg-white h-2 w-2 rounded-full absolute -left-4 group-hover:h-6 
                transition-all duration-300 ease-linear ${
                  selectedItem === index ? "h-8" : ""
                }`}
              />
              <span
                className="absolute left-16 text-white bg-gray-900 py-1 px-3
                rounded-md shadow-md w-auto min-w-max text-md font-semibold 
                transition-all duration-300 origin-left scale-0 group-hover:scale-100"
              >
                Tooltip
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
