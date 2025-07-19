import Card from "./Card";

function Tours({ tours, removeTour }) {  
    return (
        <>
            <div class="flex justify-center p-3 mt-5 ">
   <h2 class="text-3xl font-bold text-center border-4 border-dotted border-purple-500 px-6 py-5 inline-block rounded-lg" >Plane with love!</h2>
            </div>

          
            <div class="flex justify-center items-center min-h-screen">
    <div class="bg-white shadow-lg rounded-lg p-6 border border-gray-300 w-full max-w-4xl flex flex-col items-center">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {tours.map((tour) => (
                <Card key={tour.id} {...tour} removeTour={removeTour} />
            ))}
        </div>
    </div>
</div>
         
        </>
    );
}

export default Tours;
