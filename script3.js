

//form1
const form1 = document.getElementById('form1');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const contact = document.getElementById('contact');
const email = document.getElementById('email');
const country = document.getElementById('country');
const city = document.getElementById('city');
const whatsappnumber = document.getElementById('whatsappnumber');
const male = document.getElementById('male');
const female = document.getElementById('female');
const other = document.getElementById('other');


//form2
const form2 = document.getElementById("form2");
const degree = document.getElementById('degree');
const passyear = document.getElementById('passyear');


//form5
const form5 = document.getElementById("form5")
const ref = document.getElementById('reference')



var form6 = document.getElementById("form6")

// var form1 = document.getElementById("form1")
var form3 = document.getElementById("form3")
var form4 = document.getElementById("form4")
var submit = document.getElementById("submit")

var next1 = document.getElementById("next1")
var next2 = document.getElementById("next2")
var next3 = document.getElementById("next3")
var next4 = document.getElementById("next4")
var next5 = document.getElementById("next5")
var next6 = document.getElementById("next6")
var back1 = document.getElementById("back1")
var back2 = document.getElementById("back2")
var back3 = document.getElementById("back3")
var back4 = document.getElementById("back4")
var back5 = document.getElementById("back5")

var progress = document.getElementById("progress")



//backbtn

back1.onclick = function () {
    form2.style.left = "150%"
    form1.style.left = "50%"
    progress.style.width = "13%"

}

back2.onclick = function () {
    form3.style.left = "150%"
    form2.style.left = "50%"
    progress.style.width = "28%"
}

back3.onclick = function () {
    form4.style.left = "150%"
    form3.style.left = "50%"
    progress.style.width = "50%"
}
back4.onclick = function () {
    form5.style.left = "150%"
    form4.style.left = "50%"
    progress.style.width = "65%"
}
back5.onclick = function () {
    form6.style.left = "150%"
    form5.style.left = "50%"
    progress.style.width = "76.5%"
}




//show errors

function showerror(input, message) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control error';
    const small = formcontrol.querySelector('small');
    small.innerText = message;
}

// show success

function showsuccess(input) {
    formcontrol = input.parentElement;
    formcontrol.className = 'form-control success';
}


//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showsuccess(input);
        return true;
    } else {
        showerror(input, 'Email is not Valid');
        return false;
    }
}


//check required

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showerror(input, `${getfieldName(input)} is Required`);
        }else{
            next1.onclick = function () {
                form1.style.left = "-50%";
                form2.style.left = "50%"
                progress.style.width = "28%"
                window.scrollTo(100, 100)
            }
            return true;
        }
    });
}

//check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showerror(input, `${getfieldName(input)} must be atleast  ${min} characters`);
    } else if (input.value.length > max) {
        showerror(input, `${getfieldName(input)} must be less than ${max} characters`);
    } else {
        showsuccess(input);
        next1.onclick = function () {
            form1.style.left = "-50%";
            form2.style.left = "50%"
            progress.style.width = "28%"
            window.scrollTo(100, 100)
        }
        return true;
        
    }
}


function checkNumber(input) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (re.test(input.value.trim())) {
        showsuccess(input);
        next1.onclick = function () {
            form1.style.left = "-50%";
            form2.style.left = "50%"
            progress.style.width = "28%"
            window.scrollTo(100, 100)
        }
        return true;
    } else {
        showerror(input, 'Contact Number is not Valid');
    }

}

function checkWANumber(input) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (re.test(input.value.trim())) {
        showsuccess(input);
        next1.onclick = function () {
            form1.style.left = "-50%";
            form2.style.left = "50%"
            progress.style.width = "28%"
            window.scrollTo(100, 100)
        }
        return true;
    } else {
        showerror(input, 'WhatsApp Number is not Valid');
    }

}

function checkcountry(input) {
    var letters = /^[A-Za-z]+$/;
    if (input.value.match(letters)) {
        showsuccess(input);
        next1.onclick = function () {
            form1.style.left = "-50%";
            form2.style.left = "50%"
            progress.style.width = "28%"
            window.scrollTo(100, 100)
        }
        return true;
    } else {
        showerror(input, 'Country is not Valid');
    }
}

function checkcity(input) {
    var letters = /^[A-Za-z]+$/;
    if (input.value.match(letters)) {
        showsuccess(input);
        next1.onclick = function () {
            form1.style.left = "-50%";
            form2.style.left = "50%"
            progress.style.width = "28%"
            window.scrollTo(100, 100)
        }
        return true;
    } else {
        showerror(input, 'City is not Valid');
    }
}

//get field name

function getfieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//event listners
//form1 event listener
form1.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([firstname, lastname, contact, email, country, whatsappnumber, city]);
    checkLength(firstname, 3, 15);
    checkLength(lastname, 3, 15);
    checkEmail(email);
    checkNumber(contact);
    checkWANumber(whatsappnumber);
    checkcountry(country);
    checkcity(city);



})



//form2 event listener

form2.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([degree, passyear]);
    checkdegree(degree)
    // checkdate(passyearid);


})


function checkdegree(input) {
    var letters = /^[A-Za-z]+$/;
    if (input.value.match(letters)) {
        showsuccess(input);
        next2.onclick = function () {
            form2.style.left = "-50%";
            form3.style.left = "50%"
            progress.style.width = "28%"
            window.scrollTo(100, 100)
        }
    } else {
        showerror(input, 'Degree is not Valid');
    }
}


form3.addEventListener('submit',function(e){
    e.preventDefault();
    next3.onclick = function () {
        form3.style.left = "-50%";
        form4.style.left = "50%"
        progress.style.width = "65%";
        window.scrollTo(100, 100)
    }
})


form4.addEventListener('submit',function(e){
    e.preventDefault();
    next4.onclick = function () {
        form4.style.left = "-50%"
        form5.style.left = "50%"
        progress.style.width = "76.5%"
        window.scrollTo(100, 100)
    }
})


form5.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([ref])
    checkLengthref(ref,8 ,100)
    checkref(ref)
})

function checkref(input) {
    var letters = /^[A-Za-z]+$/;
    if (input.value.match(letters)) {
        showsuccess(input);
        next5.onclick = function () {
            form5.style.left = "-50%"
            form6.style.left = "50%"
            progress.style.width = "88.5%"
            window.scrollTo(100, 100)
        }
    } else {
        showerror(input, 'Enter Valid Input');
    }
}

function checkLengthref(input, min, max) {
    if (input.value.length < min) {
        showerror(input, `${getfieldName(input)} must be atleast  ${min} characters`);
    } else if (input.value.length > max) {
        showerror(input, `${getfieldName(input)} must be less than ${max} characters`);
    } else {
        showsuccess(input);
        next5.onclick = function () {
            form5.style.left = "-50%"
            form6.style.left = "50%"
            progress.style.width = "88.5%"
            window.scrollTo(100, 100)
        }
    }
}


//hamburger

const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.center-nav>ul');
const navbar = document.querySelector('.navbar');
const centernav = document.querySelector('.center-nav');
const leftnav = document.querySelector('.left-nav');
const listnames = document.querySelector('.list-names');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navmenu.classList.toggle('active');
    navbar.classList.toggle('active');
    centernav.classList.toggle('active');
    leftnav.classList.toggle('active');
    listnames.classList.toggle('active');
})