document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField=document.getElementById('user-email')
   const email=emailField.value;
    // console.log(email);

    const passWord=document.getElementById('user-password')
    const  password=passWord.value;
    // console.log(password);

    if(email==='muktakona01@gmail.com' && password==="1222"){window.location.href = 'banking.html'}
    else{ alert("invalid");}
})