import React from 'react'; 


export default class Range extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <input type="range" value={this.props.input.value} min="1" max="5" className="slider" onChange={this.props.input.onChange} />
    )
  }

}
