import React, { Component } from 'react';
import { menuOther } from '../../data/data.json';
import  Button   from '../Buttons';
import  Command   from '../Command';

class Order extends Component {
    constructor() {
        super();
        this.state = {
            menuOther
        };
        this.handleAddAllMenu = this.handleAddAllMenu.bind(this);
    }
    //Actualizando el estado de la aplicación
    //creando metodo de manejador de eventos que se encarge de agregar las tareas
    handleAddAllMenu(menuOther){
        this.setState({
            menuOther: [...this.state.menuOther, menuOther]//uniendo el estado de la tarea con una nueva tarea
        })
    }

    render() {
        const allMenu = this.state.menuOther.map((menuOther, i) => {
            return (
                <div className='col-md-8' key={i}>
                    <div className='card mt-4'>
                        <div className='card-header'>
                            <h3>
                                {menuOther.title}
                            </h3>
                            <span className='badge badge-pill badge-danger ml-2'>
                                {menuOther.flavors}
                            </span>
                        </div>
                            <div className='card-body' >
                                <p>$ {menuOther.price}</p>
                                <Button 
                                name='+'
                                
                                />
                                <Button 
                                name='-'
                                
                                />
                            </div>
                    </div>
                </div>
            )
        })
        return (
            <div className='Order' >
                
                <h2>Iniciar Pedido</h2>
                
                <div className='row mt-4'>
                <Command onAddAllMenu={this.handleAddAllMenu} />
                    {allMenu}
                </div>
            </div>
            

        );
    }
}
export default Order;