
function handleBlur (event) {
//Xử lý chuỗi fullname rổng
    if(event.target.name === 'fullName') {
        if(event.target.value.trim().length === 0) {
            // Thêm class invalid khi data input emty
            event.target.parentElement.classList.add('invalid')
            event.target.nextElementSibling.innerHTML = 'Vui lòng nhập trường này'
        } 
    }
//Xử lý chuỗi email rổng và nhập sai email
    if(event.target.name === 'email') {
        var pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        var email = event.target.value;
        if(email.match(pattern)) {
            event.target.parentElement.classList.remove('invalid')
            event.target.nextElementSibling.innerHTML= '';
        } else {
            event.target.parentElement.classList.add('invalid')
            event.target.nextElementSibling.innerHTML= 'Trường này phải là Email';
        } if(event.target.value.trim().length === 0){
            event.target.parentElement.classList.add('invalid')
            event.target.nextElementSibling.innerHTML = 'Vui lòng nhập trường này'
        }   
    }
//Xử lý phone rổng
    if(event.target.name === 'phone'){
        // số điện thoại quá 10 số
        if(event.target.value.trim().length === 10) {
        } else {
            event.target.parentElement.classList.add('invalid')
            event.target.nextElementSibling.innerHTML = 'Số điện thoại sai '
        }
        // số điện thoại bắt đầu bằng sô 0
        if(!event.target.value.startsWith(0)) {
            event.target.parentElement.classList.add('invalid')
            event.target.nextElementSibling.innerHTML = 'Số điện phải bắt đầu bằng số 0'
        } if (event.target.value.trim().length === 0) {
            event.target.parentElement.classList.add('invalid')
            event.target.nextElementSibling.innerHTML = 'Vui lòng nhập trường này'
        } 
        //format số khi nhập đúng
        if (event.target.value.length === 10) {
            var numberFormat = event.target.value.toString();
            event.target.value = formatPhoneNumber(numberFormat);
        }   
    }
//Xử lý birthday rổng
    if(event.target.name === 'birthday') {
        if(event.target.value.trim().length === 0) {
            // Thêm class invalid khi data input emty
            event.target.parentElement.classList.add('invalid')
            event.target.nextElementSibling.innerHTML = 'Vui lòng nhập trường này'
        } 
    }
//xử lý pass word 
    if(event.target.name === 'password') { 
        if(event.target.value.trim().length === 0) {
        // Thêm class invalid khi data input emty
        event.target.parentElement.classList.add('invalid')
        event.target.nextElementSibling.innerHTML = 'Vui lòng nhập trường này'
        } 
    }   
// check mk confirm rổng
    if(event.target.name === 'confirmpassword') { 
        if(event.target.value.trim().length === 0) {
            // Thêm class invalid khi data input emty
            event.target.parentElement.classList.add('invalid')
            event.target.nextElementSibling.innerHTML = 'Vui lòng nhập trường này'
            } 
    }
}

function handleInput(event) {
    //Xóa class .invalist trong fullname
    if(event.target.name === 'fullName') {
        event.target.value = titleCase(event.target.value);
        event.target.parentElement.classList.remove('invalid');
        event.target.nextElementSibling.innerHTML = '';
    }  
    //Xóa class invalid trong email
    if(event.target.name === 'email') {
        event.target.parentElement.classList.remove('invalid');
        event.target.nextElementSibling.innerHTML = '';
    }  
    //Xóa class invalid trong phone
    if(event.target.name === 'phone') {
        event.target.parentElement.classList.remove('invalid');
        event.target.nextElementSibling.innerHTML = ''; 
    }  
     //Xóa class invalid trong birthday
     if(event.target.name === 'birthday') {
        event.target.parentElement.classList.remove('invalid');
        event.target.nextElementSibling.innerHTML = '';
    }  
     //Xóa class invalid trong paswword
     if(event.target.name === 'password') {
        event.target.parentElement.classList.remove('invalid');
        event.target.nextElementSibling.innerHTML = '';
    }  

    //Xử lý passwword
if(event.target.name === 'password') {
  
    if(event.target.value.length < 8) {
        event.target.parentElement.classList.add("invalid");
        event.target.nextElementSibling.innerHTML = 'Mật khẩu phải trên 8 ký tự '
    } 
      var special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
      if(!event.target.value.match(special)) {  
        event.target.parentElement.classList.add("invalid");
        event.target.nextElementSibling.innerHTML = 'Mật khẩu phải có một ký tự đặt biêt'
        } 
    //Kiểm tra chữ thường
    var lowerCaseLetters = /[a-z]/g;
    if(!event.target.value.match(lowerCaseLetters)) {  
        event.target.parentElement.classList.add("invalid");
        event.target.nextElementSibling.innerHTML = 'Mật khẩu phải có một chữ thường'
    } 
    //Kiểm tra chữ hoa
    var upperCaseLetters = /[A-Z]/g;
    if(!event.target.value.match(upperCaseLetters)) {  
        event.target.parentElement.classList.add("invalid");
        event.target.nextElementSibling.innerHTML = 'Mật khẩu phải có một chữ hoa'
    } 
    var numbers = /[0-9]/g;
    if(!event.target.value.match(numbers)) {  
        event.target.parentElement.classList.add("invalid");
        event.target.nextElementSibling.innerHTML = 'Mật khẩu phải có một số '
    } 
}
//xử lý xóa confirmpass 
    if(event.target.name === 'confirmpassword') {
        event.target.parentElement.classList.remove('invalid');
        event.target.nextElementSibling.innerHTML = '';

        var pw1 = document.getElementById('password').value; 
        var pw2 = event.target.value
        if (pw1 != pw2) {
            event.target.parentElement.classList.add("invalid");
            event.target.nextElementSibling.innerHTML = 'Mật khẩu không giống nhau' 
        }else {
            return true;
        }
    }  
    
}

// Xử lý viết hoa chữ cái đầu
function titleCase(string) {
    //1. Tách các từ, cụm từ trong chuỗi ban đầu
    let sentence = string.toLowerCase().split(" ");
    //2. Tạo vòng lặp và viết hoa chữ cái đầu tiên của các từ, cụm từ trên
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    //3. Nối các từ, cụm từ đã xử lý ở trên và trả về kết quả
    return sentence.join(" ");
  }
// xử lý format sđt
function formatPhoneNumber(phoneNumberString) {
    let cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return match[1] + '-' + match[2] + '-' + match[3]
      };
    
      return null
  }
  //chỉ cho nhập số trong  text sđt 
  function isNumberKey(e) {
    var charCode = (e.which) ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

// Render 
    var textname = document.getElementById('text-fullname');
    var textemail = document.getElementById('text-email');
    var textphone = document.getElementById('text-phone');
    var textbirthday = document.getElementById('text-birthday');
    
function add () {
    var fullname = document.querySelector('#fullname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var birthday = document.getElementById('birthday').value;
   console.log(fullname,email,phone,birthday)
  

// show hình
   const img = document.querySelector('.img-ctl')
   const imgEnd = document.querySelector('.img-ctl.end')
   imgEnd.src = img.src
//show ra màn hình
  textname.innerHTML = fullname;
  textemail.innerHTML =  email;
  textphone.innerHTML = phone;
  textbirthday.innerHTML = birthday;

}  
//reset
 
function reset() {
    textname.innerHTML = '';
    textemail.innerHTML = '';
    textphone.innerHTML = '';
    textbirthday.innerHTML = ''; 

    document.querySelector('.form-item').classList.remove('invalid');
    document.querySelector('.form-message').innerHTML='';
    
    document.getElementById('fullname').value ='';
    document.getElementById('phone').value ='';
    document.getElementById('email').value ='';
    document.getElementById('birthday').value ='';
    document.getElementById('password').value ='';
    document.getElementById('confirmpassword').value ='';
    
    
}
// Nhấn Shift để add
window.addEventListener('keydown', click)
function click(e){
    if(e.keyCode == 16) {
        add();
    }
    // Nhấn delete để reset 
    if (e.keyCode == 46) {
        reset();
    }
}

// upload avt 
// let img = ""
window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('.img-ctl');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            img =  URL.createObjectURL(this.files[0]);
        }
    });
});

// chọn hình ảnh
const inputimgElement = document.querySelector('#inputimg')
function uploadAvt() {
    inputimgElement.click()
}




//   const reader = new FileReader();

//   function convertImg() {
//       const avatar = document.querySelector(".imgctl");
//       const imgLoad = document.getElementById("file").files[0];
//       reader.addEventListener("load", function () {
//           // convert image file to base64 string
//           avatar.src = reader.result;
//       }, false);
//           reader.readAsDataURL(imgLoad);
//   }














// function Validator (formSelect) {
//     function getParent (element,selector){
//         while (element.parentElement){
//             if(element.parentElement.matches(selector)) {
//                 return element.parentElement;
//             }
//             element = element.parentElement;
//         }
//     }

//     var validatorRules ={
//         required: function (value){
//             return value ? undefined : 'Vui lòng nhập trường này';
//         },
//         email: function (value) {
//             var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//             return regex.test(value) ? undefined : 'Vui lòng nhập email';
//         },
//         max: function(max) {
//             return function (value) {
//                 return value.length <= max ? undefined : `Vui lòng nhập ${max} ký tự`;
//             }
//         }
//     };
//     var formRules = {};
//     //lấy ra elm trong DOM theo  formslect
//     var formElement = document.querySelector(formSelect)

//     //chỉ sử lý khi có elm trong DOM
//     if(formElement) {
//         var inputs = formElement.querySelectorAll('[name][rules]');
        
//         for (var  input of inputs) {
//             var rules = input.getAttribute('rules').split('|');
//             for (var rule of rules) {
//                 var ruleInfo;
//                 var isRuleHasValue = rule.includes(':');
//                 if (isRuleHasValue) {
//                     ruleInfo = rule.split(':');
//                     rule = ruleInfo[0];
//                 }

//                 var ruleFunc = validatorRules[rule];
//                 if (isRuleHasValue) {
//                     ruleFunc = ruleFunc(ruleInfo);
//                 }
//                 // console.log (rule)
//                 if (Array.isArray(formRules[input.name])) {
//                     formRules[input.name].push(ruleFunc);
//                 } else {
//                      formRules[input.name] = [ruleFunc];

//                 }
                 
//             }
//             //lắng nghe
//             input.onblur = handleValidate;
            
//             //      
//         }
        
//         //hàm thực hiện validate
//         function handleValidate(event){
//             var rules = formRules[event.target.name];
//             var errorMessage;
//             rules.find(function (rule){
//                errorMessage = rule(event.target.value);
//                return errorMessage;
//             });
//             console.log (errorMessage)
//             // nếu có lỗi hiển thị ra ui
            
//             if (errorMessage){
//                var formItem = getParent(event.target, '.form-item');
               
                  
//                if (formItem) {
//                     var formError = formItem.querySelector('.style-input')
//                         formError.classList.add('invalid')
//                    var formMessage = formItem.querySelector('.form-message')

//                    if (formMessage) {
//                        formMessage.innerText = errorMessage;
//                    }
//                }

//             }
//         }
//     }
// }

