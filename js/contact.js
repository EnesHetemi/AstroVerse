const form = document.querySelector('.contact-form'),
  userNameField = document.querySelector('.name'),
  lnameField = document.querySelector('.lname'),
  emailField = document.querySelector('.email'),
  subjectField = document.querySelector('.subject'),
  submitBtn = document.querySelector('.btn'),
  errorMsg = document.querySelector('.error-msg'),
  successMsg = document.querySelector('.successMsg');

const usernameRegEx = /^[A-Za-z .]{3,15}$/,
  lnameRegEx = /^[A-Za-z .]{4,15}$/,
  emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  subjectRegEx = /^[A-Za-z .]{15,200}$/;

let userIsValid = false,
  lnameIsValid = false,
  emailIsValid = false,
  subjectIsValid = false;

function contactFields() {
  userNameField.addEventListener('input', function (e) {
    if (this.value === '' || usernameRegEx.test(e.target.value)) {
      errorMsg.style.display = 'none';
      userIsValid = true;
    } else {
      errorMsg.textContent =
        'Emri duhet te permbaj vetem shkronja dhe duhet te jete me i gjate se 2 shkronja dhe te mos jete me i gjate se 15 shkronja';
      errorMsg.style.display = 'block';
      userIsValid = false;
    }
    if(userIsValid && lnameIsValid && emailIsValid && subjectIsValid){
        submitBtn.classList.remove('disabled')
        submitBtn.disabled = false
    }
    else{
        submitBtn.classList.add('disabled')
        submitBtn.disabled = true
    }
  });

  lnameField.addEventListener('input', function (e) {
    if (this.value === '' || lnameRegEx.test(e.target.value)) {
      errorMsg.style.display = 'none';
      lnameIsValid = true;
    } else {
      errorMsg.textContent =
        'Mbiemri duhet te permbaj vetem shkronja dhe duhet te jete me i gjate se 3 shkronja dhe te mos jete me i gjate se 15 shkronja';
      errorMsg.style.display = 'block';
      lnameIsValid = false;
    }
    if(userIsValid && lnameIsValid && emailIsValid && subjectIsValid){
        submitBtn.classList.remove('disabled')
        submitBtn.disabled = false
    }
    else{
        submitBtn.classList.add('disabled')
        submitBtn.disabled = true
    }
  });

  emailField.addEventListener('input', function (e) {
    if (this.value === '' || emailRegEx.test(String(e.target.value).toLowerCase())) {
      errorMsg.style.display = 'none';
      emailIsValid = true;
    } else {
      errorMsg.textContent = 'Emaili duhet te jete ne rregull, duhet te shkruani te gjitha elementet e nje emaili';
      errorMsg.style.top = '264px';
      errorMsg.style.display = 'block';
      emailIsValid = false;
    }
    if(userIsValid && lnameIsValid && emailIsValid && subjectIsValid){
        submitBtn.classList.remove('disabled')
        submitBtn.disabled = false
    }
    else{
        submitBtn.classList.add('disabled')
        submitBtn.disabled = true
    }
  });

  subjectField.addEventListener('input', function (e) {
    if (this.value === '' || subjectRegEx.test(e.target.value)) {
      errorMsg.style.display = 'none';
      subjectIsValid = true;
    } else {
      errorMsg.textContent =
        'Mesazhi duhet te permbaj vetem shkronja dhe duhet te jete me i gjate se 15 shkronja dhe te mos jete me i gjate se shkronja';
      errorMsg.style.display = 'block';
      subjectIsValid = false;
    }
    if(userIsValid && lnameIsValid && emailIsValid && subjectIsValid){
        submitBtn.classList.remove('disabled')
        submitBtn.disabled = false
    }
    else{
        submitBtn.classList.add('disabled')
        submitBtn.disabled = true
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    successMsg.style.display = 'block';
    if (userIsValid && lnameIsValid && emailIsValid && subjectIsValid) {
        successMsg.style.display = 'block';
  
        userNameField.value = '';
        lnameField.value = '';
        emailField.value = '';
        subjectField.value = '';
  
        userIsValid = false;
        lnameIsValid = false;
        emailIsValid = false;
        subjectIsValid = false;
      } else {
        errorMsg.textContent = 'Ju lutem plotsoni te gjitha fushat ne menyre te rregullt.';
        errorMsg.style.display = 'block';
      }
    });
  }
  
  contactFields();