var Greeter = React.createClass({
  // Set a default values for name
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is the default message!'
    };
  },
  // Sets its name state to props value
  getInitialState: function() {
    return {
        name: this.props.name
    };
  },
  onButtonClick: function (e) {
      e.preventDefault();

      var nameRef = this.refs.name;
      var name = nameRef.value;
      nameRef.value = '';

      if(typeof name == 'string' && name.length > 0) {
        this.setState({
          name: name
        });
      }
  },

  render: function() {
    // Use name variable to fetch the value
    // Use state, if the value is dynamic
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

// Passing other types into props
var firstName = 'Leo';
ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
