import axios from "axios";
export const BACK_ENDPOINT = "https://qtify-backend-labs.crio.do"

export  const fetchtopalbums = async()=>{
    const url = `${BACK_ENDPOINT}/albums/top`
  try {
const response = await axios.get(url);
console.log("Rawdata_topalbums",response.data);
return response.data

  }
  catch(e){ 
console.log(e)
  }
  }


  export  const fetchnewalbums = async()=>{
    const url = `${BACK_ENDPOINT}/albums/new`
  try {
const response = await axios.get(url);
console.log("Rawdata_newalbums",response.data);
return response.data

  }
  catch(e){
console.log(e)
  }
  }

  export const fetchsongs = async() =>{
    const url = `${BACK_ENDPOINT}/songs`
    try {
      const response = await axios.get(url);
      console.log("Rawdata_songs",response.data);
      return response.data
      
        }
        catch(e){
      console.log(e)
        }



  }


  export const fetchgenres = async()=>{
    const url = `${BACK_ENDPOINT}/genres`
    try {
      const response = await axios.get(url);
      console.log("Rawdata_songs",response.data);
      return response.data
      
        }
        catch(e){
      console.log(e)
        }
  }


