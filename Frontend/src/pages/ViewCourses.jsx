import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate, useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { setSelectedCourse } from '../redux/features/courseSlice';
import emptyImg from "../assets/empty.jpg"
import { FaStar } from "react-icons/fa6";

function ViewCourses() {
    const navigate = useNavigate();
    const {courseId} = useParams();
    const {publishedCourses} = useSelector(state => state.courses);
    const {selectedCourse} = useSelector(state => state.courses);
    const dispatch = useDispatch();
    const [selectedLecture, setSelectedLecture] = useState(null);


    const fetchCourseData = () => {
        publishedCourses?.map((pubCourse) => {
            if(pubCourse?._id === courseId){
                dispatch(setSelectedCourse(pubCourse));
                console.log(selectedCourse);

                return null;
            }
        })
    }

    useEffect(() => {
        fetchCourseData();

    },[publishedCourses, courseId])
    return (
        <div className='min-h-screen bg-gray-50 p-6'>
            <div className='max-w-6xl mx-auto bg-white shadow-md 
            rounded-xl p-6 space-y-6 relative'>
                {/* top */}
                <div className='flex flex-col md:flex-row gap-6'>
                    {/* thumbnail */}
                    <div className='w-full md:w-1/2'>
                    <FaArrowLeftLong
                    onClick={() => navigate("/")}
                    className='text-[black] w-[22px] 
                    h-[22px] cursor-pointer'/>
                    {selectedCourse?.thumbnail ? <img src={selectedCourse?.thumbnail} alt=""
                    className='rounded-xl w-full object-cover' /> : 
                    <img src={emptyImg} alt="" className='rounded-xl w-full object-cover' /> 
                    }

                    </div>

                    {/* courseInfo  */}

                    <div className='flex-1 space-y-2 mt-[20px]'>
                        <h2 className='text-2xl font-bold'>
                            {selectedCourse?.title}
                        </h2>
                        <p className='text-gray-600'>
                            {selectedCourse?.subTitle}
                        </p>

                        <div className='flex items-start flex-col
                        justify-between'>
                            <div className='text-yellow-500 
                            font-medium flex gap-2'>
                                <span className='flex items-center justify-start
                                gap-1'><FaStar/> {" "}5</span>
                                <span className='text-gray-400'>(1200 Reviews)</span>
                            </div>

                            <div>
                                <span className='text-xl font-semibold
                                text-black'>₹{ selectedCourse?.price}</span>{" "}
                                <span className='line-through text-sm 
                                text-gray-400'>₹599</span>
                            </div>

                            <ul className='text-sm text-gray-700 
                            space-y-1 pt-2'>
                                <li>✅ 10+ hours of video content</li>
                                <li>✅ Lifetime access to course materials</li>
                            </ul>

                            <button className='bg-[black] text-white px-6
                            py-2 rounded hover:bg-gray-700 mt-3 cursor-pointer'>
                                Enroll Now
                            </button>
                        </div>
                    </div>

                </div>

                <div>
                    <h2 className='text-xl font-semibold mb-2'>What You'll Learn</h2>
                    <ul className='list-disc pl-6 text-gray-700 
                    space-y-1'>
                        <li>Learn  {selectedCourse?.category} from Beginning</li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-xl font-semibold mb-2'>Who This Course is For</h2>
                    <p className='text-gray-700'>Beginners, aspiring developers, and
                        professionals looking to upgrade skills.
                    </p>
                </div>

                <div className='flex flex-col md:flex-row gap-6'>

                    <div className='bg-white w-full md:w-2/5 p-6
                    rounded-2xl shadow-lg border border-gray-200'>
                        <h2 className='text-xl font-bold mb-1 
                        text-gray-800'>Course Curriculum</h2>
                        <p className='text-sm text-gray-500 mb-4'>
                            {selectedCourse?.lectures?.length} Lectures
                        </p>

                        <div className='flex flex-col gap-3'>
                            {selectedCourse?.lectures?.map((lecture) => (



                                <button 
                                key={lecture?._id}
                                disabled={!lecture?.isPreviewFree}
                                onClick={() => {
                                    if(lecture?.isPreviewFree){
                                        setSelectedLecture(lecture)
                                    }
                                }}
                                className={`flex items-center gap-3
                                px-4 py-3 rounded-lg border transition-all 
                                duration-200 text-left ${lecture?.isPreviewFree ? 
                                "hover:bg-gray-100 cursor-pointer border-gray-300"
                                :
                                "cursor-not-allowed opacity-60 border-gray-200"
                                } 
                                ${selectedLecture?.lectureTitle === lecture?.lectureTitle
                                    ?
                                    "bg-gray-100 border-gray-400"
                                    :
                                    ""
                                }`}>
                                    {lecture?.lectureTitle}</button>
                            ))}
                            

                        </div>
                    </div>




                    <div></div>
                </div>

            </div>

        </div>
    )
}

export default ViewCourses
