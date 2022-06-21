const sectionOne = document.querySelector('.section1');
const sections = document.querySelectorAll('.section');

const options = { 
    root: null, // it is the viewport
    threshold: 0,
    rootMargin: "-100px"
};

const observer =  new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        console.log(entry.target)
        entry.target.classList.toggle("inverse");
        observer.unobserve(entry.target)
    });
}, options);

sections.forEach(section => {
    observer.observe(section)
})