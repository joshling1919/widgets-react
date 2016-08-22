import React from 'react';

class Clock extends React.Component{
  constructor(){
    super();
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState({time: new Date()});
    }, 1000);
  }

  render(){
    return (
      <div>
        <div> clock is here</div>
        <div>{this.state.time.toTimeString()}</div>
      </div>
    );
  }

}


export default Clock;
