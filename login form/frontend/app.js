var url = 'http://localhost:2022/user'

let userList = []
function signup() {
	var objectUser = {}
	var username=document.getElementById('userName').value
	objectUser.UserName=username
	var mail = document.getElementById('gmail').value
	objectUser.mail = mail

	var password = document.getElementById('pass').value
	objectUser.Password = password

	var comfirmPass = document.getElementById('comfirmPass').value
	objectUser.comfirmPassword=comfirmPass
    if(objectUser.UserName == ""){
        alert('enter your username')
    }
    if(objectUser.mail == ""){
        alert('enter your emailAddress')
        return
    }
	
    if(objectUser.Password == ""){
        alert('enter your Password')
    }
    if(objectUser.comfirmPassword == ""){
        alert('enter your confirmPassword')
        return
    }
	if(objectUser.Password == objectUser.comfirmPassword ){
		window.location = "login.html"
	}
	else{
		alert('Your Password is not Same')
		return
	}
	
	// if(username == ""){
	// 	setErrormsg(username, 'username canot be blank')
	// } else if(username.length < 2){
	// 	setErrormsg(username, 'username minimum 3 char')
	// }else{
	// 	setSuccesMsg(username)
	// }

	// if(username == ""){
	// 	document.getElementById('userName').innerHTML =" ** Please Fill the UserName Field";
	// 	return false;
	// }


	$.post(url + '/addUser', objectUser, function (data, status) {
		var res = data
		console.log(res)
		// getAllData()
	})

	
}

getAllData()
	function getAllData() {
		$.get(url + '/getdata', function (data, status) {
			console.log('Fired')


			userList = data
			console.log(userList)
		})
	}



