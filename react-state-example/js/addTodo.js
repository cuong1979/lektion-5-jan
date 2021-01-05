import React from 'react';

function AddTodo (props){

    const handleKeyUp = (event) =>{
        if(event.key === 'Enter') {
            props.updateState(event.target.value);
        }
    }
   
    return (
            <section>
                <input type="text" placeholder="Skriv en todo" onKeyUp={handleKeyUp} />
                {/* <button>{ this.props.buttonText }</button> */}
            </section>
        )
    }


export default AddTodo;