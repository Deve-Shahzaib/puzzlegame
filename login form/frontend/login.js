var url = 'http://localhost:2022/user'
//////////http://localhost:2022/user 
let userList = []
function submit(){
    var objectUser ={}
    var mailid = document.getElementById('eMail').value
    objectUser.mail=mailid

    var password = document.getElementById('pass').value
    objectUser.Password=password

    if(objectUser.mail == ""){
        alert('enter your email')
    }
    if(objectUser.Password == ""){
        alert('enter your Password')
        return
    }
    
    $.post(url + '/isExistEmail', objectUser, function(data,status){
        var res = data
        if(res =="Invalid Password"){
            var eror=document.getElementById('error')
            eror.style.display ="block"
            return
        }
        if(res =='Invalid email '){
            var emailError=document.getElementById('emailError')
            emailError.style.display="block"
            return 
        }
        console.log(res)

       window.location = "./allLevels/index.html" 
    })
}   
//getAllData()

function getAllData(){
    $.get(url + '/getdata', function(data, status){

        userList=data
        console.log(userList)
    })
}