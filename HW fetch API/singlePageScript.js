// Getting parameters from url 
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const postID = urlParams.get('postId')

function getData(url) {
    return fetch(url).then(res => res.json())
}
// URL
const urlPosts = 'https://jsonplaceholder.typicode.com/posts'
const urlUsers = 'https://jsonplaceholder.typicode.com/users'
const urlComments = 'https://jsonplaceholder.typicode.com/comments'

// Making object that contains the json array
getData(urlPosts).then((posts) => {
    getData(urlUsers).then(users => {
        getData(urlComments).then(comments => {
            const data = { users, posts, comments }
            
            createAPost(data)
        })
    })
})

function createAPost(data) {
    // Removing div that show contant when nothing load
    const div = document.getElementById('ddntLoad')
    div.style.display = "none";
    // Starting loop to create the post for the post who get clicked
    data.posts.map(post => {
        const main = document.getElementById('post');
        // Matching post id to post id to get the right information
        if (postID == post.id) {
            
            // Creating elements for the div
            const postDiv = document.createElement('div');
            const title = document.createElement('h3');
            const bodyText = document.createElement('p');
            const commentsIndx = document.createElement('h2')
            // Getting indexText to every arry in the arrys opbject
            title.innerText = post.title
            bodyText.innerText = post.body
            commentsIndx.innerText = `Comments`
            // Making the post
            // Gettine username by id
            data.users.map(user => {
                if (post.userId === user.id) {
                    // Making h2 element that have the user name index   
                    userName = document.createElement('h2');
                    userName.innerText = user.name;

                    postDiv.appendChild(userName)
                }
            })
            postDiv.appendChild(title);
            postDiv.appendChild(bodyText);
            postDiv.appendChild(commentsIndx)

            // Making a section for comments
            data.comments.map((comment) => {
                if (comment.postId == postID) {
                    // Creating elements for the div
                    const commentSection = document.createElement('div');
                    const commentUserName = document.createElement('h4')
                    const commentText = document.createElement('p');
                    // Getting index
                    commentUserName.innerText = comment.name
                    commentText.innerText = comment.body
                    // Making the section
                    commentSection.appendChild(commentUserName)
                    commentSection.appendChild(commentText)
                    postDiv.appendChild(commentSection)
                    // Adding class to the div
                    commentSection.classList.add('comment')
                } else {
                    console.log(`all g bro`);
                }
            })
            // Making the div post
            main.appendChild(postDiv);

            // adding classes for dsn
            postDiv.classList.add('post')

            // Adding comments
            
        } else {
            console.log('error but good');
        }
    })
};
