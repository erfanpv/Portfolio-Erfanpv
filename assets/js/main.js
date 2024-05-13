/*----Navbar js ----*/
const burger = document.querySelector('.burger')
const sidebar = document.querySelector('#sidebar')
const links = document.querySelectorAll('#sidebar ul li a')

burger.addEventListener('click', ()=> {
    sidebar.classList.toggle('is-active')
    burger.classList.toggle('is-active')
})

links.forEach(link => link.addEventListener('click', ()=>{
    links.forEach(link => link.classList.remove('is-active'))
    link.classList.add('is-active')

    sidebar.classList.remove('is-active')
    burger.classList.remove('is-active')
}))

// AOS
AOS.init({
    duration: 900,
});


/*---About js ----*/

let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents")

  function opentab (tabname) {
    for (tabLink of tabLinks) {
      tabLink.classList.remove("active-link");
    }
    for (tabContent of tabContents) {
      tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }


/*-------Contact Section-------- */

(function(){
  emailjs.init({
      publicKey: ("qnBTVdM5AXnNMeG8S"),
  });
})();


function sendMail () {
  var params = {
      name: document.getElementById("name").value.trim() ,
      email : document.getElementById("email").value.trim() ,
      subject: document.getElementById("subject").value.trim() ,
      message: document.getElementById("message").value.trim(),
    };
  const serviceID = "service_au63f0m";
  const templateId = "template_a4avz0f";

  if (params.name === '' || params.email === '' || params.message === '') {
    alert('Please fill out all fields.');
    return;
}


// let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(params.email)) {
//       document.getElementById('emailError').style.display = 'inline';
//       return;
                    
//     } else {
//        document.getElementById('emailError').style.display = 'none';
//     }

  emailjs.send (serviceID,templateId,params)
  .then(
    res => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your Message Sent Successfully")
    }
  ).catch ((err) => {
    console.log(err);
    alert('Oops! Something went wrong, please try again later.');
  })
}

