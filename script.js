const apikey = "&appid=5c6386cf51968d45e4992fdd3f8c14bb&units=metric";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const path = document.querySelector(".weather-img");
async function checkWeather(city) {
    // const response = await fetch(apiurl) ;
    const response = await fetch(apiurl + city + apikey);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {



        var data = await response.json();
        // console.log(`${data}`);
        console.log(data);


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";

        if (data.weather[0].main == "Clouds") {
            // document.querySelector(".weather image").src
            path.src = "images/clouds.png";
        }

        else if (data.weather[0].main == "Clear") {
            path.src = "images/clear.png";

        }
        else if (data.weather[0].main == "Rain") {
            path.src = "images/rain.png";

        }
        else if (data.weather[0].main == "Drizzle") {
            path.src = "images/drizzle.png";

        }
        else if (data.weather[0].main == "Mist") {
            path.src = "images/mist.png";

        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }

}
searchBtn.addEventListener("click", () => {

    checkWeather(searchBox.value);
})

