import React, {Component} from 'react';

export default class TaskForm extends Component {
  state = {
    title: '',
    description: ''
  }

  onSubmit = (e) => {
    this.props.addtask(this.state.title, this.state.description);
    this.setState({
      title: '',
      description: ''
    });
    e.preventDefault();

  }

  onChange = (e) => {
    // console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    // console.log(this.props);
    // this.props.addtask('jola', 'la description de la tarea.');
    return (
      <div className="flex flex-col items-center justify-center">
        <form onSubmit={this.onSubmit} className="flex flex-col items-center justify-center w-2/4 py-4 m-4 rounded shadow-md ">
          <input value={this.state.title} type="text" name="title" placeholder="Write a Task" onChange={this.onChange} className="w-11/12 px-2 py-1 mx-2 bg-gray-100 border rounded-md shadow-md" />
          <textarea value={this.state.description} name="description" placeholder="Write a Description Task"  onChange={this.onChange} className="w-11/12 px-2 py-1 mx-2 mt-2 text-base bg-blue-200 border rounded-md shadow-md"></textarea>
          <button className="px-4 py-2 my-2 text-white uppercase bg-green-800 rounded-sm hover:bg-green-600" type="submit">Enviando</button>
        </form>
      </div>
    )
  }
}