

//form1
const form1 = document.getElementById('form1');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const contact = document.getElementById('contact');
const email = document.getElementById('email');
const country = document.getElementById('country');
const city = document.getElementById('city');
// const whatsappnumber = document.getElementById('whatsappnumber');
const male = document.getElementById('male');
const female = document.getElementById('female');
const other = document.getElementById('other');
const gender = document.getElementById('gender');


//form2
const form2 = document.getElementById("form2");
const degree = document.getElementById('degree');
const yearpicker = document.getElementById('yearpicker');


//form5
const form5 = document.getElementById("form5")
const ref = document.getElementById('reference')



const form6 = document.getElementById("form6")
const tnc = document.getElementById('t&C')
const fieldset = document.getElementById('fieldset')

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

// var progress = document.getElementById("progress")



//progress
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let max = 6;
let current = 1;




// bullet[current - 1].classList.add("active");
// bullet[current - 1].classList.add("active");
// current += 1;








//backbtn

back1.onclick = function () {
    form2.style.left = "150%"
    form1.style.left = "50%"
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;

}

back2.onclick = function () {
    form3.style.left = "150%"
    form2.style.left = "50%"
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
}

back3.onclick = function () {
    form4.style.left = "150%"
    form3.style.left = "50%"
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
}
back4.onclick = function () {
    form5.style.left = "150%"
    form4.style.left = "50%"
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
}
back5.onclick = function () {
    form6.style.left = "150%"
    form5.style.left = "50%"
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
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
    } else if (!re.test(input.value.trim())) {
        showerror(input, 'Email is required');
    } else {
        showerror(input, 'Email is required')
    }
}

// $(function(){
//     $("#passdate").passdate({dateFormat: 'yy'});
// })


//check required

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showerror(input, `${getfieldName(input)} is Required`);
        } else {
            next1.onclick = function () {
                form1.style.left = "-50%";
                form2.style.left = "50%"
                // progress.style.width = "28%"
                bullet[current - 1].classList.add("active");
                progressCheck[current - 1].classList.add("active");
                progressText[current - 1].classList.add("active");
                current += 1;
                window.scrollTo(100, 100)
            }
            return true;
        }
    });
}

//check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showerror(input, `${getfieldName(input)} is required`);
    } else if (input.value.length > max) {
        showerror(input, `${getfieldName(input)} is required`);
    } else {
        showsuccess(input);
        next1.onclick = function () {
            form1.style.left = "-50%";
            form2.style.left = "50%"
            // progress.style.width = "28%"
            bullet[current - 1].classList.add("active");
            progressCheck[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
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
            // progress.style.width = "28%"
            bullet[current - 1].classList.add("active");
            progressCheck[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
            window.scrollTo(100, 100)
        }
        return true;
    } else if (input.value > 10) {
        showerror(input, 'Enter a valid Contact number');
    } else {
        showerror(input, 'Contact number is required')
    }

}

// function checkWANumber(input) {
//     var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
//     if (re.test(input.value.trim())) {
//         showsuccess(input);
//         next1.onclick = function () {
//             form1.style.left = "-50%";
//             form2.style.left = "50%"
//             bullet[current - 1].classList.add("active");
//             progressCheck[current - 1].classList.add("active");
//             progressText[current - 1].classList.add("active");
//             current += 1;
//             window.scrollTo(100, 100)
//         }
//         return true;
//     } else {
//         showerror(input, 'WhatsApp Number is  required');
//     }

// }

function checkcountry() {
    var country = document.getElementById("country");
    if (country.selectedIndex == 0) {
        showerror(country, 'Country is required')
    } else if (country.selectedIndex > 0) {
        showerror(country, null)
        document.getElementById("country").style.borderColor = "green"

    } else {
        showerror(country, 'Country is required')

    }

    // let countryops = document.getElementsByClassName('country-ops');

    // for(let i=0;i<countryops.length;i++){
    //     countryops[i].onclick = function(){
    //         let target = document.body;
    //         target.style.backgroundColor='green';

    //     }
    // }
}

// function resettored(){
//     var resetbtn = document.getElementById('reset');
//     if(resetbtn.clicked==true){
//         showerror(input);
//     }else{
//         return false;
//     }
// }

function checkcity(input) {
    var letters = /^[A-Za-z]+$/;
    if (input.value.match(letters)) {
        showsuccess(input);
        next1.onclick = function () {
            form1.style.left = "-50%";
            form2.style.left = "50%"
            // progress.style.width = "28%"
            bullet[current - 1].classList.add("active");
            progressCheck[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
            window.scrollTo(100, 100)
        }
        return true;
    } else {
        showerror(input, 'City is required');
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
    checkRequired([firstname, lastname, contact, email, country, city]);
    checkLength(firstname, 1, 15);
    checkLength(lastname, 1, 15);
    checkEmail(email);
    checkNumber(contact);
    checkcountry(country);
    checkcity(city);


    // function form1_error(){
    //     const formcontrol = document.querySelector('.form-control');
    //     if(formcontrol.classList.contains('error')){
    //         console.log('form 1 contains errors')
    //     }
    // }


    //email reinitiate
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showsuccess(input);
        return true;
    } else if (!re.test(input.value.trim())) {
        showerror(input, 'Email is not Valid');
    } else {
        showerror(input, 'Email is required')
    }



})

// if(form1.formcontrol.classList.contains("error")){
//     form1.preventDefault();
//     return false;
// }





//form2 event listener

form2.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([degree, yearpicker]);
    checkdegree(degree)
    chkyearpicker(yearpicker);


})


function checkdegree(input) {
    var letters = /^[A-Za-z]+$/;
    if (input.value.match(letters)) {
        showsuccess(input);
        next2.onclick = function () {
            form2.style.left = "-50%";
            form3.style.left = "50%"
            bullet[current - 1].classList.add("active");
            progressCheck[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
            // progress.style.width = "50%"
            window.scrollTo(100, 100)
        }
    } else {
        showerror(input, 'Degree is required');
    }
}

function chkyearpicker() {
    var yearpicker = document.getElementById("yearpicker");
    if (yearpicker.selectedIndex == 0) {
        showerror(yearpicker, 'Pass year is required')
    } else if (yearpicker.selectedIndex > 0) {
        showerror(yearpicker, null)
        document.getElementById("yearpicker").style.borderColor = "green"
        
    } else if(yearpicker.selectedIndex==null) {
        showerror(yearpicker, 'Pass year is required')
        document.getElementById("yearpicker").style.borderColor = "#BC383E"
        
    }else{
        document.getElementById("yearpicker").style.borderColor = "#BC383E"

    }

}




form3.addEventListener('submit', function (e) {
    e.preventDefault();
    next3.onclick = function () {
        form3.style.left = "-50%";
        form4.style.left = "50%"
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
        // progress.style.width = "65%";
        window.scrollTo(100, 100)
    }
})


form4.addEventListener('submit', function (e) {
    e.preventDefault();
    next4.onclick = function () {
        form4.style.left = "-50%"
        form5.style.left = "50%"
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
        // progress.style.width = "76.5%"
        window.scrollTo(100, 100)
    }

})

function enabledisableTB() {
    var other = document.getElementById("otherlan");
    var otherlan = document.getElementById("otherlang");
    otherlan.disabled = other.checked ? false : true;
    otherlan.value = "";

    if (!otherlan.disabled) {
        otherlan.focus();
    }
}

function enabledisableTB2() {
    var other2 = document.getElementById("otherlan2");
    var otherlan2 = document.getElementById("otherlang2");
    otherlan2.disabled = other2.checked ? false : true;
    otherlan2.value = "";

    if (!otherlan2.disabled) {
        otherlan2.focus();
    }
}



// const smallgender = document.getElementById('small-gender');
function selectedgender() {


    if (document.getElementById('male').checked) {
        document.getElementById('gender').style.borderColor = 'green';
        document.getElementById('small-gender').style.display = "none";
    } else if (document.getElementById('female').checked) {
        document.getElementById('gender').style.borderColor = 'green';
        document.getElementById('small-gender').style.display = "none";
    } else if (document.getElementById('other').checked) {
        document.getElementById('gender').style.borderColor = 'green';
        document.getElementById('small-gender').style.display = "none";
    } else {
        document.getElementById('gender').style.borderColor = '#BC383E';
        document.getElementById('small-gender').style.display = "inline";

    }


    let genderops = document.getElementsByName('genderr');

    for (let i = 0; i < genderops.length; i++) {
        genderops[i].onclick = function () {
            let target = document.getElementById('gender');
            let target2 = document.getElementById('small-gender');
            target.style.borderColor = 'green';
            target2.style.display = 'none';

        }
    }
}


// var selected = document.querySelector('input[name="gender"]:checked');
// if (selected) {
//     document.getElementById('gender').style.borderColor = 'green';
//     smallgender.style.display="none";
// } else if(document.getElementById('male').checked){
//     document.getElementById('gender').style.borderColor = 'green';

// }else if(document.getElementById('male').checked){
//     document.getElementById('gender').style.borderColor = 'green';
// }else if(document.getElementById('other').checked){
//     document.getElementById('gender').style.borderColor = 'green';
// }else{
//     document.getElementById('gender').style.borderColor = '#BC383E';
//     smallgender.style.display="inline";
// }



form5.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([ref])
    checkLengthref(ref, 8, 100)
    checkref(ref)
})

function checkref(input) {
    var letters = /^[A-Za-z]+$/;
    if (input.value.match(letters)) {
        showsuccess(input);
        next5.onclick = function () {
            form5.style.left = "-50%"
            form6.style.left = "50%"
            bullet[current - 1].classList.add("active");
            progressCheck[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
            // progress.style.width = "88.5%"
            window.scrollTo(100, 100)
        }
    } else {
        input.preventDefault();
        showerror(input, 'Reference is required');
    }
}

function checkLengthref(input, min, max) {
    if (input.value.length < min) {
        showerror(input, `${getfieldName(input)} must be atleast  ${min} characters`);
        input.preventDefault();
    } else if (input.value.length > max) {
        showerror(input, `${getfieldName(input)} must be less than ${max} characters`);
        input.preventDefault();
    } else {
        showsuccess(input);
        next5.onclick = function () {
            form5.style.left = "-50%"
            form6.style.left = "50%"
            bullet[current - 1].classList.add("active");
            progressCheck[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
            // progress.style.width = "88.5%"
            window.scrollTo(100, 100)
        }
    }
}

form6.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([tnc]);
    checktnc(tnc);

    function checktnc(input) {

        if (input.checked) {
            fieldset.style.borderColor = 'green';
            submit.onclick = function () {
                setTimeout(function () {
                    alert("submitted successfully")
                    location.reload();
                }, 1000)
                bullet[current - 1].classList.add("active");
                progressCheck[current - 1].classList.add("active");
                progressText[current - 1].classList.add("active");
                current += 1;
            }
        } else if (!input.checked) {
            submit.onclick = function () {
                e.preventDefault();
                fieldset.style.borderColor = '#BC383E';
                // progressCheck[current - 1].classList.remove("active");
                // progressText[current - 1].classList.remove("active");
                bullet[current - 1].classList.remove("active");

            }
            fieldset.style.borderColor = '#BC383E';
            // progressCheck[current - 1].classList.remove("active");
            // progressText[current - 1].classList.remove("active");
            bullet[current - 1].classList.remove("active");
        } else {
            e.preventDefault();
            fieldset.style.borderColor = '#BC383E';
            // progressCheck[current - 1].classList.remove("active");
            // progressText[current - 1].classList.remove("active");
            bullet[current - 1].classList.remove("active");
        }

        tnc.addEventListener('change', () => {
            e.preventDefault();
            checktnc(input)
            if (input.checked) {
                fieldset.style.borderColor = 'green';
                bullet[current - 1].classList.add("active");
                progressCheck[current - 1].classList.add("active");
                progressText[current - 1].classList.add("active");
                current += 1;
                submit.onclick = function () {
                    setTimeout(function () {
                        bullet[current - 1].classList.add("active");
                        progressCheck[current - 1].classList.add("active");
                        progressText[current - 1].classList.add("active");
                        current += 1;
                    })
                }
            } else if (!input.checked) {
                submit.onclick = function () {
                    e.preventDefault();
                    fieldset.style.borderColor = '#BC383E';
                    // progressCheck[current - 1].classList.remove("active");
                    // progressText[current - 1].classList.remove("active");
                    bullet[current - 1].classList.remove("active");
                }
                fieldset.style.borderColor = '#BC383E';
                // progressCheck[current - 1].classList.remove("active");
                // progressText[current - 1].classList.remove("active");
                bullet[current - 1].classList.remove("active");
            } else {
                e.preventDefault();
                fieldset.style.borderColor = '#BC383E';
            }


        })
        bullet[current - 1].classList.remove("active");
        // fieldset.style.borderColor = '#BC383E';
    }

    // location.reload();
})


//topview

const topview = document.querySelector(".topview");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topview.classList.add("active");
    } else {
        topview.classList.remove("active");
    }
})



// function checkRequired(inputArr) {
//     inputArr.forEach(function (input) {
//         if (input.value.trim() === '') {
//             showerror(input, `${getfieldName(input)} is Required`);
//         }else{
// submit.onclick = function(){
//     setTimeout(function(){
//         alert("submitted successfully")
//         location.reload();
//     })
// }
//         }
//     });
// }


// form6.addEventListener('submit',function(){
//     e.preventDefault();
//     submit.onclick = function(){
//         setTimeout(function(){
//             alert("submitted successfully")
//             location.reload();
//         })
//     }
// })


//hamburger removed

// const hamburger = document.querySelector('.hamburger');
// const navmenu = document.querySelector('.center-nav>ul');
// const navbar = document.querySelector('.navbar');
// const centernav = document.querySelector('.center-nav');
// const leftnav = document.querySelector('.left-nav');
// const listnames = document.querySelector('.list-names');

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     navmenu.classList.toggle('active');
//     navbar.classList.toggle('active');
//     centernav.classList.toggle('active');
//     leftnav.classList.toggle('active');
//     listnames.classList.toggle('active');
// })