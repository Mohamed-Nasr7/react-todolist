import React, {Component} from 'react';
import Items from './Items'

class Todos extends Component {


    render(){

        
        
        return(

            this.props.todos.length > 0 ?
                this.props.todos.map(val=>{
                    return(
                        <Items key={val.id} allItems={val} marked={this.props.completed} delTodo={this.props.delTodo}/>
                    )
                })

            : <p style={{background: '#f4f4f4', padding: '10px', borderBottom: '1px #ccc dotted'}}>No items in the list</p>
            
        )

    }



}

export default Todos;