import React, { useRef, useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import img from "../../assets/empty.jpg"

function EditCourse() {
    const navigate = useNavigate();
    const [isPublished, setIsPublished] = useState(false);
    const thumb = useRef(null);
    return (
        <div className=' max-w-5xl mx-auto p-6 mt-10
        bg-white rounded-lg shadow-md'>
            {/* top bar */}
            <div className='flex items-center justify-center gap-[20px]
            md:justify-between flex-col md:flex-row mb-6 relative'>
                <FaArrowLeftLong
                onClick={() => navigate("/courses")}
                className='top-[-20px] md:top-[20%]
                absolute left-[0] md:left-[2%] w-[22px] h-[22px]
                cursor-pointer'/>

                <h2 className='text-2xl font-semibold md:pl-[60px] 
                '>
                    Add Detail Information regarding the Course
                </h2>

                <div className='space-x-2 space-y-2'>
                    <button className='bg-black text-white
                    px-4 py-2 rounded-md'>Go to Lecture page</button>
                </div>

            </div>

            {/*form details */}
            <div className='bg-gray-50 p-6 rounded-md'>
                <h2 className='text-lg font-medium mb-4'>
                    Basic Course Information
                    </h2>
                <div className='space-x-2 space-y-2'>
                   {!isPublished ?  <button 
                   onClick={() => setIsPublished((prev) => !prev)}
                   className='bg-green-100 text-green-600
                    px-4 py-2 rounded-md border-1 '>
                        Click to Publish</button> : 
                         <button
                         onClick={() => setIsPublished((prev) => !prev)} 
                         className='bg-red-100 text-red-600
                    px-4 py-2 rounded-md border-1 '>
                        Click to UnPublish</button>}
                    <button className='bg-red-600 text-white
                    px-4 py-2 rounded-md'>
                        Remove Course</button>
                </div>

                <form className='space-y-6' >

                    <div>
                        <label 
                        htmlFor="title" 
                        className='block text-sm font font-medium text-gray-700
                        mb-1'>Title</label>
                        <input
                        id='title'
                        type="text"
                        className='w-full px-4 py-2 rounded-md border border-gray-600'
                        placeholder='Course Title' />
                    </div>
                    <div>
                        <label 
                        htmlFor="subtitle" 
                        className='block text-sm font font-medium text-gray-700
                        mb-1'>Subtitle</label>
                        <input
                        id='subtitle'
                        type="text"
                        className='w-full px-4 py-2 rounded-md border border-gray-600'
                        placeholder='Course Title' />
                    </div>
                    <div>
                        <label 
                        htmlFor="discription" 
                        className='block text-sm font font-medium text-gray-700
                        mb-1'>Discription</label>
                        <textarea
                        rows={3}
                        id='discription'
                        className='w-full px-4 py-2 rounded-md border border-gray-600
                         resize-none'
                        placeholder='Course Description' />
                    </div>

                    <div className='flex flex-col sm:flex-row sm:space-x-4
                    space-y-4 sm:space-y-0'>

                        {/* for category */}
                        <div className='flex-1 '>
                        <label
                        className='block text-sm font-medium
                        text-gray-700 mb-1'
                        htmlFor="category">Course Category</label>
                        <select
                        name="" 
                        id="category"
                        className='w-full border px-4 py-2 rounded-md bg-white'>
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

                        {/* for level */}
                        <div className='flex-1 '>
                        <label
                        className='block text-sm font-medium
                        text-gray-700 mb-1'
                        htmlFor="category">Course Level</label>
                        <select
                        name="" 
                        id="category"
                        className='w-full border px-4 py-2 rounded-md bg-white'>
                        <option value="">Select Course Level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        </select>
                        </div>

                        {/* for  price */}
                         <div className='flex-1 '>
                        <label
                        className='block text-sm font-medium
                        text-gray-700 mb-1'
                        htmlFor="price">Price (INR)</label>
                        <input
                        id='price'
                        type="number"
                        min={0}
                        className='w-full px-4 py-2 rounded-md border border-gray-600 '
                        placeholder='₹' />
                        </div>
                          

                    </div>
                     <div>
                            <label
                            htmlFor="thumbnail"
                            className='block text-sm font-medium
                            text-gray-700 mb-1'>Course Thumbnail</label>
                            <input 
                            id='thumbnail'
                            type="file"
                            hidden
                            ref={thumb}
                            accept='image/*' />
                        </div>
                        <div className='relative w-[300px] h-[170px]'>
                            <img
                            src={img} 
                            alt="" 
                            onClick={() => thumb.current?.click()}
                            className='w-[100%] border border-black 
                            rounded-[5px] w-full h-full'/>
                        </div>
                  

                </form>
            </div>
        </div>
    )
}

export default EditCourse
