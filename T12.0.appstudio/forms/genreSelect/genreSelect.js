let elbNetID = "elb22116"
let elbPw = "cozmox-5jibsI-sethyg"
let genres = ""
let movies = ""
let genreList = ["Science Fiction", "Fantasy", "Documentary", "Action"]
let movieList = []

genreSelect.onshow = function() {
      selGenre.clear()
}

selGenre.onclick = function() {
      for (let y = 0; y < genreList.length; y++) {
            selGenre.addItem(genreList[y])
      }
}

selGenre.onchange = function() {
      chkMovies.clear()
      let chosenGenre = selGenre.value

      movies = "SELECT `title`, `yearProduced` FROM movies WHERE genre='" + chosenGenre + "';"
      sHost = "host=ormond.creighton.edu&user=" + elbNetID + "&pass=" + elbPw + "&database=375groupb1&query=" + movies
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", sHost)
      if (req1.status == 200) {
            let list = req1.responseText
            console.log(list)
            let curMovie = ""
            for (i = 0; i < list.length; i++) {
                  if ((list[i] == "," || list[i] == "]") && list[i + 1] == "]") {
                        movieList += curMovie
                        i += 1
                        curMovie = ""
                  } else {
                        curMovie += list[i]
                  }

            }
            console.log(movieList)
            for (i = 0; i < movieList.length; i++) {
                  chkMovies.addItem(movieList[i])
            }
      } else {
            NSB.MsgBox(`Error: ${req.status}`)
      }
}

genreSelect.onshow = function() {
      hmbrNav2.clear()
      hmbrNav2.addItem("Login")
      hmbrNav2.addItem("Registration")
      hmbrNav2.addItem("Select a Genre")
      hmbrNav2.addItem("Send us an email")
      hmbrNav2.addItem("Look up a specific movie")
}


hmbrNav2.onclick = function(s) {
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