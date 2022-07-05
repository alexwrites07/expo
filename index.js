 document.getElementById("login-form").addEventListener("submit",(event)=>{
     event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("hi") 
    }
})

function login(){
    const email = document.getElementById("username").value
    const password = document.getElementById("password").value
      firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        alert("Logged In Successfully");
    })
   
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
}

function signUp(){
    const email = document.getElementById("username").value
    const password = document.getElementById("password").value
  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        alert("Signed Up Successfully");
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}

function forgotPass(){
    const email = document.getElementById("username").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}