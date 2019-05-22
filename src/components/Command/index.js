import React, { Component } from 'react';

class  Command extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        //setState cambia el dato que se ha establesido inicialmente
        //cambiar datos y guardarlos en el estado del componente "Command"
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
        //mostrar el estado actual con this.state
        console.log();
    }
    //handleSubmit es el evento que se ejecutara
    handleSubmit(event){
        event.preventDefault();
        this.props.onAddAllMenu(this.state);
        console.log('Escribiendo....');
        
        
    }

    render() { 
        return ( 
            <div className='card'>
                <form className='card-body' 
                onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <input 
                        type='text' 
                        name='title'
                        className='form-control'
                        className='title'
                        onChange={this.handleInput}
                        />

                    </div>

                </form>

            </div>
         );
    }
}
 
export default Command;