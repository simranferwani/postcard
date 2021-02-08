//getting modal opening buttons \
const modal = document.getElementById('modal');
const modalBtn = document.getElementById('addposts');
//const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
//closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
    console.log(1234)
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}