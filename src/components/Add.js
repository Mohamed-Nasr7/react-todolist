import React, {Component} from 'react';

class Add extends Component {

    state={
        title: ''
    }


    onSubmit = (e)=>{
        e.preventDefault();
        this.state.title !== '' ? this.props.addition(this.state.title) : alert("Type something !");
        this.setState({
            title: ''
        })
    }

    onChange =(e) =>{
        this.setState({
            title: e.target.value
        })
    }


    render(){
        return(
            <form style={{display: 'flex'}} onSubmit= {this.onSubmit}>
                <input type="text" 
                name="title" 
                value={this.state.title} 
                onChange={this.onChange}
                style={{flex:'10', padding: '5px', height: '3em'}}
                placeholder="Add Todo..."
                />

                <input type="submit" name="add" value="Add" className="btn" style={{flex:'2'}}/>
            </form>
        )

    }



}

export default Add;