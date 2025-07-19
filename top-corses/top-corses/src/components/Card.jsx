import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props) => {
  
  const { course } = props;
  const likedCourses =props.likedCourses;
  const setLikedCourses =props.setLikedCourses;

  function buttonHandler(){
             
        if(likedCourses.includes(course.id)) {

          setLikedCourses((prev) => prev.filter((cid)=>(cid !== course.id) ) );
          toast.warning("like removed ");

        } 
        else{
          if(likedCourses.length ===0){
            setLikedCourses([course.id]);
          }
          else{
            setLikedCourses((prev) =>[...prev, course.id]);
          }
          toast.success("Liked Successfully");
        }



  }
  return (
    <div className="w-[300px] bg-white rounded shadow-md p-4 relative flex flex-col items-center">
  {/* Image container */}
      <div className="relative">
        <img
          src={course.image?.url}
          alt={course.title}
          className="w-full h-48 object-cover rounded"
        />
        {/* Like button - positioned at bottom right of image */}
        <button  onClick={buttonHandler} className="absolute bottom-2 right-2 text-3xl hover:scale-110 transition-transform">
             {
              likedCourses.includes(course.id) ? 
              ( <FcLike fontSize="1.75rem" />):(<FcLikePlaceholder fontSize="1.75rem" />)
            
             }
</button>
      </div>

      {/* Title and description */}
      <div className="mt-4 text-center">
        <p className="text-lg font-semibold text-black">{course.title}</p>
        <p className="text-sm mt-2 text-black">{course.description}</p>
      </div>
    </div>
  )
}

export default Card;
