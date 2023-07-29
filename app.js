const employers = document.querySelectorAll(".employer")
const courses = document.querySelectorAll(".course")
const organizations = document.querySelectorAll(".organization")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},
{
    threshold: 0.5,
}
)
employers.forEach(employer => {
    observer.observe(employer)
})

courses.forEach(course => {
    observer.observe(course)
})

organizations.forEach(organization => {
    observer.observe(organization)
})