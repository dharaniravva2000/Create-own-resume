function saveProfessionalSummary() {
    const jobTitle = document.getElementById('job-title').value;
    const company = document.getElementById('company').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const roles = document.getElementById('roles').value;
  
    // Save to localStorage or pass to the next page
    localStorage.setItem('jobTitle', jobTitle);
    localStorage.setItem('company', company);
    localStorage.setItem('startDate', startDate);
    localStorage.setItem('endDate', endDate);
    localStorage.setItem('roles', roles);
  
    window.location.href = 'skills.html';
  }