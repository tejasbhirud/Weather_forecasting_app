import React from "react";
import "./styles.css";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0,
      lat: 0,
      long: 0,
      humidity: 0,
      wind: 0,
      feelsLike: 0,
      city: "Pune",
      weatherType: 0
    };
  }
  componentDidMount() {
    this.getData("Pune");
  }

  getData = (value) => {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        value +
        "&appid=38a5b56b0866414c782c2c64f4861e9c"
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          temperature: json.list[0].main.temp,
          humidity: json.list[0].main.humidity,
          feelsLike: json.list[0].main.feels_like,
          wind: json.list[0].wind.speed,
          lat: json.city.coord.lat,
          long: json.city.coord.lon,
          city: value,
          weatherType: json.list[0].weather[0].main
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // changeCity = (value) => {
  //   this.setState({
  //     city: value
  //   });
  // };
  render() {
    return (
      <div>
        <h1>WEATHER APP</h1>
        <div className="city" onClick={() => this.getData("Pune")}>
          Pune{" "}
        </div>
        <div className="city" onClick={() => this.getData("Delhi")}>
          Delhi{" "}
        </div>
        <div className="city" onClick={() => this.getData("Mumbai")}>
          Mumbai{" "}
        </div>

        <div className="container">
          <div className="weather">
            {/*Weather component*/}
            <div className="container-inner">
              {/*left component*/}
              <div className="content-inner left-side">
                <span className="primary"> {this.state.city}</span>
                <br />
                <span className="secondary">as of {new Date().toString()}</span>
                <br />
                <br />
                <span className="temp"> {this.state.temperature}</span>
                <br />
                <br />
                <span className="primary">{this.state.weatherType}</span>
                <br />

                <span className="secondary">
                  42% chance of rain until 12:30
                </span>
                <br />
              </div>
              {/*right component*/}
              <div className="content-inner right-side">
                <span className="primary"> {this.state.humidity}</span>
                <br />
                <span className="secondary">Humidity</span>
                <br />
                <br />
                <span className="primary"> {this.state.feelsLike}</span>
                <br />
                <span className="secondary">Feels Like</span>
                <br />
                <br />
                <span className="primary">{this.state.wind}</span>
                <br />

                <span className="secondary">Wind</span>
                <br />
                <br />
              </div>
            </div>
          </div>

          <div className="details">
            {/*Details component*/}
            <div className="container-inner">
              <br />
              <br />
              <br />

              {/*left component*/}
              <div className="content-inner left-side">
                <span className="primary">
                  {" "}
                  {this.state.lat},{this.state.long}
                </span>
                <br />
                <span className="secondary">Location</span>
                <br />
                <br />
                <br />
                <br />
                <br />

                <span className="primary">Asia/Kolkata</span>
                <br />

                <span className="secondary">Time zone</span>
                <br />
              </div>
              {/*right component*/}
              <div className="content-inner right-side">
                <span className="primary"> 15-10-2021 12:11</span>
                <br />
                <span className="secondary">Local Time</span>
                <br />
                <br />
                <br />
                <br />
                <span className="primary"> 12.983, 77.583</span>
                <br />
                <span className="secondary">Co-ordinates</span>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
