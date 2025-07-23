import React from 'react'

function Card(props) {
    console.log(props);
    
  return (
    <div>
    <img src="https://images.unsplash.com/photo-1745503530556-11e0bc9cb450?w=600&auto=format&fit=crop&q=
    60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdvb2QlMjBsdWNrJTIwc2hvdyUyMHd8ZW58MHx8MHx8fDA%3D" alt="Nothing happen" />
    <h1 className='text-2xl bg-green-500 p-3 rounded '>A Card for photos</h1>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, neque!</p>
   
   
    </div>
)}
export default Card