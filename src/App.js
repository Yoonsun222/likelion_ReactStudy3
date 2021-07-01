
import './App.css';
import React, {Component} from 'react';
import Subject from './components/Subject';
import Content from './components/Content';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      subject:{title:'회원가입'},
      contents:[
        {id:1, title:'1. Name'},
        {id:2, title:'2. User Name'},
        {id:3, title:'3. Password'}
      ]
    }
  }
  render(){
  return (
    <div className="App">
      <Subject data = {this.state.contents}></Subject>
      <Content></Content>
    </div>
  );
}
}

export default App;
