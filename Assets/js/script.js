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
      var listItem = document.createElement("h4");
      listItem.textContent += data[i].name;
      var pEl = document.createElement("p");
      pEl.textContent += data[i].instructions;
      divEl = document.createElement("div");
      //create styling for this div element
      document.getElementById("upperBody").style.padding = "5px";
      divEl.appendChild(listItem);
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
      var listItem = document.createElement("li");
      listItem.textContent = data[i].name;
      backEl.appendChild(listItem);
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
      var listItem = document.createElement("li");
      listItem.textContent = data[i].name;
      absEl.appendChild(listItem);
    }
  });
