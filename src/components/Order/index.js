import React, { Component } from "react";
import { menuOther } from "../../data/data.json";
import Button from "../Buttons";
import Command from "../Command";

class Order extends Component {
  constructor() {
    super();
    this.state = {
      menuOther,
      newCommand: [],
      table: ""
    };
  }

  getTableNumber = event => {
    // console.log(this.state.table);
    this.setState({
      table: event.target.value
    });
  };

  addCant = id => {
    const newState = this.state;
    newState.menuOther[id].cant++;
    this.setState(newState);
  };

  subCant = id => {
    const newStateSub = this.state;
    newStateSub.menuOther[id].cant--;
    this.setState(newStateSub);
  };

  filterCant() {
    this.state.menuOther
      .filter(element => element.cant > 0)
      .map(e => this.state.newCommand.push(e));
    console.log(this.state.newCommand);
  }

  render() {
    const allMenu = this.state.menuOther.map((menuOther, i) => {
      return (
        <div className="col-md-8" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{menuOther.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {menuOther.flavors}
              </span>
            </div>
            <div className="card-body">
              <p>$ {menuOther.price}</p>
              <p> {menuOther.cant}</p>
              <Button
                name="+"
                action={() => {
                  this.addCant(menuOther.id);
                  this.filterCant();
                }}
              />
              <Button
                name="-"
                action={() => {
                  this.subCant(menuOther.id);
                  this.filterCant();
                }}
              />
            </div>
          </div>
        </div>
      );
    });
    //console.log(this.state.menuOther);

    return (
      <div className="Order">
        <h2>Iniciar Pedido</h2>

        <div className="row mt-4">
          {allMenu}
          Mesa:
          <Command
            getTableNumber={this.getTableNumber}
            filterCant={this.filterCant}
            newCommand={this.state.newCommand}
          />
          <div />
        </div>
      </div>
    );
  }
}
export default Order;
