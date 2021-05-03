let movie_enter = ''
let requestapi = "http://www.omdbapi.com/?t=" + movie_enter + "&apikey=7c82f582"

function onXHRLoad() {
    let message = ""
    let apiData = JSON.parse(this.responseText)
    

    message = message + "Release Date: "+ apiData.Released + "\n"
    message = message + "\nRuntime: " + apiData.Runtime + "\n"
    message = message + "\nGenre: " + apiData.Genre + "\n"
    message = message + "\nDirector: " + apiData.Director + "\n"
    message = message + "\nActors: " + apiData.Actors + "\n"
    message = message + "\nPlot: " + apiData.Plot
    
    txt.value = message
    imgPost.src = apiData.Poster
    }

btn.onclick=function() {
  movie_enter = inpt.value
  requestURL = "http://www.omdbapi.com/?t=" + movie_enter + "&apikey=7c82f582"
  callAPI(requestURL)
  }
  
function callAPI(requestURL) {
    var xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'https://cors.bridged.cc/' + requestURL)
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
    
}



movieapi.onshow = function() {
      hmbrNav5.clear()
      hmbrNav5.addItem("Login")
      hmbrNav5.addItem("Registration")
      hmbrNav5.addItem("Send us an email")
      hmbrNav5.addItem("Look up a movie")
      hmbrNav5.addItem("Select movie types you want")
}

hmbrNav5.onclick = function(s) {
      if (typeof(s) == "object") {
            return
      }
      switch (s) {
            case "Login":
                  ChangeForm(login)
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
            case "Select movie types you want":
                  ChangeForm(genreSelect)
                  break
            
      }
}
