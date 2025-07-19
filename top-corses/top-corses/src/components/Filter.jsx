import React from 'react';

const Filter = (props) => {
  let filterData =props.filterData
 let category =props.category;
 let setCategory =props.setCategory;

function filterHandler(title){
  setCategory(title);
  

}

  return (
    <div className="flex justify-center mt-2 space-x-2">
      {
        filterData.map((data) => (
          <button
            key={data.id}
            onClick={()=> filterHandler(data.title)}
            className="bg-black text-white text-xl px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            {data.title}
          </button>
        ))
      }
    </div>
  );
};

export default Filter;
