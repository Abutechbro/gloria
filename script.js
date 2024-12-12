let menuIcon = document.querySelector('#menu-icon');
let cancelIcon = document.querySelector('#cancel-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.add('active');
  menuIcon.style.display = 'none';
  cancelIcon.style.display = 'block';
});

cancelIcon.addEventListener('click', () => {
  navbar.classList.remove('active');
  menuIcon.style.display = 'block';
  cancelIcon.style.display = 'none';
});


//submition
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const form = event.target;
  const formData = new FormData(form);

  fetch(form.action, {
      method: form.method,
      body: formData,
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          // Show the modal
          const modal = document.getElementById('successModal');
          modal.style.display = 'block';
          
          // Close the modal after a few seconds and redirect
          setTimeout(() => {
              modal.style.display = 'none';
              window.location.href = 'index.html';
          }, 2000); // Redirect after 3 seconds
      } else {
          alert('There was an error submitting the form.');
      }
  })
  .catch(error => {
      console.error('Error:', error);
      alert('There was an error submitting the form.');
  });
});

// Get the modal
const modal = document.getElementById('successModal');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
}