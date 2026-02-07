import axios from "axios"
import { useEffect, useState } from "react";


const useBookDataLoad = () => {

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        axios.get("/bookData.json")
            .then(data => {
                setData(data.data)
                setLoader(false)
            })
    }, [])

    return { data, loader };
}
export default useBookDataLoad;
