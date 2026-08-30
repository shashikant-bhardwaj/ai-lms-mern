import api from "../services/api.js";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom';
import { setAuthUser } from "../redux/features/userSlice.js";

import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase.js";

function useGoogleSignUp() {
       const navigate = useNavigate();
       const dispatch = useDispatch();
  const googleSignUp = async (role) => {
   try {
      const response = await signInWithPopup(auth, provider);
      let user = response?.user
      let fullName = user.displayName;
      let email = user.email;
      let firebaseUid = user?.uid;
     const res = await api.post("/auth/google-authentication",  { 
        fullName,
        email,
        role,
        firebaseUid
     });
     dispatch(setAuthUser(res?.data?.data));
     navigate("/");
     toast.success("signup successfully");
   } catch (error) {
    toast.error(error?.response?.data?.message);
   }
  };
  return { googleSignUp };
}

export default useGoogleSignUp;
