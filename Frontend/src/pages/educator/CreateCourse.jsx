import React, { useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import useCreateCourse from '../../hooks/useCreateCourse.js';
import { ClipLoader } from 'react-spinners';

function CreateCourse() {
    const navigate = useNavigate();
    const { loading, createCourse } = useCreateCourse();
    const [data, setData] = useState({
        title: "",
        category: ""
    });
    console.log(data)
    const onChange = (e) => {
        const {name, value} = e.target;
        setData((prev) => ({ 
            ...prev,
            [name]: value }))
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        createCourse(data)
    }
    return (
        <div className='min-h-screen flex items-center justify-center
        bg-green-100 px-4 py-10'>
            <div className='w-full max-w-xl mx-auto p-6 bg-white 
            shadow-md rounded-md mt-10 relative'>
             <FaArrowLeftLong 
             onClick={() => navigate("/courses")}
             className='absolute top-[8%] left-[5%] w-[22px] h-[22px] cursor-pointer '/>
             <h2 className='text-2xl font-semibold mb-6 text-center'>Create Courses</h2>
             <form onSubmit={onSubmitHandler} className='space-y-5'>
                <div>
                    <label htmlFor="title" className='block text-sm font-medium 
                    text-gray-700 mb-1'>Course Title</label>
                    <input
                    name='title'
                    value={data.title}
                    onChange={onChange}
                    id='title'
                    type="text" 
                    placeholder='Enter Course title'
                    className='w-full border border-gray-300 rounded-md px-4
                     py-2 focus:outline-none focus:ring-2 focus:ring-black'/>
                </div>
                <div>
                       <label htmlFor="category" className='block text-sm font-medium 
                    text-gray-700 mb-1'>Course Category</label>
                    <select 
                    name="category"
                    value={data.category}
                    onChange={onChange}
                    id="category"
                    className='w-full border border-gray-300 rounded-md px-4
                     py-2 focus:outline-none focus:ring-2 focus:ring-black'>
                        <option value="">Select Category</option>
                        <option value="Web Dev">Web Dev</option>
                        <option value="UI/UX Designing">UI/UX Designing</option>
                        <option value="App Dev">App Dev</option>
                        <option value="Ethical Hacking">Ethical Hacking</option>
                        <option value="AI/ML">AI/ML</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Data Analytics">Data Analytics</option>
                        <option value="AI Tools">AI Tools</option>
                        <option value="Others">Others</option>
                     </select>
                </div>
                <button 
                disabled={loading}
                className='w-full bg-black text-white 
                py-2 px-4 rounded-md active:bg-[#3a3a3a] transition'>
                    {loading? <ClipLoader size={30} color='white'/> : "Create"}</button>
             </form>
            </div>

 
        </div>
    )
}

export default CreateCourse
