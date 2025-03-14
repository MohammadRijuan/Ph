const handlePost=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(data=> showPost(data))
}


const showPost=(posts)=>{
    const postContainer = document.getElementById('post-container')
    
    for(const post of posts){
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML=`
        <h1>${post.id}</h1>
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        <button>post</button>
        `;
        console.log(post)
        postContainer.appendChild(div)
    }

}

handlePost()