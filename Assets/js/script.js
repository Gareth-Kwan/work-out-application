const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a2a3b32e48mshcfe3303e61d0395p1e54b7jsn7fce9df6b268",
      "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
    },
  };
  var ulEl = document.querySelector('ul');
  fetch("https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=quadriceps", options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = data[i].name;
        ulEl.appendChild(listItem);
      }
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = data[i].muscle;
        ulEl.appendChild(listItem);
      }
    });