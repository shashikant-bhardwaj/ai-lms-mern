import React from 'react'
import api from '../services/api'

function useGetCreatorData() {
    
    const getCreatorData = async(userId , setCreatorData) => {
        try {
            const res = await api.post("/courses/getcreator", {userId});
            console.log(res?.data?.data);
            setCreatorData(res?.data?.data); 
        } catch (error) {
            console.log("getting creator error : ", error);  
        }
    }
    return {getCreatorData}
   
}

export default useGetCreatorData
