console.log("Remember: There is always a solution.")


// Create an Array of Objects with our Shows data.
const commentsArray = [
    { name: "Connor Walton", text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.", date: "02/17/2021" },
    { name: "Emilie Beach", text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.", date: "01/09/2021"},
    { name: "Miles Acosta", text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.", date: "12/20/2021"}
];


// Select the parent element (section with shows class)
const commentsListElement = document.querySelector(".comment-section")


const displayComments = (comment) => {

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
    commentDate.innerText = comment.date;
    commentTextContainer.appendChild(commentDate);



    // Create a p tag for the comment text
    const commentText = document.createElement("p");
    commentText.classList.add("comment__text");
    commentText.innerText = comment.text;
    commentCard.appendChild(commentText);



    // Append Comment Container to Comment Card
    commentsContainer.appendChild(commentCard);

    commentsListElement.appendChild(commentsContainer);

};



// Loop over the Comments Array
for (let i = 0; i < commentsArray.length; i++) {
    displayComments(commentsArray[i]);
};


// Grab Button element using it's ID
// const btnElement = document.querySelector("comment__button");

// // Add Event Listener to Button element
// btnElement.addEventListener("click", () => {
//     const article = document.querySelectorAll("article");
    
//     for (let i = 0; i < article.length; i++) {
//         article[i].classList.toggle("red");
//     }
// });















