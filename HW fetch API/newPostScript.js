const gNewPost = {}

// Function for "MakePost" button
function makeAPost(e) {
    e.preventDefault();
    // Getting index to each one of the infromation post
    const titleEl = document.getElementById("titleText");
    const authorNameEl = document.getElementById("authorText");
    const postBodyEl = document.getElementById("bodyText");

    // Updating object
    gNewPost.title = titleEl.value;
    gNewPost.author = authorNameEl.value;
    gNewPost.body = postBodyEl.value;
    gNewPost.userId = 11;

    const popUp = document.getElementById("finalPost");

    const popUpTitleEl = document.querySelector('#finalPost-Title')
    const popUpAuthorEl = document.querySelector('#finalPost-author')
    const popUpBodyEl = document.querySelector('#finalPost-body')

    // Changing the innerText
    popUpTitleEl.innerText = gNewPost.title
    popUpAuthorEl.innerText = gNewPost.author
    popUpBodyEl.innerText = gNewPost.body

    //top make popup visible
    popUp.style.display = "block";



}
// Function for "Close Popup" button
function closePopup() {
    const popUp = document.getElementById("finalPost");
    popUp.style.display = "none";
}

function createPost() {
    // fetch POST make new post
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: gNewPost.title,
            body: gNewPost.body,
            userId: gNewPost.userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            alert("The post have been publish complitly, You can see in the console that the json have been create.")
            console.log(json)
        });
}

