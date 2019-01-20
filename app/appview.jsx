var React = require("react");
var connect = require("react-redux").connect;
var actions = require("./actions.jsx");
 
class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

  return  <div>
              <p>
                 <label class="label">{this.props.text}</label>
                 <textarea class="textarea" placeholder="Ваш ответ" require></textarea>
              </p>
          </div>
  }
};


class MyForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {    
    return (
        <form class="form">
           <input class="input" placeholder="Ваше имя"/>                    
             {this.props.formText.map(item =>
                <Item key={item} text={item}  />
              )}           
           <p class="textRight">
            <button class="btn">Отправить</button>
           </p>
        </form>
      );
  }
};



 
class AppView extends React.Component {
    render() {
        return <div>
            <MyForm {...this.props} />           
    </div>
  }
};


function mapStateToProps(state) {
  return {
    formText: state.get("formText")
  };
}

 
module.exports = connect(mapStateToProps, actions)(AppView);
