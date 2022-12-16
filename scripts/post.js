// Base URL
const BASE_API_URL = "https://project-1-api.herokuapp.com/";

// API Key
const API_KEY = "42326e44-760b-48b9-8a5f-bdcbd5aa2d84";

// Query
const query = "comments";

// URL
const url = `${BASE_API_URL}${query}?api_key=${API_KEY}`;

console.log(url);


axios
  .post("https://project-1-api.herokuapp.com/comments", {
    name: "Jordan",
    comment: "This is not the easiest thing.",
  })
  .then((result) => {
    console.log(result.data.id);
  })
  .catch((error) => {
    console.error(error);
  });


  console.log(url);