function login() {

    let loginform = document.getElementById("login_form")

    let formDataJSON = JSON.stringify(Object.fromEntries(new FormData(loginform)));
    if(loggedin = true) { 
        console.log("user already logged in")
    }   else {
        fetch("/api/users/login", {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            body: formDataJSON,
        })
        .then(res => res.json())
        .then(res => {
            console.log('login request sent')
            alert(res)
            window.location.href = '/index.html'
        })
        .catch(err => {
            console.log('login request failed ' + err)
        })
    }
}

