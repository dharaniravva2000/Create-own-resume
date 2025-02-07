function saveSkills() {
    const skills = document.getElementById('skills').value;
    localStorage.setItem('skills', skills); // Save skills to localStorage
    window.location.href = 'education.html'; // Redirect to Education page
  }