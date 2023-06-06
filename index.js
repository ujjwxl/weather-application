
// fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=8d18de20ce0f29d6c793a8d1f90babe7&units=metric")
//     .then((response) =>response.json())
//     .then((data) =>{
//         const temp = data.main.temp;
//         document.getElementById("temp").innerHTML=temp;
//     });

    document.getElementById('cityForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
      
        // Get the city name value from the input field
        var cityName = document.getElementById('cityInput').value;
      
        // Pass the city name to your desired function or perform further operations
        // yourFunction(cityName);
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName +  "&appid=8d18de20ce0f29d6c793a8d1f90babe7&units=metric")
            .then((response) =>response.json())
            .then((data) =>{
                const temp = data.main.temp;
                document.getElementById("temp").innerHTML=temp;
                document.getElementById("city").innerHTML=cityName;
    });
      });

      