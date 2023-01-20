const BASE_URL ="https://ecommce-be.herokuapp.com/ecomm/api/v1"
//variables
const loginForm = getElement
('loginForm')
const singupForm = getElement
('singupForm')
const showLoginBtn = getElement
('showLoginBtn')
const showSingupBtn = getElement
('showSingupBtn')
const loginUsername = getElement
('loginUsername')
const singupUsername = getElement
('singupUsername')
const signuppassword = getElement
('signuppassword')
const loginpassword = getElement
('loginpassword')
const loginBtn = getElement
('loginBtn')
const signupBtn = getElement
('signupBtn')
const signupEmail = getElement
('signupemail')
const authErrMsg = getElement
('authErrMsg')
const sccErrMsg = getElement
('sccErrMsg')
//event listener
showSignupBtn.addEventListener
('click', showSingup)
showloginupBtn.addEventListener
('click',showLogin)
signupBtn.addEventListener
('click',signupFn)
loginBtn.addEventListener
('click',loginFn)


//function

function showSingup(){
    singupForm.classList.remove
    ('d-none')
    loginForm.classList.add('d-none')
}
    function showLogin(){
        singupForm.classList.add
        ('d-none')
        loginForm.classList.remove('d-none')
    }
    
        function signupFn(){}
            function loginFn(){}
        
    

function getElement(id){
    return document.
    getElementById(id)
}