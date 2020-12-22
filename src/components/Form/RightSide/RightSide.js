export const RightSide = props =>{ 
  return (
  <div className="right-side left-side"onClick={props.onClick}>
    <div className="inner-container">
      <div className="text">{props.current}</div>
    </div>
  </div>
  ) 
}