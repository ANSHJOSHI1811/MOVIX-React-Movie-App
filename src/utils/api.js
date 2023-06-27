import  axios from "axios";
const BASE_URL ="https://api.themoviedb.org/3";
const TMDB_TOKEN= import.meta.env.VITE_APP_TMDB_TOKEN;
const headers={
Authorization:"bearer "+TMDB_TOKEN,
                                                        //? Bearer Token give response only when a Getter have a valid Token 
}
export const fetchDataFromApi = async(url,params)=>{
    try {  //? GET REQUEST using AXIOS 
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params
          });
          
        return data;        
        
    } catch (error) {
        console.log(error);
        return error
    }
    
}    



//* "Destructing" Meaning 
// const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;