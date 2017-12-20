import React from 'react'; 


export default function Range(props) {
  return (
    <input type="range" value={props.input.value} min="1" max="5" className="slider" onChange={props.input.onChange} />
  )
}
