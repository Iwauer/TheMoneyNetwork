document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    document.getElementById('confirmationMessage').innerText = "Thank you for applying! We'll contact you soon.";
    
    document.getElementById('loanForm').reset();
});
