import React, {useState} from "react";
import api from "../services/api.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function UseSignUp() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  const signUp = async (userData) => {
    setLoading(true);
    try {
      const res = await api.post("/users/signup",userData);
      console.log(res); 
      setLoading(false);
      navigate("/")
       toast.success("signup successfully")

    } catch (error) {
        console.log(error.res)
       
    }finally{
         setLoading(false);
    }
  };
  return { signUp, loading }
}

export default UseSignUp;
