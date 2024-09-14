//Get references to the form and display area 
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
//Form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // this prevents the page from reloading.
    console.log('Form Submitted');
    //Collect input values.
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var work_experience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    //Generate the Resume content dynamically
    var resume_HTML = "\n        <h2><b>Resume</b><h2>\n        <h3>Personal Information</h3>\n        <p><b>Name: </b>".concat(name, "</p>\n        <p><b>Email: </b>").concat(email, "</p>\n        <p><b>Phone: </b>").concat(phone, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Work-Experience</h3>\n        <p>").concat(work_experience, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        ");
    //Display generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resume_HTML;
    }
    else {
        console.error('The resume element is not found.');
    }
});
