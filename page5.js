function saveEducation() {
    const schoolName = document.getElementById('school-name').value;
    const schoolLocation = document.getElementById('school-location').value;
    const degree = document.getElementById('degree').value;
    const fieldOfStudy = document.getElementById('field-of-study').value;
    const graduationDate = document.getElementById('graduation-date').value;
  
    // Save education details to localStorage
    localStorage.setItem('schoolName', schoolName);
    localStorage.setItem('schoolLocation', schoolLocation);
    localStorage.setItem('degree', degree);
    localStorage.setItem('fieldOfStudy', fieldOfStudy);
    localStorage.setItem('graduationDate', graduationDate);
  
    window.location.href = 'resume-template.html'; // Redirect to Resume Template page
  }
  