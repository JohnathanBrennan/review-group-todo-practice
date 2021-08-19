import React from 'react';
import List from './List.js'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: ['1','2','3','4','5'],
      numOfTasks: 0,
      value: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      numOfTasks: this.state.todos.length,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.value]
    })
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <h2>My Todo List</h2>
        <h5>There are {this.state.numOfTasks} tasks to do.</h5>
        <List todos={todos}/>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='fill me daddy' value={this.state.value} onChange={() => {this.handleChange(event)}}></input>
          <input type='submit' value='Submit'></input>
        </form>
      </div>
    )
  }
}

export default App;