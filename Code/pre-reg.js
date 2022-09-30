function validasi(){
    var username=document.getElementById("username").value
    var email=document.getElementById("email").value
    var password=document.getElementById("pass").value
    var dob=document.getElementById("dob").valueAsDate
    var agreement=document.getElementById("agreement").checked
    var nat=document.getElementById("nat").value
    if(validasiEmail(email)==false){
        return
    }

    if(validasiUsername(username)==false){
        return
    }

    if(validasiPassword(password)==false){
        return
    }

    if(validasiAgreement(agreement)==false){
        return
    }
    
    if(validasiDate(dob)==false){
        return
    }
    if(validasiNation(nat)==false){
        return
    }
    alert("Pre-Registration telah berhasil dilakukan. Terima kasih atas partisipasinya!")
}

function validasiEmail(email){
    if(email[0]=='@'){
        alert("Tidak boleh ada @ di awal email!")
        return false
    }

    for(var i=0;i<email.length;i++){
        if(email[i]=='@' && email[i+1]=='.'){
            alert("Setelah @, tidak boleh ada .")
            return false
        }
    }

    if(email.endsWith(".")){
        alert("Akhir email tidak boleh '.' !")
        return false
    }

    if(!email.endsWith(".com") && !email.endsWith(".co.id")){
        alert("Email harus memiliki .com atau .co.id di akhir!")
        return false
    }
    return true
}

function validasiUsername(username){
    for(var i=0;i<username.length;i++){
        if(username[i]==" "){
            alert("Username tidak boleh memiliki spasi!")
            return false
        }
    }
    return true
}

function validasiPassword(password){
    if(password.length<8){
        alert("Password harus berjumlah 8 atau lebih karakter!")
        return false
    }
}

function validasiAgreement(agreement){
    if(agreement==false){
        alert("Agreement and Terms harus dicentang!")
        return false
    }
    return true
}

function validasiDate(dob){
    var today=new Date()
    if(dob.getFullYear()>today.getFullYear()){
        alert("Tahun yang dimasukkan tidak boleh lebih dari tahun sekarang!")
        return false
    }
    return true
}

function validasiNation(nat){
    if(nat.length===0){
        alert("Tolong isi nationality Anda!")
        return false
    }
    return true
}