import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import {getDatabase , ref , query, orderByKey, get} from "firebase/database";

// this is my custom hooks . function componet e diye banaste hoy 
export default function useVideoList(){
    const [loading, setLoading]= useState(true);
    const [error , setError] = useState(false);
    const [videos, setVideos] = useState([]);
 
    useEffect(()=>{
        async function fatchVideos(){
            const db = getDatabase();
            const videosRef = ref(db , "videos");
            const videosQuery = query(
                videosRef ,
                orderByKey()
            );
            try {
                setError(false);
                setLoading(true);
                //  request firbase database
               const sanpshot = await get(videosQuery);
               setLoading(false);
               if(sanpshot.exists()){
                setVideos((prevViodes)=>{
                    return [...prevViodes , ...Object.values(sanpshot.val())]

                })
               }

            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }
        }
        fatchVideos();
    })
    return{
        loading,
        error,
        videos
    }
}
