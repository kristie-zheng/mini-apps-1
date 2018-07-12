// var connection = require('./connection');

//class App overall
//maybe we need to make it a component like the rest of them
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div> 
        <h1> 
          Placeholder text here 
        </h1> 
        <Form1/>
      </div>
    )
  }
}
//form1 component
var Form1 = (props) => {
  return (
    //insert form fields here
    <div>
   
    <form className= "accountInfo">
      First Name: 
      <input type ="text" className= "firstName"/> <br/>
      Last Name:
      <input type ="text" className= "lastName"/> <br/>
      Email: 
      <input type ="text" className= "email"/> <br/>
      Password: 
      <input type ="text" className= "password"/> <br/>
    </form>
    <button type = "button" className= "next"> Next </button>
    </div>
  );
};

var Form2 = (props) => {
  return (
    //insert form fields here
    <div>
      <form class= "accountInfo">
        First Name: 
        <input type ="text" class= "firstName"> </input>
        Last Name: 
        <input type ="text" class= "lastName"> </input>
        Email: 
        <input type ="text" class= "email"> </input>
        Password:
        <input type ="text" class= "password"> </input>
      </form>
      <button type = "button" class= "next"> Next </button>
    </div>
  );
};


window.App = App;

ReactDOM.render(<App />, document.getElementById('app'));