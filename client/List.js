import React from 'react';
import ListELement from './ListELement.js';

class List extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo) =>
          <ListElement todo={todo}/>
        )}
      </ul>
    )
  }
}

export default List;