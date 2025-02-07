function savePersonalDetails() {
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const profession = document.getElementById('profession').value;
  const city = document.getElementById('city').value;

  // Save to localStorage or pass to the next page
  localStorage.setItem('firstName', firstName);
  localStorage.setItem('lastName', lastName);
  localStorage.setItem('email', email);
  localStorage.setItem('phone', phone);
  localStorage.setItem('profession', profession);
  localStorage.setItem('city', city);

  window.location.href = 'professional-summary.html';
}