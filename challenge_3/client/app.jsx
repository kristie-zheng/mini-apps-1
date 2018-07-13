//cannot use require keyword here
//class App overall will render the remainder of the components
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'accountInfo',
      accountInfoFields: ['First Name', 'Last Name', 'Email', 'Password'],
      shippingInfoFields: ['Address 1', 'Address 2', 'City', 'State', 'Zip', 'Phone Number'],
      paymentInfoFields: ['Credit Card Number', 'Expiration Date', 'CVV', 'Billing Zip'],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    var key = event.target.className;
    this.setState({[event.target.className]: event.target.value}, function(){
      console.log(this.state);
    });
  }

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
        accountInfoFields = {this.state.accountInfoFields} shippingInfoFields = {this.state.shippingInfoFields} 
        paymentInfoFields = {this.state.paymentInfoFields} handleChange = {this.handleChange}/>
      </div>
    )
  }
}

//each form field
var FormField = (props) => {
  var handleChange = props.handleChange;
  return (
    <div>
      <span> 
        {props.title}
      </span>
      <input type="text" className = {props.className} onChange = {handleChange}/>
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
    {accountInfoFields.map((field) => <FormField title = {field} handleChange = {props.handleChange} className = {field}/>)}
    </form>
    <button type = "button" className= "next" onClick = {handleClick}> Next </button>
    </div>
  );
};

var ShippingInformation = (props) => {
  var handleClick = props.handleClick;
  var shippingInfoFields = props.shippingInfoFields;
  return (
    //insert form fields here
    <div>
      <form className= "shippingInfo">
      {shippingInfoFields.map((field) => <FormField title = {field} handleChange = {props.handleChange}/>)}
      </form>
      <button type = "button" className= "next" onClick = {handleClick}> Next </button>
    </div>
  );
};

var PaymentInformation = (props) => {
  var handleClick = props.handleClick;
  var paymentInfoFields = props.paymentInfoFields;
  return (
      <div>
      <form className= "paymentInfo">
      {paymentInfoFields.map((field) => <FormField title = {field} handleChange = {props.handleChange}/>)}
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
    return (<AccountInformation accountInfoFields = {props.accountInfoFields} handleClick = {props.handleClick} handleChange = {props.handleChange}/>); 
  } else if (props.currentPage === 'shippingInfo') {
    return (<ShippingInformation shippingInfoFields = {props.shippingInfoFields} handleClick = {props.handleClick} handleChange = {props.handleChange}/>);
  } else if (props.currentPage === 'paymentInfo') {
    return (<PaymentInformation paymentInfoFields = {props.paymentInfoFields} handleClick = {props.handleClick} handleChange = {props.handleChange}/>);
  } else if (props.currentPage === 'confirmation') {
    return (<Confirmation handlePurchase = {props.handlePurchase}/>);
  }
}

window.App = App;

ReactDOM.render(<App />, document.getElementById('app'));