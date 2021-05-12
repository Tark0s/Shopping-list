const Person = (props) => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={props.delete}>-</button>
    </li>
  );
};

class List extends React.Component {
  state = {
    products: [
      {
        id: 1,
        name: "Bread",
      },
      {
        id: 2,
        name: "Milk",
      },
      {
        id: 3,
        name: "Pasta",
      },
      {
        id: 4,
        name: "Spinach",
      },
      {
        id: 5,
        name: "Butter",
      },
      {
        id: 6,
        name: "Watermelon",
      },
      {
        id: 7,
        name: "Coffee",
      },
    ],
  };

  handleDelete(id) {
    const products = [...this.state.products];
    const index = products.findIndex((person) => person.id === id);
    products.splice(index, 1);

    this.setState({
      products,
    });
  }

  render() {
    return (
      <>
        <ul>
          {this.state.products.length > 0
            ? this.state.products.map((product) => (
                <Person
                  name={product.name}
                  key={product.id}
                  delete={this.handleDelete.bind(this, product.id)}
                />
              ))
            : "Wszystko masz już w koszyku!"}
        </ul>
      </>
    );
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
