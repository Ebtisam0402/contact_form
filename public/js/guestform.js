
// When the form is submitted, validate everything
document.getElementById('guest-form').onsubmit = () => {

  clearErrors();
  let isValid = true;

  // Validate first name
  let fname = document.getElementById('fname').value.trim();
  if (!fname) {
    document.getElementById('err-fname').style.display = "block";
    isValid = false;
  }

  // Validate last name
  let lname = document.getElementById('lname').value.trim();
  if (!lname) {
    document.getElementById('err-lname').style.display = "block";
    isValid = false;
  }

  // Validate LinkedIn (optional, but must start with https://linkedin.com/in/)
  let linkedin = document.getElementById('linkedin').value.trim();
  if (linkedin && !linkedin.startsWith("https://linkedin.com/in/")) {
    document.getElementById('err-linkedin').style.display = "block";
    isValid = false;
  }

  // Validate email only if mailing list checkbox is checked
  let addMe = document.getElementById('addme').checked;
  let email = document.getElementById('email').value.trim();
  if (addMe && (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
    document.getElementById('err-email').style.display = "block";
    isValid = false;
  }

  // Validate "How we met"
  let meet = document.getElementById('meet').value;
  if (!meet) {
    document.getElementById('err-meet').style.display = "block";
    isValid = false;
  }

  return isValid;
};

// Clear previous errors
function clearErrors() {
  let errors = document.getElementsByClassName("error");
  for (let i = 0; i < errors.length; i++) {
    errors[i].style.display = "none";
  }
}

// 🌟 Show/hide email format section when mailing list checkbox is checked
document.getElementById('addme').addEventListener('change', () => {
  let formatSection = document.getElementById('email-format');
  if (document.getElementById('addme').checked) {
    formatSection.style.display = "block";
  } else {
    formatSection.style.display = "none";
  }
});

// 🌟 Show/hide "Other (please specify)" textbox when "Other" is selected
document.getElementById('meet').addEventListener('change', () => {
  let otherBox = document.getElementById('other-textbox');
  if (document.getElementById('meet').value === "other") {
    otherBox.style.display = "block";
  } else {
    otherBox.style.display = "none";
  }
});