import { useState } from 'react'
import './App.css'
import  data  from './data'
import Tours from './components/Tours'
function App() {

  const [tours,setTours] = useState(data)


   function removeTour(id){
    const newTours =tours.filter(tour => tour.id !== id);
    setTours(newTours);
   }



   if (tours.length ==0){
    return (
      <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-3xl font-bold mb-4">No Tours Left</h1>
      <button 
        onClick={() => setTours(data)} 
        class="flex items-center gap-2 bg-gray-600 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-gray-500 hover:text-gray-100 transition duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5L3 18m0 0l1.5-1.5M3 18h3a9 9 0 11-9-9M21 5h-3a9 9 0 11-9 9m9 9h3m-3 0l1.5 1.5M21 18l-1.5-1.5" />
        </svg>
        Refresh
      </button>
    </div>
    );
   }


   
  return (
    <div>
         
    <Tours tours={tours} removeTour={removeTour}> </Tours>

 </div>
  )
}

export default App
