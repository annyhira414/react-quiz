// import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import {
  getDatabase,
  ref,
  query,
  orderByKey,
  get,
  startAt,
  limitToFirst,
} from "firebase/database";

// this is my custom hooks . function componet e diye banaste hoy
export default function useVideoList(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fatchVideos() {
      // database related works
      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt("" + page), // makesure korte hobe ami joto gula data chabo Fibase amre jeno toto gula data dite pare // number k string korte hobe
        limitToFirst(14)
      );

      try {
        setError(false);
        setLoading(true);
        //  request firbase database
        const sanpshot = await get(videoQuery);
        setLoading(false);
        if (sanpshot.exists()) {
          setVideos((prevViodes) => {
            return [...prevViodes, ...Object.values(sanpshot.val())];
          });
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }
    fatchVideos();
  }, [page]);
  return {
    loading,
    error,
    videos,
  };
}
