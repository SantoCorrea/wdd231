const courseDetails = document.getElementById('course-details');
 
function displayCourseDetails(course) {
    courseDetails.innerHTML = `
        <button class="modal-close" aria-label="Close">&times;</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <p><strong>Credits:</strong> ${course.credits}</p>
        <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
    `;
 
    courseDetails.showModal();
}
 

courseDetails.addEventListener('click', (event) => {
    if (event.target === courseDetails || event.target.closest('.modal-close')) {
        courseDetails.close();
    }
});
 