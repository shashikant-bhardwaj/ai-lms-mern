import React from "react";
import { useState } from "react";
import { TiArrowLeftThick } from "react-icons/ti";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import useEditProfile from "../hooks/useEditProfile";
function EditProfile() {
  const navigate = useNavigate();
  const { authUser } = useSelector((state) => state.user);
  const { loading, editProfile } = useEditProfile();
  const [data, setData] = useState({
    photoUrl: authUser?.photoUrl || "",
    fullName: authUser?.fullName || "",
    description: authUser?.description || "",
  });

  const onChange = (e) => {
    const { name, value, files } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (data?.photoUrl) {
      formData.append("avatar", data?.photoUrl);
    }

    formData.append("fullName", data?.fullName);
    formData.append("description", data?.description);
    editProfile(formData);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center 
        bg-gray-100 px-4 py-10"
    >
      <div
        className="bg-white rounded-2xl shadow-lg p-8 max-w-xl 
            w-full relative"
      >
        <TiArrowLeftThick
          className="absolute top-[5%] left-[5%] w-[22px] h-[22px] 
             cursor-pointer"
          onClick={() => navigate("/profile")}
        />
        <h2
          className="text-2xl font-bold text-center text-gray-800
             mb-6"
        >
          Edit Profile
        </h2>
        <form onSubmit={onSubmitHandler}>
          <div className="flex flex-col items-center text-center">
            {authUser?.photoUrl ? (
              <img
                src={authUser?.photoUrl}
                className="w-24 h-24 rounded-full object-cover
                border-4 border-black"
                alt=""
              />
            ) : (
              <div
                className="w-24 h-24 rounded-full text-white flex items-center 
                 justify-center text-[30px] border-2 bg-black border-white"
              >
                {authUser?.fullName?.slice(0, 1).toUpperCase()}
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="image"
              className="text-sm font-medium text-gray-700"
            >
              Select Avatar
            </label>
            <input
              id="image"
              onChange={onChange}
              type="file"
              name="photoUrl"
              placeholder="PhotoUrl"
              accept="image/*"
              className="w-full px-4 py-2 border rounded-md text-sm active:bg-[#ebe5e5] cursor-pointer transition"
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              onChange={onChange}
              type="text"
              name="fullName"
              value={data.fullName}
              placeholder={authUser?.fullName}
              className="w-full px-4 py-2 border rounded-md text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="text"
              readOnly
              placeholder={authUser?.email}
              className="w-full px-4 py-2 border rounded-md text-sm cursor-not-allowed"
            />
          </div>
          <div>
            <label htmlFor="Bio" className="text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
              id="Bio"
              onChange={onChange}
              name="description"
              value={data.description}
              placeholder="Write about yourself"
              rows={3}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md 
                    resize-none focus:ring-2 focus:ring-[black]"
            />
          </div>
          <button
            disabled={loading}
            className="w-full bg-[black] active:bg-[#454545] 
                text-white py-2 rounded-md font-medium transition 
                cursor-pointer"
          >
            {loading ? <ClipLoader size={30} color="white" /> : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;