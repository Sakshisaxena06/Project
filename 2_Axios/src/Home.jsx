import React, { useEffect, useState } from "react";
import axios from "axios"
import {Link, useNavigate} from 'react-router-dom'
const Home = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/users')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  },[])


    const handleDelete=(id)=>{
const confirm = window.confirm("Would u like to delete ?")
if(confirm){
  axios.delete('http://localhost:3000/users'+id)
  .then(res=> {
   location.reload()
  })
  .catch(err=> console.log(err)
  )
}
  }
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        List of Users
      </h1>

      <div className="w-3/4 bg-white rounded-lg shadow-lg p-6 border">
      <div className="d-flex justify-center-end">
      <Link to="/create" className="btn btn-success">Add + </Link>
      </div>
        <table className="table table-stiped">
          <thead>
            <tr>
              <th>ID</th>
               <th>NAme</th>
                <th>Email</th>
                 <th>Phone</th>
                  <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              data.map((d,i) =>(
                <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.phone}</td>
                    <td>
                      <Link to={`/read/${d.id}`} className="btn btn-sm btn-info me-2 ">Read</Link>
                      <Link to={`/update/${d.id}`} className="btn btn-sm btn-primary me-2 ">Edit</Link>
                      <button className="btn btn-sm btn-danger" onClick={e => handleDelete(d.id)}>Delete</button>
                    </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  );
  
};

export default Home;
