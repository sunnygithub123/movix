import axios from "axios";
const BASE_URl= "https://api.themoviedb.org/3";

const TMBD_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN

const headers={
    Authorization:"bearer " + TMBD_TOKEN, 
};

export const fetchDataFromApi=async(url,params)=>{
try{
    const {data} = await axios.get(BASE_URl + url,{
        headers,
        params

    })
    console.log("jhhj",data);
    return data;

}catch(err){
    console.log(err);
    return err;

}


}