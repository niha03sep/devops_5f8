function validateForm() {
  let isValid = true;

  // Get values
  const collegeName = document.getElementById("collegeName").value.trim();
  const genderElems = document.getElementsByName("gender");
  const course = document.getElementById("course").value;
  const department = document.getElementById("department").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Clear old errors
  document.querySelectorAll(".error").forEach(e => e.innerHTML = "");

  // College name
  if (collegeName === "") {
    document.getElementById("collegeError").innerHTML = "College name is required.";
    isValid = false;
  }

  // Gender
  let genderSelected = false;
  for (let i = 0; i < genderElems.length; i++) {
    if (genderElems[i].checked) {
      genderSelected = true;
      break;
    }
  }
  if (!genderSelected) {
    document.getElementById("genderError").innerHTML = "Please select gender.";
    isValid = false;
  }

  // Course
  if (course === "") {
    document.getElementById("courseError").innerHTML = "Please select a course.";
    isValid = false;
  }

  // Department
  if (department === "") {
    document.getElementById("deptError").innerHTML = "Please select a department.";
    isValid = false;
  }

  // Password
  if (password.length < 6) {
    document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters.";
    isValid = false;
  }

  // Confirm password
  if (password !== confirmPassword) {
    document.getElementById("confirmError").innerHTML = "Passwords do not match.";
    isValid = false;
  }

  if (isValid) {
    alert("Registration successful!");
  }

  return isValid;
}
