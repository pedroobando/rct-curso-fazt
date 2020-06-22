import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav id="header" className="fixed top-0 z-30 w-full">
    
        <div className="flex flex-wrap items-center justify-between w-full p-0 py-2 mx-auto mt-0 leading-tight bg-gray-200 sm:px-16">
    
          <div className="block pr-4 lg:hidden">
            <button id="nav-toggle" className="flex items-center p-1 text-orange-800 hover:text-gray-900">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
    
          <div className="lg:pl-4">
            <Link to="#" className="text-2xl font-extrabold no-underline hover:no-underline lg:text-4xl">
              <span className="hidden -ml-1 lg:inline-block">REACT</span>
            </Link>
          </div>
    
          <div className="z-20 flex-grow hidden w-full p-4 mt-2 text-black bg-white lg:flex lg:items-center lg:w-auto lg:block lg:mt-0 lg:bg-transparent lg:p-0" id="nav-content">
            <ul className="items-center justify-end flex-1 list-reset lg:flex">
              <li className="mr-3">
                <Link to="/" className="inline-block px-4 py-2 text-black no-underline">Task</Link>
              </li>
              <li className="mr-3">
                <Link to="/posts" className="inline-block px-4 py-2 text-black no-underline hover:text-gray-800 hover:text-underline">Post</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="py-0 my-0 border-b border-gray-100 opacity-25" />
      </nav>
    )
  }
}
