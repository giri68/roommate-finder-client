import React from 'react'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Slider from 'material-ui/Slider';

/**
 * By default, the slider is continuous.
 * The `step` property causes the slider to move in discrete increments.
 */
const Range = props => {
  console.log("HERE ARE PROPS", props)
  return <MuiThemeProvider>
    <Slider {...props.input} step={0.10} value={0.5} />
  </MuiThemeProvider>
};

export default Range;


// export default class Range extends React.Component {
//   constructor(props){
//     super(props)
//   }

//   // componentDidMount() {
//   //   // this.formInput.value = 2;
//   //   // this.props.input.onChange 
//   // }

//   render() {

//     return (
//       <input type="range" value={this.props.input.value} min="1" max="5" className="slider" ref={input => this.formInput = input} onChange={this.props.input.onChange} />
//     )
//   }
// }



