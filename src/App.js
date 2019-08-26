import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Add from './components/Add';
import Header from './components/Header';


class App extends React.Component {

  state ={
    list: [
      {
        id: 1,
        details: "Eat ",
        comp: false
      },

      {
        id: 2,
        details: "Play ",
        comp: false
      },

      {
        id: 3,
        details: "Read",
        comp: false
      },
    ]
  }

  changeState = (id) =>{
    this.setState({
      list: this.state.list.map(value=>{
        if(value.id === id) {value.comp = !value.comp}
        return value
      })
    })
  }

  delete = (id) =>{
    this.setState({
      list: this.state.list.filter(todo =>{
        return todo.id !== id
      } )
    })
  }



  add = (title) =>{

    let newItem={
      id: Math.random(),
      details: title,
      comp: false
    }

    this.setState({
      list: [...this.state.list, newItem]
    })
  }

  render(){
    return (

      <div className="App">

        <div className="container">
          <Header />
          <Add addition={this.add}/>
          <Todos todos={this.state.list} completed={this.changeState} delTodo={this.delete}/>
        </div>
      </div>

    );
  }

}

export default App;
