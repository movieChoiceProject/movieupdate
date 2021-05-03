

emailapi.onshow = function() {
      hmbrNav1.clear()
      hmbrNav1.addItem("Login")
      hmbrNav1.addItem("Registration")
      hmbrNav1.addItem("Select a Genre")
      hmbrNav1.addItem("Send us an email")
      hmbrNav1.addItem("Look up a movie")
}
hmbrNav1.onclick = function(s) {
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
            case "Look up a movie":
                  ChangeForm(movieapi)
                  break
      }
}