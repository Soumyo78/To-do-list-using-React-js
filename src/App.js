import './App.css';
import React from 'react';
import ListItem from './Components/List_Item/script';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userInput: "",
      arr: []
    }
    this.baseState = this.state;
  }

  takeUserInput = (e) => {
    this.setState({
      userInput:e.target.value
    })
  }

  show = ()=> {
    this.setState({
      arr: [...this.state.arr, this.state.userInput]
    })

    this.setState({
      userInput: ""
    })
    document.getElementById('list-container').style.visibility = "visible";
 };

  render(){
    const { userInput} = this.state
    return (
      <div className="main-container">
        <h1 id="heading-text">To-Do-List</h1>
        <div className="input-field-add-btn-container">
          <div className="input-field-container">
            <input id="input-field" type="text" placeholder="What will you do today?" value={userInput} onChange={this.takeUserInput}/>
          </div>
          <div className="add-btn-container">
            <button id="add-btn" className="add-btn" onClick={this.show}>ADD</button>
          </div>
        </div>
        <div id="list-container" className="list-container">
          <ListItem itemList={this.state.arr}/>
          <div id="clear-all-btn-container" className="clear-all-btn-container">
            <button id="clear-all-btn" className="clear-all-btn" onClick={
              ()=>{
                this.setState(this.baseState)
                document.getElementById('list-container').style.visibility = "hidden"
              }
            }>Clear All</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
