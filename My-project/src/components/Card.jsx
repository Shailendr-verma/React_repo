import { useState } from "react";

function Card({ id, image, info, price, name, removeTour }) {
  const [readmore, setreadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}...`;

  function readmorehandler() {
    setreadmore(!readmore);
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-300 w-full max-w-md flex flex-col items-center">
     
      <img src={image} className="w-full h-60 object-cover rounded-lg" alt={name} />

      <div className="p-4 text-center">
        <h4 className="text-xl font-extrabold text-purple-700 font-serif">{price}</h4>
        <h4 className="text-lg font-semibold text-gray-800 font-mono">{name}</h4>

     
        <div className="text-gray-700 text-base leading-relaxed mt-2">
          <p className="mb-2">{description}</p>
          <span
            onClick={readmorehandler}
            className="text-purple-600 font-semibold cursor-pointer hover:text-purple-800 transition duration-300"
          >
            {readmore ? `Show less` : `Read more`}
          </span>
        </div>
      </div>

     
      <button
        className="bg-zinc-500 text-white px-4 py-2 rounded-lg mt-auto hover:bg-zinc-600 transition"
        onClick={() => removeTour(id)}
      >
        Not Interested
      </button>
    </div>
  );
}

export default Card;
