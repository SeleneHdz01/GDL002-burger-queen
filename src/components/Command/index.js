import React from "react";
import Button from "../Buttons";

const Command = props => {
  // let openCommand = []
  // newArrayMenu.map((newCommand) => {
  //   openCommand.push(
  //     newCommand
  //   );
  // })
  const newArrayMenu = props.newCommand;
  return (
    <div className="card">
      <div className="form-group">
        <input
          type="text"
          name="table"
          className="form-control"
          className="title"
          onChange={props.getTableNumber} //onChange controlador de eventos
        />
        <div>
          {newArrayMenu.map((element, i) => {
            return <p key={i}>{element.title}</p>;
          })}
        </div>

        <Button
          name="Enviar"
          action={() => {
            console.log(props.newCommand);
          }}
        />
      </div>
    </div>
  );
};
export default Command;
