// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelector('.needs-validation')
    forms.addEventListener('submit', event => {
        if (!forms.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          forms.classList.add('was-validated')
        }, false)
    })()
    // Loop over them and prevent submission

        
