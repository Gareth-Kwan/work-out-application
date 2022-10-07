const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a2a3b32e48mshcfe3303e61d0395p1e54b7jsn7fce9df6b268",
    "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
  },
};
var upperBodyEl = document.querySelector(".upperBody");
fetch("https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=chest", options)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      var exerciseTitle = document.createElement("h4");
      exerciseTitle.textContent += data[i].name;
      var pEl = document.createElement("p");
      pEl.textContent += data[i].instructions;
      divEl = document.createElement("div");
      //create styling for this div element
      document.getElementById("upperBody").style.padding = "5px";
      divEl.appendChild(exerciseTitle);
      divEl.appendChild(pEl);
      upperBodyEl.appendChild(divEl);
      brEl = document.createElement("br");
      divEl.appendChild(brEl);
    }
  });

var backEl = document.querySelector(".back");
fetch("https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=middle_back", options)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      var exerciseTitle = document.createElement("h4");
      exerciseTitle.textContent = data[i].name;
      var pEl = document.createElement("p");
      pEl.textContent += data[i].instructions; 
      divEl = document.createElement("div");
      document.getElementById("upperBody").style.padding = "5px";
      divEl.appendChild(exerciseTitle);
      divEl.appendChild(pEl);
      upperBodyEl.appendChild(divEl);
      brEl = document.createElement("br");
      divEl.appendChild(brEl);
    }
  });

var absEl = document.querySelector(".abs");
fetch("https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=abdominals", options)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      var exerciseTitle = document.createElement("h4");
      exerciseTitle.textContent = data[i].name;
      var pEl = document.createElement("p");
      pEl.textContent += data[i].instructions;
      divEl = document.createElement("div");
      //Styled div element 
      document.getElementById("abs").style.padding = "5px";
      divEl.appendChild(exerciseTitle);
      divEl.appendChild(pEl);
      absEl.appendChild(divEl);
      brEl = document.createElement("br");
      divEl.appendChild(brEl);
    }
  });

  var lowerBodyEl = document.querySelector(".lowerBody");
  fetch("https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=glutes", options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var exerciseTitle = document.createElement("h4");
        exerciseTitle.textContent = data[i].name;
        var pEl = document.createElement("p");
        pEl.textContent += data[i].instructions;
        //Styled div element 
      document.getElementById("lowerBody").style.padding = "5px";
      divEl.appendChild(exerciseTitle);
      divEl.appendChild(pEl);
      lowerBodyEl.appendChild(divEl);
      brEl = document.createElement("br");
      divEl.appendChild(brEl);
      }
    });
  
    var hamstrings = document.querySelector(".lowerBody");
    fetch("https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=hamstrings", options)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          var exerciseTitle = document.createElement("h4");
          exerciseTitle.textContent = data[i].name;
          var pEl = document.createElement("p");
          pEl.textContent += data[i].instructions;
          //Styled div element 
        document.getElementById("lowerBody").style.padding = "5px";
        divEl.appendChild(exerciseTitle);
        divEl.appendChild(pEl);
        hamstrings.appendChild(divEl);
        brEl = document.createElement("br");
        divEl.appendChild(brEl);
        }
      });

      var quadriceps = document.querySelector(".lowerBody");
      fetch("https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=quadriceps", options)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          for (var i = 0; i < data.length; i++) {
            var exerciseTitle = document.createElement("h4");
            exerciseTitle.textContent = data[i].name;
            var pEl = document.createElement("p");
            pEl.textContent += data[i].instructions;
            //Styled div element 
          document.getElementById("lowerBody").style.padding = "5px";
          divEl.appendChild(exerciseTitle);
          divEl.appendChild(pEl);
          quadriceps.appendChild(divEl);
          brEl = document.createElement("br");
          divEl.appendChild(brEl);
          }
        });

        var cardioEl = document.querySelector(".cardio");
        fetch("https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=cardio", options)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
              var exerciseTitle = document.createElement("h4");
              exerciseTitle.textContent += data[i].name;
              var pEl = document.createElement("p");
              pEl.textContent += data[i].instructions;
              divEl = document.createElement("div");
              //
              document.getElementById("cardio").style.padding = "5px";
              divEl.appendChild(exerciseTitle);
              divEl.appendChild(pEl);
              cardioEl.appendChild(divEl);
              brEl = document.createElement("br");
              divEl.appendChild(brEl);
            }
         });

         var strengthEl = document.querySelector(".strength");
  fetch("https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=strength", options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var exerciseTitle = document.createElement("h4");
        exerciseTitle.textContent += data[i].name;
        var pEl = document.createElement("p");
        pEl.textContent += data[i].instructions;
        //create styling for this div element
        document.getElementById("strength").style.padding = "5px";
        divEl.appendChild(exerciseTitle);
        divEl.appendChild(pEl);
        strengthEl.appendChild(divEl);
        brEl = document.createElement("br");
        divEl.appendChild(brEl);
      }
    });
  
    var stretchingEl = document.querySelector(".stretching");
    fetch("https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=stretching", options)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          var exerciseTitle = document.createElement("h4");
          exerciseTitle.textContent = data[i].name;
          var pEl = document.createElement("p");
          pEl.textContent += data[i].instructions;
          divEl = document.createElement("div");
          //Styled div element 
        document.getElementById("stretching").style.padding = "5px";
        divEl.appendChild(exerciseTitle);
        divEl.appendChild(pEl);
        stretchingEl.appendChild(divEl);
        brEl = document.createElement("br");
        divEl.appendChild(brEl);
        }
      });