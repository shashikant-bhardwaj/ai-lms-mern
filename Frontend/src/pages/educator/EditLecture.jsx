import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

function EditLecture() {
    const {courseId, lectureId} = useParams();
    const navigate = useNavigate();
    const {lectureData} = useSelector(state => state.lecture);
    const selectedLecture = lectureData?.find(lecture => lecture?._id === lectureId);
    return (
        <div className='min-h-screen bg-gray-100 flex items-center
        justify-center p-4'>
            <div className='w-full max-w-xl bg-white rounded-xl
            shadow-lg p-6 space-y-6'>

                {/* header  */}
                <div className='flex items-center gap-2 mb-2'>
                    <FaArrowLeftLong
                    onClick={() => navigate(`/createlecture/${courseId}`)}
                    className='text-gray-600 cursor-pointer'/>
                    <h2 className='text-xl font-semibold text-gray-800'>
                        Update Course Lecture
                    </h2>
                </div>

                <button className='mt-2 px-4 py-2 bg-red-600 
                text-white rounded-md hover:bg-red-700 transition-all
                text-sm'>Remove Lecture</button>


                <div className='space-y-4'>
                    <div>
                        <label
                        className='block text-sm font-medium
                        text-gray-700 mb-1'
                        htmlFor="">Lecture Title *</label>
                        <input 
                        className='w-full p-3 border border-gray-300 rounded-md
                        text-sm focus:ring-2 focus:ring-[black] focus:outline-none'
                        type="text"
                        required />
                    </div>

                    <div>
                         <label
                        className='block text-sm font-medium
                        text-gray-700 mb-1'
                        htmlFor="">Video *</label>
                        <input 
                        className='w-full border border-gray-300
                        rounded-md p-2 file:mr-4 file:py-2 file:px-4 
                        file:rounded-md file:border-0 file:text-sm file:bg-gray-700
                        file:text-[white] hover:file:bg-gray-500 '
                        type="file"
                        required
                        accept='video/*' />
                    </div>

                    <div className='flex items-center gap-3'>
                        <input 
                        type="checkbox"
                        className='accent-[black] h-4 w-4' 
                        id='isFree'/>
                        <label
                        htmlFor="isFree"
                        className='text-sm text-gray-700'>
                            Is this Video FREE
                        </label>
                    </div>

                </div>

                <div className='pt-4'>
                    <button className='w-full bg-black text-white py-3
                    rounded-md text-sm font-medium hover:bg-gray-700
                    transition'>Update Lecture</button>
                </div>
            </div>
        </div>
    )
}

export default EditLecture
