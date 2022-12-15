// Base URL
const BASE_API_URL = "https://project-1-api.herokuapp.com/";

// API Key
const API_KEY = "42326e44-760b-48b9-8a5f-bdcbd5aa2d84";

// Query
const query = "comments";

// URL
const url = `${BASE_API_URL}${query}?api_key=${API_KEY}`;

let comment = [];

// console.log(url);

axios 
    .get(url)
    .then((result) => {
        comment = result.data.comments;
        console.log(result);
    }) 
    .catch((error)=> {
        console.error(error);
    })