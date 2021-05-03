let req = ""
let query = ""
let results = ""
let pw = ""
let allUsers = []
let netID = ""
let allPasswords = []
let cjfNetid = "cjf07630"
let cjfPass = "gorams21"

login.onshow = function() {}

btnLogin.onclick = function() {
    netID = inptUsername.value
    pw = inptPassword.value
    //username and password are not blank
    if (netID == "") {
        NSB.MsgBox("Username cannot be blank.")
    } else if (pw == "") {
        NSB.MsgBox("Password cannot be blank.")
    } else {
        //Runs query to find user based on NetID
        query = "SELECT * FROM user WHERE net_id = '" + netID + "'"
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + cjfNetid + "&pass=" + cjfPass + "&database=375groupb1&query=" + query)
        if (req.status == 200) {//successful connection to database
            results = JSON.parse(req.responseText)
            if (results.length == 0) {//query did not return result
                NSB.MsgBox("User cannot be found.")
            } else {
                //successfully returned username 
                //runs query to find password based upon user entered password
                query = "SELECT password FROM user WHERE net_id = '" + netID + "'"
                req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + cjfNetid + "&pass=" + cjfPass + "&database=375groupb1&query=" + query)
                if (req.status == 200) {//successful connection to database
                    results = JSON.parse(req.responseText)
                    // Compare the password that got returned from the query to the user entered password.
                     if (pw == results) {
                       ChangeForm(genreSelect)
                    }
                    else {
                     NSB.MsgBox("Passwords do not match.")
                     }
                } else {
                    NSB.MsgBox(`Error: ${req.status}`)
                }
            }
        }
    }
}

login.onshow = function() {
      hmbrNav3.clear()
      hmbrNav3.addItem("Login")
      hmbrNav3.addItem("Registration")
      hmbrNav3.addItem("Select a Genre")
      hmbrNav3.addItem("Send us an email")
      hmbrNav3.addItem("Look up a specific movie")
}

hmbrNav3.onclick = function(s) {
      if (typeof(s) == "object") {
            return
      }
      switch (s) {
            case "Login":
                  ChangeForm(login)
                  break
            case "Select a Genre":
                  ChangeForm(genreSelect)
                  break
            case "Send us an email":
                  ChangeForm(emailapi)
                  break
            case "Registration":
                  ChangeForm(register)
                  break
            case "Look up a specific movie":
                  ChangeForm(movieapi)
                  break
      }
}