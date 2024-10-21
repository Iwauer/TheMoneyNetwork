document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Gather form data
        const formData = new FormData(form);

        // Send the data to Formspree (using the correct Form ID)
        fetch('https://formspree.io/f/mbljllab', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(function(response) {
            if (response.ok) {
                alert('Your request has been submitted successfully!');
                form.reset(); // Clear form after successful submission
            } else {
                alert('Oops! There was a problem submitting your form.');
            }
        })
        .catch(function(error) {
            alert('Oops! There was a problem submitting your form.');
        });
    });
});
