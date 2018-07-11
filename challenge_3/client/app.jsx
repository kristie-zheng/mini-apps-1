var connection = require('./connection');

//class App overall
Class App extends React.Component {
  super(props);
  render() {
    return <h1> Placeholder text here </h1>;
  }
}
//form1 component
var form1 = (props) => {
  return (
    //insert form fields here
    <div>
    <form class= "accountInfo">
      First Name: <br>
      <input type ="text" class= "firstName"> <br>
      Last Name: <br>
      <input type ="text" class= "lastName"> <br>
      Email: <br>
      <input type ="text" class= "email"> <br>
      Password: <br>
      <input type ="text" class= "password"> <br>
    </form>
    <button type = "button" class= "next"> Next </button>
    </div>
  );
};

//form2 component


//form 3 component