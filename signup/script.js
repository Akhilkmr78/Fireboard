let form = document.querySelector('form')

form.addEventListener('submit', e => {
    e.preventDefault();
    setTimeout(() => {
        window.location.href="../BlogPage/index.html"; 
    }, 800)
    // The URL that will be redirected too.
})