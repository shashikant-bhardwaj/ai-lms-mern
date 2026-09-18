import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { SkeletionLoading } from "../../components/SkeletionLoading.jsx";
import { useNavigate, useParams } from "react-router-dom";
import img from "../../assets/empty.jpg";
import { FaEdit } from "react-icons/fa";
import useGetCourseById from "../../hooks/useGetCourseById.js";
import useEditCourse from "../../hooks/useEditCourse.js";
import { ClipLoader } from "react-spinners";



function EditCourse() {
  const navigate = useNavigate();
  const thumb = useRef(null);
  const { courseId } = useParams();
  const { getCourseById, loading } = useGetCourseById();
  const { editCourse, loading2 } = useEditCourse();
  const [selectedCourse, setSelectedCourse] = useState({
    title: "",
    category: "",
    subTitle: "",
    description: "",
    level: "",
    price: 0,
    thumbnail: "",
    previewURL: "",
    isPublished: false,
  });
  useEffect(() => {
    if (courseId) {
      getCourseById(courseId, setSelectedCourse);
    }
  }, [courseId]);
  // useEffect(() => {
  //     if(selectedCourse){
  //         setData({
  //               title: selectedCourse?.title || "",
  //               category: selectedCourse?.category ||  "",
  //               subtitle: "",
  //               discription: "",
  //               level: "",
  //               price: 0,
  //               thumbnail: ""
  //         })
  //     }
  // },[selectedCourse])
  const onChange = (e) => {
    const { name, value, files, type } = e.target;

    if (type === "file") {
      const file = files?.[0];

      if (file) {
        const previewURL = URL.createObjectURL(file);

        setSelectedCourse((prev) => ({
          ...prev,
          thumbnail: file,
          previewURL: previewURL,
        }));
      }

      return;
    }
    setSelectedCourse((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (selectedCourse?.thumbnail) {
      formData.append("thumbnail", selectedCourse?.thumbnail);
    }
    formData.append("title", selectedCourse?.title);
    formData.append("subTitle", selectedCourse?.subTitle);
    formData.append("category", selectedCourse?.category);
    formData.append("level", selectedCourse?.level);
    formData.append("price", selectedCourse?.price);
    formData.append("description", selectedCourse?.description);
    formData.append("isPublished", selectedCourse?.isPublished);

    if (courseId) {
      editCourse(courseId, formData);
    }
  };

  if (loading) {
    return <SkeletionLoading/>;
  }

  return (
    <div
      className=" max-w-5xl mx-auto p-6 mt-10
        bg-white rounded-lg shadow-md"
    >
      {/* top bar */}
      <div
        className="flex items-center justify-center gap-[20px]
            md:justify-between flex-col md:flex-row mb-6 relative"
      >
        <FaArrowLeftLong
          onClick={() => navigate("/courses")}
          className="top-[-20px] md:top-[20%]
                absolute left-[0] md:left-[2%] w-[22px] h-[22px]
                cursor-pointer"
        />

        <h2
          className="text-2xl font-semibold md:pl-[60px] 
                "
        >
          Add Detail Information regarding the Course
        </h2>

        <div className="space-x-2 space-y-2">
          <button
            className="bg-black text-white
                    px-4 py-2 rounded-md"
          >
            Go to Lecture page
          </button>
        </div>
      </div>

      {/*form details */}
      <div className="bg-gray-50 p-6 rounded-md">
        <h2 className="text-lg font-medium mb-4">Basic Course Information</h2>
        <div className="space-x-2 space-y-2">
          {!selectedCourse.isPublished ? (
            <button
              onClick={() =>
                setSelectedCourse((prev) => ({
                  ...prev,
                  isPublished: !prev.isPublished,
                }))
              }
              className="bg-green-100 text-green-600
                    px-4 py-2 rounded-md border-1 "
            >
              Click to Publish
            </button>
          ) : (
            <button
              onClick={() =>
                setSelectedCourse((prev) => ({
                  ...prev,
                  isPublished: !prev.isPublished,
                }))
              }
              className="bg-red-100 text-red-600
                    px-4 py-2 rounded-md border-1 "
            >
              Click to UnPublish
            </button>
          )}
          <button
            className="bg-red-600 text-white
                    px-4 py-2 rounded-md"
          >
            Remove Course
          </button>
        </div>

        <form onSubmit={onSubmitHandler} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font font-medium text-gray-700
                        mb-1"
            >
              Title
            </label>
            <input
              name="title"
              value={selectedCourse?.title}
              onChange={onChange}
              id="title"
              type="text"
              className="w-full px-4 py-2 rounded-md border border-gray-600"
              placeholder="Course Title"
            />
          </div>
          <div>
            <label
              htmlFor="subtitle"
              className="block text-sm font font-medium text-gray-700
                        mb-1"
            >
              Subtitle
            </label>
            <input
              name="subTitle"
              value={selectedCourse?.subTitle || ""}
              onChange={onChange}
              id="subtitle"
              type="text"
              className="w-full px-4 py-2 rounded-md border border-gray-600"
              placeholder="Course Title"
            />
          </div>
          <div>
            <label
              htmlFor="discription"
              className="block text-sm font font-medium text-gray-700
                        mb-1"
            >
              Description
            </label>
            <textarea
              name="description"
              value={selectedCourse?.description || ""}
              onChange={onChange}
              rows={3}
              id="discription"
              className="w-full px-4 py-2 rounded-md border border-gray-600
                         resize-none"
              placeholder="Course Description"
            />
          </div>

          <div
            className="flex flex-col sm:flex-row sm:space-x-4
                    space-y-4 sm:space-y-0"
          >
            {/* for category */}
            <div className="flex-1 ">
              <label
                className="block text-sm font-medium
                        text-gray-700 mb-1"
                htmlFor="category"
              >
                Course Category
              </label>
              <select
                name="category"
                value={selectedCourse?.category}
                onChange={onChange}
                id="category"
                className="w-full border px-4 py-2 rounded-md bg-white"
              >
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
            <div className="flex-1 ">
              <label
                className="block text-sm font-medium
                        text-gray-700 mb-1"
                htmlFor="category"
              >
                Course Level
              </label>
              <select
                name="level"
                value={selectedCourse?.level}
                onChange={onChange}
                id="category"
                className="w-full border px-4 py-2 rounded-md bg-white"
              >
                <option value="">Select Course Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            {/* for  price */}
            <div className="flex-1 ">
              <label
                className="block text-sm font-medium
                        text-gray-700 mb-1"
                htmlFor="price"
              >
                Price (INR)
              </label>
              <input
                name="price"
                value={selectedCourse?.price}
                onChange={onChange}
                id="price"
                type="number"
                min={0}
                className="w-full px-4 py-2 rounded-md border border-gray-600 "
                placeholder="₹"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="thumbnail"
              className="block text-sm font-medium
                            text-gray-700 mb-1"
            >
              Course Thumbnail
            </label>
            <input
              name="thumbnail"
              onChange={onChange}
              id="thumbnail"
              type="file"
              hidden
              ref={thumb}
              accept="image/*"
            />
          </div>
          <div className="relative w-[300px] h-[170px]">
            <FaEdit
              onClick={() => thumb.current?.click()}
              className="absolute top-2 left-[90%] size-6
             text-slate-700
             bg-white rounded-full
             p-1
             hover:text-blue-600
             cursor-pointer"
            />

            <img
              src={
                selectedCourse?.previewURL || selectedCourse?.thumbnail || img
              }
              alt=""
              onClick={() => thumb.current?.click()}
              className="w-[100%] border border-black 
                            rounded-[5px] w-full h-full"
            />
          </div>

          <div className="flex items-center justify-start gap-[15px]">
            <button
            type="button"
              onClick={() => navigate("/courses")}
              className="bg-[#e9e8e8] hover:bg-red-200 
                            text-black border border-black cursor-pointer
                            py-2 px-4 rounded-md"
            >
              Cancel
            </button>
            <button
            type="submit"
              className="bg-black text-white px-7
                            py-2 rounded-md hover:bg-gray-500 cursor-pointer"
            >
              {loading2 ? <ClipLoader size={30} color="white" /> : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCourse;
