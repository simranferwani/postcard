//getting modal opening buttons \
const modal = document.getElementById('modal');
const modalBtn = document.getElementById('addposts');


// Events
modalBtn.addEventListener('click', openModal);



// Open
function openModal() {
  modal.style.display = 'block';
  output.style.visibility="hidden"
}

// Close
function closeModal() {
  modal.style.display = 'none';
  output.style.visibility ="visible";
}


