function getData(url) {
    return fetch(url).then(res => res.json())
}

const urlPosts = 'https://jsonplaceholder.typicode.com/posts'
const urlUsers = 'https://jsonplaceholder.typicode.com/users'
const urlComments = 'https://jsonplaceholder.typicode.com/comments'

getData(urlPosts).then((posts) => {
    getData(urlUsers).then(users => {
        getData(urlComments).then(comments => {
            const data = { users, posts, comments }
            createAPost(data)
            console.log(data.comments);
        })
    })
})

function createAPost(data) {

    data.posts.map(post => {

        const main = document.getElementById('posts');
        // Creating elements for the div
        const postDiv = document.createElement('div');
        const title = document.createElement('h3');
        const bodyText = document.createElement('a');

        // Getting indexText to every arry in the arrys opbject
        title.innerText = post.title
        bodyText.innerText = post.body

        // Making body text to href, 'a' element that navigate to the single
        bodyText.href = `singlePage.html?postId=${post.id}`
        
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


        // Making the div post
        main.appendChild(postDiv);

        // adding classes for dsn
        postDiv.classList.add('post')
    })
};



























// function renderHTML(data) {
// const main = document.getElementById('posts');

//   // Creating elements for the div
//   const postDiv = document.createElement('div');
//   const title = document.createElement('h3');
//   const bodyText = document.createElement('a');
//   const userId = document.createElement('h2');

//   // Getting indexText to every arry in the arrys opbject
//   title.innerText = data.
//   bodyText.innerText = post.body
//   userId.innerText = post.userId

//   // Making body text to href, 'a' element
//   bodyText.href = "";
//   // Making the post
//   postDiv.appendChild(userId);
//   postDiv.appendChild(title);
//   postDiv.appendChild(bodyText);


//   // Making the div post
//   main.appendChild(postDiv);

//   // adding classes for dsn
//   postDiv.classList.add('post')
// };
