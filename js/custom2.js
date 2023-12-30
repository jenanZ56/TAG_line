function submitBooking() {
	var customerName = document.getElementById("customerName").value;
	var contactPhone = document.getElementById("contactPhone").value;
	var contactEmail = document.getElementById("contactEmail").value;
	var Address = document.getElementById("Address").value;
	var Specify = document.getElementById("Specify").value;


	if (!customerName || !contactPhone || !contactEmail || !Address || !preferredDateTime||!Specify) {
		document.getElementById("error-message").innerText = "Please fill in all required fields.";
	} else {
		document.getElementById("error-message").innerText = "";
		alert("Booking submitted successfully!");
		document.getElementById("booking-form").reset();
	}
}