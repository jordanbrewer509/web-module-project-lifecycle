import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
    <div className='form'>
      <form id="todoForm" onSubmit={this.props.onTodoFormSubmit}>
        <input 
          value={this.props.todoNameInput} 
          onChange={this.props.onChangeHandler} 
          type="text" 
          placeholder='Type todo'>
          </input>
        <input type="submit"></input>
      </form>
    <button 
      onClick={this.props.toggleDisplayCompleted}>
        {this.props.displayCompleted ? 'Hide' : 'Show' }
         Completed
    </button>
    </div>
    )
  }
}