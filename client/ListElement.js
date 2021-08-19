import React from 'react';

class ListELement extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <li>{this.props.todo}</li>
    )
  }
}


export default ListElement;