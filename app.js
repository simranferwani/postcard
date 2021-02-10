const searchBar = document.getElementById('search')
document.getElementById("fetchusers").addEventListener("click", getusers)
document.getElementById("fetchposts").addEventListener("click", getposts)
document.getElementById("addpost").addEventListener("submit", addpost)


function getusers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((data) => {
            let output = ``
            data.forEach((user) => {
                output += `
                <div class="card">
                  <h2> User Id: ${user.id}</h2>
                  <p>Name: ${user.name}<p>
                  <p>Address: ${user.address}
                  <p>Email: ${user.email}</p>
                  <p>Website Link: ${user.website}
                   </div>
            ` ;
            });
            document.getElementById("output").innerHTML = output;
        })
}

//getposts

function getposts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((data) => {
            let output = ``
            data.forEach((post) => {
                output += `
                  <div class="card">
                  <h3>${post.title}</h3>
                  <p>${post.body}<p>
                   </div>
                  `;

            });
            document.getElementById("output").innerHTML = output;
        })
}

function addpost(e) {
    e.preventDefault();
    let title = document.getElementById("title1").value;
    let body = document.getElementById("body").value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
            'Accept': 'application/json , test/plain , */*',
            'Content-type': 'application/json'

        },
        body: JSON.stringify({ title: title, body: body })
    })
        .then((res) => res.json())
        .then((data) => {

            let output = ``

            output= `
                  <div class="card">
                  <h3>${title}</h3>
                  <p>${body}<p>
                   </div>
                
                  `;

                  messagevisible();

                  document.getElementById("output").innerHTML = output;
            closeModal();
        });

    }


    function messagevisible() {
        message.style.visibility="visible";
    }
      // var x = document.getElementById("message");
        //if (x.innerHTML === "") {
         // x.innerHTML = "Post Added!";
        //} else {
          //x.innerHTML = "";
        //}
      //}














