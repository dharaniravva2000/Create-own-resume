const form = document.getElementById('resume-form');
const resumePreview = document.getElementById('resume-preview');
const downloadBtn = document.getElementById('download-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const jobTitle = document.getElementById('job-title').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const summary = document.getElementById('summary').value;
  const skills = document.getElementById('skills').value;
  const workHistory = document.getElementById('work-history').value;
  const education = document.getElementById('education').value;

  // Update preview
  document.getElementById('preview-name').textContent = name;
  document.getElementById('preview-job-title').textContent = jobTitle;
  document.getElementById('preview-contact').textContent = `${address} • ${phone} • ${email}`;
  document.getElementById('preview-summary').textContent = summary;
  document.getElementById('preview-skills').textContent = skills;
  document.getElementById('preview-work-history').textContent = workHistory;
  document.getElementById('preview-education').textContent = education;

  // Show preview and download button
  resumePreview.classList.remove('hidden');
  downloadBtn.classList.remove('hidden');

  // Scroll to preview
  resumePreview.scrollIntoView({ behavior: 'smooth' });
});

downloadBtn.addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Add content to PDF
  doc.setFontSize(18);
  doc.setTextColor(0, 123, 255); // Highlight color
  doc.text(document.getElementById('preview-name').textContent, 10, 20);
  doc.setFontSize(14);
  doc.text(document.getElementById('preview-job-title').textContent, 10, 30);
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0); // Reset color
  doc.text(document.getElementById('preview-contact').textContent, 10, 40);

  // Summary
  doc.setFontSize(14);
  doc.setTextColor(0, 123, 255); // Highlight color
  doc.text('PROFESSIONAL SUMMARY', 10, 60);
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0); // Reset color
  doc.text(document.getElementById('preview-summary').textContent, 10, 70);

  // Skills
  doc.setFontSize(14);
  doc.setTextColor(0, 123, 255); // Highlight color
  doc.text('SKILLS', 10, 90);
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0); // Reset color
  doc.text(document.getElementById('preview-skills').textContent, 10, 100);

  // Work History
  doc.setFontSize(14);
  doc.setTextColor(0, 123, 255); // Highlight color
  doc.text('WORK HISTORY', 10, 120);
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0); // Reset color
  doc.text(document.getElementById('preview-work-history').textContent, 10, 130);

  // Education
  doc.setFontSize(14);
  doc.setTextColor(0, 123, 255); // Highlight color
  doc.text('EDUCATION', 10, 150);
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0); // Reset color
  doc.text(document.getElementById('preview-education').textContent, 10, 160);

  // Save PDF
  doc.save('resume.pdf');
});