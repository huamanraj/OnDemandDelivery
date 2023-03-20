const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", (event) => {
	event.preventDefault();
	
	// Validate Jan Aadhaar number
	const janAadhaar = document.getElementById("jan-aadhaar").value;
	if (janAadhaar.length !== 12) {
		showError("Please enter a valid Jan Aadhaar number");
		return;
	}

	// Validate age
	const age = document.getElementById("age").value;
	if (isNaN(age) || age < 18) {
		showError("Please enter a valid age");
		return;
	}

	// Validate mobile number
	const mobileNumber = document.getElementById("mobile-number").value;
	if (isNaN(mobileNumber) || mobileNumber.length !== 10) {
		showError("Please enter a valid mobile number");
		return;
	}

	// If all fields are valid, submit the form
	alert("Registration successful!");
	registrationForm.reset();
});

function showError(message) {
	const errorDiv = document.createElement("div");
	errorDiv.className = "error";
	errorDiv.textContent = message;
	registrationForm.appendChild(errorDiv);
}



