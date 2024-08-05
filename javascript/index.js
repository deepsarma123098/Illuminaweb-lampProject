

//First button

let buttonOne = document.querySelector('.slide-one')

if(buttonOne){

  // console.log(buttonOne);

  buttonOne.addEventListener('click', ()=> {

    document.querySelector('.slide-two').style.display = "block";
    document.querySelector('.slide-one').style.display = "none";
    document.querySelector('.white-light').style.display = "block";
    document.querySelector('.slider').style.backgroundColor = "green"
  }); 

} 

// Second button

let buttonTwo = document.querySelector('.slide-two')

if(buttonTwo){

  buttonTwo.addEventListener('click', ()=> {

    document.querySelector('.slide-one').style.display = "block";
    document.querySelector('.slide-two').style.display = "none";
    document.querySelector('.white-light').style.display = "none";
    document.querySelector('.slider').style.backgroundColor = "black"
    
  }); 

} 



  let submit = document.querySelector('.btn')

  // console.log(submit);

  submit.addEventListener('click', (e)=> {
    // console.log(e);
    e.preventDefault()
    const formData = {
      firstName: document.getElementById('fName').value,
      lastName: document.getElementById('lName').value,
      contactNumber: document.getElementById('contact').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
  };

  // Log the form data to the console (or send it to a server)
  console.log('Form Data Submitted:', formData);
    // console.log("Form Submitted");

    document.getElementById('fName').value = '';
    document.getElementById('lName').value = '';
    document.getElementById('contact').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
})




