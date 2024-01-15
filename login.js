
function login(){
   let data=elogin.value
   if(data in localStorage)
   {
    let useregister=JSON.parse(localStorage.getItem(data))
    if(useregister.pswd==pslogin.value){
     
        alert('Login Successfully')
        window.location='welcome.html'
       }
       else{
        alert('Login failed! Wrong password')
       }
    }
    else{
        alert('Login failed! Wrong email address')
    }
 
    
}