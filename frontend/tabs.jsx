import React from 'react';

class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0
    };
  }

  displayContent(idx) {
    this.setState({index: idx});
  }

  render(){
    let tabs = this.props.data.map((tab, idx) => {
      return (
        <li key={tab.content}>
          <h1 key={tab.title} onClick={this.displayContent.bind(this, idx)}>{tab.title}</h1>
        </li>
      );
    });

    return(
      <div>
        <ul>
          {tabs}
          <article>{this.props.data[this.state.index].content}</article>
        </ul>
      </div>
    );
  }
}

export default Tabs;
