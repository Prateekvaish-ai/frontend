'use client';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ManageUser = () => {

    const [userList, setUserList] = useState([]);

    const fetchUsers = async () => {
       const res = await axios.get('http://localhost:5000/user/getall')
       console.log(res.data);
       setUserList(res.data);
    }

    useEffect(() =>{
        fetchUsers();
    }, []);

  return (
    <div className='bg-gray-200 h-screen'>
      <div className='container mx-auto'>
        <h1 className='text-center text-3xl font-bold'>User Manager</h1>

        <table className='my-5 w-full'>
            <thead className='border bg-slate-700 border-slate-700 text-white'>
                <tr>
                    <th className='p-2'>ID</th>
                    <th className='p-2'>Name</th>
                    <th className='p-2'>Email</th>
                    <th className='p-2'>City</th>
                    <th className='p-2'>Registered at</th>
                </tr>
            </thead>
            <tbody className='bg-gray'>
                {
                    userList.map( (user) =>{
                        return <tr key={user._id} >
                            <td className='p-2 border border-gray-300'>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.city}</td>
                            <td>{user.createdAt}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageUser;
