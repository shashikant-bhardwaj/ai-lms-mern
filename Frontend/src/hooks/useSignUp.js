import React, {useState} from "react";
import api from "../services/api.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/features/userSlice.js";

function UseSignUp() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  const signUp = async (userData) => {
    setLoading(true);
    try {
      const res = await api.post("/auth/signup",userData);
      console.log(res); 
      setLoading(false);
      dispatch(setAuthUser(res?.data?.data))
      
      navigate("/")
       toast.success("signup successfully")

    } catch (error) {
        toast.error(error.response?.data?.message)
       
    }finally{
         setLoading(false);
    }
  };
  return { signUp, loading }
}

export default UseSignUp;
