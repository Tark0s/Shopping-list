const Person = (props) => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={props.delete}>X</button>
    </li>
  );
};
const NewProduct = (props) => {
  return (
    <>
      <section>
        <input
          value={props.value}
          placeholder="new product"
          onChange={props.change}
          type="text"
        />
        <button onClick={props.add}>Add product</button>
      </section>
    </>
  );
};

class List extends React.Component {
  state = {
    AddValue: "",

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
  handleAdd() {
    let products = [...this.state.products];
    products.concat(this.state.AddValue);
    this.setState({
      products,
    });
  }
  handleInputChange = (e) => {
    this.setState({
      AddValue: e.target.value,
    });
  };

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
        <hr />
        <NewProduct
          add={this.handleAdd.bind(this)}
          change={this.handleInputChange}
          value={this.state.AddValue}
        />
      </>
    );
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
