//getting modal opening buttons \
const modal = document.getElementById('modal');
const modalBtn = document.getElementById('addposts');
const message = document.getElementById('message');
const messagebtn = document.getElementById("submit")


// Events
modalBtn.addEventListener('click', openModal);
messagebtn.addEventListener('click',messagevisible)




// Open
function openModal() {
  modal.style.display = 'block';
  output.style.visibility="hidden"
}

// Close
function closeModal() {
  setTimeout (function(){
  modal.style.display = 'none';
  output.style.visibility ="visible";
},3000)
}


//setTimeout(function(){ alert("Hello"); }, 3000);
//<p>Click the button to wait 3 seconds, then alert "Hello".</p>

//<button onclick="myFunction()">Try it</button>

//<script>
//function myFunction() {
  //setTimeout(function(){ alert("Hello"); }, 3000);
//}