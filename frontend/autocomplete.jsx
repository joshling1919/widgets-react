import React from 'react';

class Autocomplete extends React.Component {
  constructor(props){
    super(props);
    this.updateList = this.updateList.bind(this);
    this.state = {names: this.props.names,
      search: ""};
  }

  updateList(e){
    e.preventDefault();
    let search = e.target.value;
    let currentNames = [];
    this.props.names.forEach(name => {
      let sliced = name.name.slice(0, search.length);
      if (sliced === search) {
        currentNames.push(name);
      }
    });
    this.setState({names: currentNames, search: search});
  }

  render() {

    let names = this.state.names.map((name, idx) => {
      return (
        <li key={idx} value={name.name}>{name.name}</li>
      );
    });
    console.log(names);
    return(
      <div>
        <input onChange={this.updateList} type="text" value={this.state.search}></input>
        <ul>
          {names}
        </ul>
      </div>
    );
  }
}

export default Autocomplete;
