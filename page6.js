// Populate resume content from localStorage
document.getElementById('resume-name').textContent = localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastName');
document.getElementById('resume-profession').textContent = localStorage.getItem('profession');
document.getElementById('resume-contact').textContent = `${localStorage.getItem('city')} ◆ ${localStorage.getItem('phone')} ◆ ${localStorage.getItem('email')}`;
document.getElementById('resume-summary').textContent = localStorage.getItem('roles');
document.getElementById('resume-skills').textContent = localStorage.getItem('skills');
document.getElementById('resume-work-history').textContent = `${localStorage.getItem('jobTitle')}, ${localStorage.getItem('company')} (${localStorage.getItem('startDate')} - ${localStorage.getItem('endDate')})`;
document.getElementById('resume-education').textContent = `${localStorage.getItem('degree')} in ${localStorage.getItem('fieldOfStudy')}, ${localStorage.getItem('schoolName')}, ${localStorage.getItem('schoolLocation')} (${localStorage.getItem('graduationDate')})`;

function downloadResume() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Add content to PDF
  doc.setFontSize(18);
  doc.text(localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastName'), 10, 20);
  doc.setFontSize(14);
  doc.text(localStorage.getItem('profession'), 10, 30);
  doc.setFontSize(12);
  doc.text(`${localStorage.getItem('city')} ◆ ${localStorage.getItem('phone')} ◆ ${localStorage.getItem('email')}`, 10, 40);

  doc.setFontSize(14);
  doc.text('PROFESSIONAL SUMMARY', 10, 50);
  doc.setFontSize(12);
  doc.text(localStorage.getItem('roles'), 10, 60);

  doc.setFontSize(14);
  doc.text('SKILLS', 10, 80);
  doc.setFontSize(12);
  doc.text(localStorage.getItem('skills'), 10, 90);

  doc.setFontSize(14);
  doc.text('WORK HISTORY', 10, 110);
  doc.setFontSize(12);
  doc.text(`${localStorage.getItem('jobTitle')}, ${localStorage.getItem('company')} (${localStorage.getItem('startDate')} - ${localStorage.getItem('endDate')})`, 10, 120);

  doc.setFontSize(14);
  doc.text('EDUCATION', 10, 140);
  doc.setFontSize(12);
  doc.text(`${localStorage.getItem('degree')} in ${localStorage.getItem('fieldOfStudy')}, ${localStorage.getItem('schoolName')}, ${localStorage.getItem('schoolLocation')} (${localStorage.getItem('graduationDate')})`, 10, 150);

  // Save PDF
  doc.save('resume.pdf');
}