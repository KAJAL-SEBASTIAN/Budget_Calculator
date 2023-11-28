function register(){
    const useregister={
        name:usname.value,
        emailadd:email.value,
        pswd:pswdreg.value
    }

    if(useregister.name=="" || useregister.emailadd=="" || useregister.pswd==""){
        alert('Please enter full details')
    }
    else{
        if(useregister.emailadd in localStorage){
      alert('User already exists')
        }
        else{
            localStorage.setItem(useregister.emailadd,JSON.stringify(useregister))
            alert('User details added successfully')
            window.location='./login.html'
        }
    }

}