import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import workers from '../constants/index';

function Worker() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://nexum-backend-production-486e.up.railway.app/api/worker/show/getWorker", {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      await setData(res.data.data.reverse());
      console.log(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const totalRating = (reviews) => {
    let totalRating = 0;
    let count = reviews.length;
    reviews.map((review) => {
      totalRating+=review.rating
    })
    return (totalRating/count).toFixed(2);
  }


  return (
    <section className="text-gray-100 body-font" style={{ backgroundColor: 'lightblue' }}>
      <h1 className="text-3xl text-center bg-text font-semibold my-7">Workers</h1>

      <div className="container px-5 py-4 mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1  gap-6">


      <div className='p-4 w-full bg-card rounded-xl flex-col justify-center items-center px-6 py-4 flex'>
            <Link to={`/worker/${workers[0].userId}`} key={workers[0].userId}>
            <div className="block relative h-60 rounded overflow-hidden">
              <img alt="photoUrl" className="h-full block" src={workers[0].photoUrl} />
            </div>
            <div className='w-full'>
            <p className='text-lg pt-2 text-start capitalize'>{(workers[0].firstName ? workers[0].firstName : "") + " " + (workers[0].middleName ? workers[0].middleName : "") + " " + (workers[0].lastName ? workers[0].lastName : "")}</p>
              <div className='flex justify-between'>
              <p className="mt-1 text-sm text-gray-200">Skills : {workers[0].skills}</p>
              </div>
            </div>
          </Link>
          </div>
          <div className='p-4 w-full bg-card rounded-xl flex-col justify-center items-center px-6 py-4 flex'>
            <Link to={`/worker/${workers[1].userId}`} key={workers[1].userId}>
            <div className="block relative h-60 rounded overflow-hidden">
              <img alt="photoUrl" className="h-full block" src={workers[1].photoUrl} />
            </div>
            <div className='w-full'>
            <p className='text-lg pt-2 text-start capitalize'>{(workers[1].firstName ? workers[1].firstName : "") + " " + (workers[1].middleName ? workers[1].middleName : "") + " " + (workers[1].lastName ? workers[1].lastName : "")}</p>
              <div className='flex justify-between'>
              <p className="mt-1 text-sm text-gray-200">Skills : {workers[1].skills}</p>
              </div>
            </div>
          </Link>
          </div>


          <div className='p-4 w-full bg-card rounded-xl flex-col justify-center items-center px-6 py-4 flex'>
            <Link to={`/worker/${workers[2].userId}`} key={workers[2].userId}>
            <div className="block relative h-60 rounded overflow-hidden">
              <img alt="photoUrl" className="h-full block" src={workers[2].photoUrl} />
            </div>
            <div className='w-full'>
            <p className='text-lg pt-2 text-start capitalize'>{(workers[2].firstName ? workers[2].firstName : "") + " " + (workers[2].middleName ? workers[2].middleName : "") + " " + (workers[2].lastName ? workers[2].lastName : "")}</p>
              <div className='flex justify-between'>
              <p className="mt-1 text-sm text-gray-200">Skills : {workers[2].skills}</p>
              </div>
            </div>
          </Link>
          </div>

          <div className='p-4 w-full bg-card rounded-xl flex-col justify-center items-center px-6 py-4 flex'>
            <Link to={`/worker/${workers[3].userId}`} key={workers[3].userId}>
            <div className="block relative h-60 rounded overflow-hidden">
              <img alt="photoUrl" className="h-full block" src={workers[3].photoUrl} />
            </div>
            <div className='w-full'>
            <p className='text-lg pt-2 text-start capitalize'>{(workers[3].firstName ? workers[3].firstName : "") + " " + (workers[3].middleName ? workers[3].middleName : "") + " " + (workers[3].lastName ? workers[3].lastName : "")}</p>
              <div className='flex justify-between'>
              <p className="mt-1 text-sm text-gray-200">Skills : {workers[3].skills}</p>
              </div>
            </div>
          </Link>
          </div>

          {/* <div className='p-4 w-full bg-card rounded-xl flex-col justify-center items-center px-6 py-4 flex'>
            <Link to={`/worker/${workers[4].userId}`} key={workers[4].userId}>
            <div className="block relative h-60 rounded overflow-hidden">
              <img alt="photoUrl" className="h-full block" src={workers[4].photoUrl} />
            </div>
            <div className='w-full'>
            <p className='text-lg pt-2 text-start capitalize'>{(workers[4].firstName ? workers[4].firstName : "") + " " + (workers[4].middleName ? workers[4].middleName : "") + " " + (workers[4].lastName ? workers[4].lastName : "")}</p>
              <div className='flex justify-between'>
              <p className="mt-1 text-sm text-gray-200">Skills : {workers[4].skills}</p>
              </div>
            </div>
          </Link>
          </div> */}


          </div>
          </div>
    </section>
  )
}

export default Worker
