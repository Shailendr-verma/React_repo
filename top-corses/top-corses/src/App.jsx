import { useEffect, useState } from 'react';
import { apiUrl, filterData } from './data';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category,setCategory] =useState(filterData[0].title);


  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ToastContainer />
      <div>
        <Navbar />
      </div>

      <div>
        <Filter  
        category={category}
        setCategory={setCategory}
        filterData={filterData} />
      </div>

      <div>
        {loading ? <Spinner /> : <Cards courses={courses}  category={category}/>}
      </div>
    </>
  );
}

export default App;
