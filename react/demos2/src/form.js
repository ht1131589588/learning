import React from 'react';
export class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selector: 'coconut',
      username:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    console.log(event.target.value)
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked:target.value;
    const type = target.name;

    this.setState({
      [type]:event.target.value
    });
  }

  handleSubmit(event){
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {/* Name: */}
          {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
          {/* <textarea value={this.state.value} onChange={this.handleChange}></textarea> */}
          <select name="selector" value={this.state.selector} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br />
        <div>
          <input name="username" value={this.state.username} onChange={this.handleChange}/>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}