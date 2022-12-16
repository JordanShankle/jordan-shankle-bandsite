// Base URL
const BASE_API_URL = "https://project-1-api.herokuapp.com/";

// API Key
const API_KEY = "42326e44-760b-48b9-8a5f-bdcbd5aa2d84";

// Query
const query = "comments";

// URL
const url = `${BASE_API_URL}${query}?api_key=${API_KEY}`;

console.log(url);


// Create an Array for the Comments
let comments = [];


// Make a GET request
axios
    // Go to the URL & get the Data
    .get(url)

    // Store the data in a our Array –– comments
    .then((result) => {
        // Redeclare our comments array to store the data of our API request
        comments = result.data.comment;
        
        console.log(result);
        
        // Loop thru our data & add each iteration to our Array –– comments
        for (let i = 0; i < comments.length; i++) {
            renderComments(comments[i]);
        }
    })
    .catch((error) => {
        console.error(error);
    });



// Grab the parent element
const commentSection = document.querySelector(".comment-section");


function renderComments(comment) {

    // This is resetting the comments
    commentSection.innerText = "" 

    for (const comment of comments) {


    // Create a article container for the comments
    const commentsContainer = document.createElement("article")
    commentsContainer.classList.add("comment-container");



    // Create a div container for the comments pic and name
    const commentPicContainer = document.createElement("div");
    commentPicContainer.classList.add("comment__card-pic-container");
    commentsContainer.appendChild(commentPicContainer)

    // Add the profile pic
    const commentPic = document.createElement("div");
    commentPic.classList.add("comment__card__pic");
    commentPicContainer.appendChild(commentPic);




    // Create a div container for the Comment card
    const commentCard = document.createElement("div");
    commentCard.classList.add("comment__card");
    commentsContainer.appendChild(commentCard)


    // Create a div container for the name and text
    const commentTextContainer = document.createElement("div");
    commentTextContainer.classList.add("comment__text-container");
    commentCard.appendChild(commentTextContainer)


    // Add the Name
    const commentName = document.createElement("p");
    commentName.classList.add("comment__name");
    commentName.innerText = comment.name;
    commentTextContainer.appendChild(commentName);

    // Add the Date
    const commentDate = document.createElement("p");
    commentDate.classList.add("comment__date")
    commentDate.innerText = comment.timestamp;
    commentTextContainer.appendChild(commentDate);



    // Create a p tag for the comment text
    const commentText = document.createElement("p");
    commentText.classList.add("comment__text");
    commentText.innerText = comment.comment;
    commentCard.appendChild(commentText);
     

    // Append Comment Container to Comment Card
    commentsContainer.appendChild(commentCard);

    commentSection.appendChild(commentsContainer);

    }
}

// Loop over the Comments Array
for (let i = 0; i < comments.length; i++) {
    renderComments(comments[i]);
};



// Grab parent element for Event Listener
const form = document.querySelector(".form");

// Create Event Listener
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let date = new Date().toLocaleDateString("en-us");

    // Create a new Object for our Array
    let newComment = {
        name: event.target.name.value,
        date: date,
        text: event.target.comment.value
    }

    // Reset the values
    event.target.name.value = "";
    event.target.comment.value = "";


    // Add new comment to the top of the Array
    comments.unshift(newComment);
    renderComments();
});