import React, { Component } from 'react'

export default class Posts extends Component {
  state = {
    posts: []
  }

  async componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const retPost = await fetch(url);
    const data = await retPost.json();
    // console.log(data);
    this.setState({
      posts: data
    })
  }

  render() {
    return (
      <div>
        <h1 className="ml-4 text-3xl font-bold text-blue-800 uppercase">Lista de datos</h1>
        {
          this.state.posts.map(post => {
            return (
              <div key={post.id} className="px-4 py-2 mb-2 ml-2" >
                <h1 className="text-2xl text-gray-800">{post.title}</h1>
                <p className="text-gray-600">{post.body}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
