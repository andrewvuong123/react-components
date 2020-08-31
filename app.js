// TODO

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList foods={['Chips', 'Chicken', 'Kale']}/>
  </div>
)

// refactor GroceryListItem to a class component
class GroceryListItem extends React.Component {
  // constructor method
  constructor(props) {
    // parent class
    super(props);
    // state feature only availiable for class components
    this.state = {
      done: false,
      // hover
      hovered: false
    };
  }
  // onClick toggle the done boolean and re-render
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  // onHover set the hovered boolean to true and re-render
  onHover() {
    this.setState({
      hovered: true
    })
  }

  onHoverOut() {
    this.setState({
      hovered: false
    })
  }

  // render method
  render() {
    // update style based on state
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hovered? 'bold' : 'normal'
    };
    // pass inline styles using React's style attribute
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseOver={this.onHover.bind(this)} onMouseOut={this.onHoverOut.bind(this)}>{this.props.food}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.foods.map(food =>
      <GroceryListItem food={food} />
    )}
  </ul>
);

// render component to div tag with id = app
ReactDOM.render(<App />, document.getElementById('app'));
