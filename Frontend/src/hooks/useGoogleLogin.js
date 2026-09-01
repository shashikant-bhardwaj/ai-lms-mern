import api from "../services/api.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthUser } from "../redux/features/userSlice";
import { toast } from "react-toastify";

import React from 'react'
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase.js";

function useGoogleLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const googleLogin = async() => {
        try {
            const response = await signInWithPopup(auth, provider);
            let user = response?.user
            let firebaseUid = user?.uid;
            const res = await api.post("/auth/google-login", 
                {
                    firebaseUid,
                    authProvider: "google"
                }
            );
            dispatch(setAuthUser(res?.data?.data));
            navigate("/");
            toast.success("Logged In successfully")
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }
    return { googleLogin }
}

export default useGoogleLogin
