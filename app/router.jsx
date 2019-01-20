var React = require("react");
var connect = require("react-redux").connect;
var actions = require("./actions.jsx");


class Button1 extends React.Component { 
    onClick(){ 
      return this.props.onClick1();  
    }
    render() {
      return <button class="btn front" onClick = {this.onClick.bind(this)}>Frontend</button>
    }
};
class Button2 extends React.Component { 
    onClick(){
      return this.props.onClick2();        
    }
    render() {
      return <button class="btn back" onClick = {this.onClick.bind(this)}>Backend</button>
  }
};

class Router1 extends React.Component {
  render() {      
     return  <div>
        <Button1 onClick1 = {this.props.click1}/>
        <Button2 onClick2  = {this.props.click2}/>                
      </div>
    
  }
}

function mapStateToProps(state) {
  return {
    formText: state.get("formText")
  };
}

 
module.exports = connect(mapStateToProps, actions)(Router1);