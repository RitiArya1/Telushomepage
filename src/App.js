import React from "react";
import "./App.css";
import ListItems from "./ListItems";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);
const date = new Date().toLocaleDateString();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };

    /*bind constructor function*/
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }

  setUpdate(text, key) {
    console.log("items:" + this.state.items);
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        console.log(item.key + "    " + key);
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  }

  render() {
    return (
      <div className="container">
        <h1>What's the Plan for Today?</h1>
        <div className="App">
          <header>
            <form id="todo-form" onSubmit={this.addItem}>
              <input
                type="text"
                placeholder="Enter task"
                value={this.state.currentItem.text}
                onChange={this.handleInput}
              ></input>
               <button type="submit" id="add-btn">Add</button>
            </form>
            
        <p>{this.state.items.text}</p>
           
            <ListItems
              items={this.state.items}
              deleteItem={this.deleteItem}
              setUpdate={this.setUpdate}
            ></ListItems>
          </header>
        </div>
        <div id="date">
        <p>Date :{date}</p>
        </div>
      </div>
    );
  }
}

export default App;
