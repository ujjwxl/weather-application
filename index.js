    document.getElementById('cityForm').addEventListener('submit', function(event) {
        event.preventDefault();
      
        var cityName = document.getElementById('cityInput').value;
      
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName +  "&appid=8d18de20ce0f29d6c793a8d1f90babe7&units=metric")
            .then((response) =>response.json())
            .then((data) =>{
                const temp = data.main.temp;
                document.getElementById("temp").innerHTML=temp;
                document.getElementById("city").innerHTML=cityName;
    });
      });

      
