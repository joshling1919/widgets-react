import React from 'react';

class Weather extends React.Component{
  constructor(){
    super();
    this.state = {
      latitude: "",
      longitude: "",
      description: '',
      temperature: '',
      city: ''
    };
  }

  formatTemperature(kelvin) {
    return (kelvin - 273) * 1.8 + 32;
  }

  setDescription(message) {
    let description = JSON.parse(message.target.response).weather[0].description;
    let city = (JSON.parse(message.target.response).name);
    let temperature = this.formatTemperature(JSON.parse(message.target.response).main.temp);
    this.setState({description: description, city: city, temperature: temperature});
  }

  getWeather(){
    const request = new XMLHttpRequest();
    request.open('GET',
    `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=645c5d39c7603f17e23fcaffcea1a3c1`,
    true);

    request.onload = this.setDescription.bind(this);


    //  message => {
    //   if (request.status === 200) {
    //     this.setDescription.bind(this, message);
    //   } else {
    //     console.log("wasn't 200");
    //   }
    // };

    request.onerror = message => {
      console.log(message);
    };
    request.send();
  }

  setPosition(position){
    this.setState({latitude: position.coords.latitude,
      longitude: position.coords.longitude}, () => {
        this.getWeather();
      });
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
  }


  render(){
    return (
      <div>
        <ul>
          <li>{this.state.city}</li>
          <li>{this.state.temperature}</li>
          <li>{this.state.description}</li>
        </ul>
      </div>
    );
  }

}


export default Weather;
