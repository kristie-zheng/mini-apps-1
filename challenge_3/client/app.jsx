// var connection = require('./connection');

//class App overall
//maybe we need to make it a component like the rest of them
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div> <h1> Placeholder text here </h1> </div>);
  }
}
//form1 component
var form1 = (props) => {
  return (
    //insert form fields here
    <div>
    <form class= "accountInfo">
      First Name: <br> </br>
      <input type ="text" class= "firstName"> </input> <br> </br> 
      Last Name: <br></br>
      <input type ="text" class= "lastName"> </input><br> </br>
      Email: <br></br>
      <input type ="text" class= "email"> </input><br> </br>
      Password: <br></br>
      <input type ="text" class= "password"> </input><br> </br>
    </form>
    <button type = "button" class= "next"> Next </button>
    </div>
  );
};

var form2 = (props) => {
  return (
    //insert form fields here
    <div>
    <form class= "accountInfo">
      First Name: <br></br>
      <input type ="text" class= "firstName"> </input><br> </br>
      Last Name: <br></br>
      <input type ="text" class= "lastName"> </input><br> </br>
      Email: <br></br>
      <input type ="text" class= "email"> </input><br> </br>
      Password: <br></br>
      <input type ="text" class= "password"> </input><br> </br>
    </form>
    <button type = "button" class= "next"> Next </button>
    </div>
  );
};


window.App = App;

ReactDOM.render(<App />, document.getElementById('app'));