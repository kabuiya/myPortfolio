document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var form = event.target;
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        // Reset the form fields after successful submission
        form.reset();
        alert('Form submitted successfully!');
      } else {
        alert('There was an error submitting the form. Please try again later.');
      }
    };
    xhr.send(formData);
  });


  