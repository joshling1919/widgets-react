import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';
// import WeatherClock from "./weatherClock";
import Autocomplete from './autocomplete';

class Widgets extends React.Component {

  render() {
    return(
      <div>
        <Tabs data={[{title: "one", content:"I am the first"}, {title: "two", content: "Second pane here"}, {title: "three", content: "Third pane here"}]}/>
        <Autocomplete names={[
                              {name: "Tom"},
                              {name: "Dick"},
                              {name: "Harry"},
                              {name: "Tony"},
                              {name: "Nye"}
                            ]}
        />
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root");
  ReactDOM.render(<Widgets/>, root);
});
