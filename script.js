// Handle form submission for booking and quote pages
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Your booking has been confirmed!");
});

document.getElementById('quote-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Your quote request has been submitted!");
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Your message has been sent! We'll get back to you soon.");
});
