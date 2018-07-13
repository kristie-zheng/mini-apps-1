//cannot use require keyword here
//class App overall will render the remainder of the components
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'accountInfo',
      accountInfoFields: ['First Name', 'Last Name', 'Email', 'Password']
    };
    this.handleClick = this.handleClick.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  handleClick(event) {
    if (this.state.currentPage === 'accountInfo') {
      this.setState({currentPage: 'shippingInfo'}, function() {
      console.log(this.state);
      });
    } else if (this.state.currentPage === 'shippingInfo') {
      this.setState({currentPage: 'paymentInfo'}, function() {
      console.log(this.state);
      });
    } else if (this.state.currentPage === 'paymentInfo') {
      this.setState({currentPage: 'confirmation'}, function() {
      console.log(this.state);
      });
    }
    $.ajax({
      url: '/',
      method: 'POST',
      data: 'hello', 
      success: function(data) {
        console.log('here is data return from server', data);
      },
      error: function(error) {
        console.log('error', error);
      }
    });
  }

  // handleChange(event) {
  //   this.setState({:});
  // }

  handlePurchase(event) {
  //submit a get request to server
  //retrieve the database data (use query)
  //render it on the dom
  console.log('hi')
  $.ajax({
    url: '/',
    method: 'GET',
    data: 'useremail',
    success: function(data) {
      console.log('here is data returned from serer', data);
    },
    error: function(error) {
      console.log('error of get req', error);
    }
  });
  }

  render() {
    return (
      <div> 
        <h1> 
          Checkout 
        </h1> 
        <DisplayedForm handleClick = {this.handleClick} handlePurchase = {this.handlePurchase} currentPage = {this.state.currentPage}
        accountInfoFields = {this.state.accountInfoFields}/>
      </div>
    )
  }
}

//each form field
var FormField = (props) => {
  // var handleChange = props.handleChange;
  return (
    <div>
      <span> 
        {props.title}
      </span>
      <input type="text"/>
      <br/>
    </div>
  );
}
//form1 component
var AccountInformation = (props) => {
  var handleClick = props.handleClick;
  var accountInfoFields = props.accountInfoFields; //this is an array of titles
  return (
    <div>
    <form className= "accountInfo">
    {accountInfoFields.map((field) => <FormField title = {field} />)}
    </form>
    <button type = "button" className= "next" onClick = {handleClick}> Next </button>
    </div>
  );
};

var ShippingInformation = (props) => {
  var handleClick = props.handleClick;
  return (
    //insert form fields here
    <div>
      <form className= "shippingInfo">
        Address: 
        <input type ="text" className= "address1"/> <br/>
        Address Line 2: 
        <input type ="text" className= "address2"/> <br/>
        City: 
        <input type ="text" className= "city"/> <br/>
        State:
        <input type ="text" className= "state"/> <br/>
        Zipcode:
        <input type ="text" className= "zip"/> <br/>
        Phone Number:
        <input type ="text" className= "phone"/> <br/>

      </form>
      <button type = "button" className= "next" onClick = {handleClick}> Next </button>
    </div>
  );
};

var PaymentInformation = (props) => {
  var handleClick = props.handleClick;
  return (
      <div>
      <form className= "paymentInfo">
        Credit Card Number:
        <input type="text" className= "creditCardNum"/> <br/>
        Expiration Date:
        <input type = "text" className = "expirationDate"/><br/>
        CVV:
        <input type="text" className= "cvv"/><br/>
        Billing Zipcode:
        <input type="text" className="billingZip"/><br/>
      </form>
      <button type = "button" className= "submit" onClick = {handleClick}> Submit </button>
    </div>
  );
}

var Confirmation = (props) => {
  var handlePurchase = props.handlePurchase;
  return (
    <div>
    <p>Confirmation</p>
    <button type = "button" className= "purchase" onClick = {handlePurchase}> Purchase </button>
    </div>
  )
}


var DisplayedForm = (props) => {
  var pageToDisplay = props.currentPage;
  if (props.currentPage === 'accountInfo') {
    return (<AccountInformation accountInfoFields = {props.accountInfoFields} handleClick = {props.handleClick}/>); 
  } else if (props.currentPage === 'shippingInfo') {
    return (<ShippingInformation handleClick = {props.handleClick}/>);
  } else if (props.currentPage === 'paymentInfo') {
    return (<PaymentInformation handleClick = {props.handleClick}/>);
  } else if (props.currentPage === 'confirmation') {
    return (<Confirmation handlePurchase = {props.handlePurchase}/>);
  }
}

window.App = App;

ReactDOM.render(<App />, document.getElementById('app'));