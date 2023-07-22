function logSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('login');
    const modal = document.querySelector('.js-modal');
    const discription = document.querySelector('.modal_content');
    discription.innerHTML = name;



    modal.style.display="block"
  }
  const close = document.querySelector('.js-close');
  close.addEventListener('click', function() {
    const modal = document.querySelector('.js-modal');
    modal.style.display="none"
  })
  
  const form = document.getElementById("loginForm");
  form.addEventListener("submit", logSubmit);

