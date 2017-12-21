import React from 'react'; 

export default class Range extends React.Component {
  constructor(props){
    super(props)
  }

  // componentDidMount() {
  //   // this.formInput.value = 2;
  //   // this.props.input.onChange 
  // }

  render() {

    return (
      <input type="range" value={this.props.input.value} min="1" max="5" className="slider" ref={input => this.formInput = input} onChange={this.props.input.onChange} />
    )
  }
}



