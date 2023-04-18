console.log("index loaded");

const scrollLink = document.querySelector('#scroll-next');

scrollLink.addEventListener('click', function (event) {
    event.preventDefault();

    const section = document.getElementById('section-2');
    section.scrollIntoView({ behavior: 'smooth' });
});