import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import {Route} from 'react-router-dom'

class BooksApp extends Component {
  state = {
    
    MyBooks: [],
    searchResult :[],
   
    
  }
  componentDidMount() {
    this.BooksList()
  }

  BooksList = ()=>{
    BooksAPI.getAll().then((MyBooks) => {
      this.setState({ MyBooks })
    })
  }

  UpdateBook = ( Book,shelf)=>{
    BooksAPI.update(Book, shelf).then((Books)=>{
      this.BooksList()
    })
  }

  

 
  

  render() {
   
    return (
      <div className="app">
        {/* <Route exact path = '/' component = {ListBooks} />  */}
       
        <Route exact path = '/' render = {() => (
           <ListBooks MyBooks = {this.state.MyBooks} onChangeBook = {this.UpdateBook}/>
          
           
        )} /> 
       

       {/* <Route path='/search' component = {SearchBooks} /> */}
       <Route path='/search' render={() => (
          <SearchBooks Mybooks = {this.state.MyBooks} onChangeBook = {this.UpdateBook}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
