import React from "react"
import {connect} from 'react-redux';

export class TextBox extends React.Component {
  
      render() {

          return (
              <div className="textBox">
  {this.props.profile.username}{this.props.profile.score}
              </div>
          );
      }
  }

export default (connect()(TextBox));