import React, {Component} from 'react';

class Items extends Component {

    
    generalStyle =() =>{
        return({
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            display: 'flex',
            alignItems: 'center'
        })
    }

    checkStyle = () =>{
        return ({
            textDecoration: this.props.allItems.comp === true ? 'line-through' : 'none',
            marginLeft: '8px',
            flex: '8'
            
        })
    }

    btnStyle = {
        width: '8em',
        height: '2.5em',
        background: 'rgb(210, 24, 24)',
        color: '#fff',
        border: 'none',
        borderRadius: '7px',
        padding: '5px 8px',
        cursor: 'pointer',
        float: 'right',
        margin: '5px 15px',
        flex: '1'
    }


    render(){

        const {id, details} = this.props.allItems;

        return(
            <div style={this.generalStyle()}>
                <input type="checkbox" onChange={this.props.marked.bind(this,id)} style={{width:'1.3em', height: '1.3em', margin: '12px 5px 12px 12px'}}/>
                <span style={this.checkStyle()}>
                    {details}
                </span>
                <button style={this.btnStyle} onClick={this.props.delTodo.bind(this,id)}>Delete</button>
                
            </div>
        )

    }


}

export default Items;