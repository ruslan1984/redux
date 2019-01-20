var Map = require("immutable").Map;
 
var reducer = function(state = Map(), action) {
  switch (action.type) {
    case "SET_STATE":
        return state.merge(action.state);   
    case "CLICK_BUTTON1":
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://u927129.s07.wh1.su/restapi/tests/frontend/', false);      
        xhr.send();      
        if (xhr.status != 200) {
          alert( xhr.status + ': ' + xhr.statusText ); 
          return false;
        } else {        
          var d= JSON.parse(xhr.responseText);
          return state.update("formText", (formText) => d);      
        }
     case "CLICK_BUTTON2":
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://u927129.s07.wh1.su/restapi/tests/backend/', false);      
        xhr.send();      
        if (xhr.status != 200) {
          alert( xhr.status + ': ' + xhr.statusText ); 
          return false;
        } else {        
        var d= JSON.parse(xhr.responseText);
        return state.update("formText", (formText) => d);      
     }
  }
  return state;
}
module.exports = reducer;