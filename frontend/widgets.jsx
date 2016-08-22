import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';
import WeatherClock from "./weatherClock";

class Widgets extends React.Component {

  render() {
    return(
      <div>
        <Tabs data={[{title: "one", content:"I am the first"}, {title: "two", content: "Second pane here"}, {title: "three", content: "Third pane here"}]}/>
        <WeatherClock/>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root");
  ReactDOM.render(<Widgets/>, root);
});
