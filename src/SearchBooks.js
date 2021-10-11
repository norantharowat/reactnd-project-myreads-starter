import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import BookCard from './BookCard'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
   
    state = {
        Result:[],
        query : ''
    }

    updateQuery = (query)=>{
        this.setState({query})

        if(query.length > 0){

            BooksAPI.search(query).then((searchResult)=>{
            console.log(searchResult)
            if(searchResult.error){
                this.setState({ Result: [] })
            }else{

                this.setState({Result : searchResult })
            }
            
          
           }).catch(this.setState({ Result: [] }));
        
        }else{
            this.setState({Result : [] })
        }

    }
   
    render() {
        const {Mybooks , onChangeBook} = this.props
        console.log(Mybooks)
        // onSearch(this.state.query)
        this.state.Result.forEach((resultedBook) => {
            Mybooks.forEach((Book) => { 
                if(Book.id === resultedBook.id){
                    resultedBook.shelf = Book.shelf
                    
                }
             } )

             if(!resultedBook.shelf){
                resultedBook.shelf = 'none';
              }
        })
        return (
            
            <div className="search-books">
                <div className="search-books-bar">
                    <Link  onClick={()=> {this.setState({Result: []})}} className="close-search" to = '/'>Close</Link>
                    {/* <button className="close-search" >Close</button> */}
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" placeholder="Search by title or author"
                        value = { this.state.query }
                        onChange = { (event) => {this.updateQuery(event.target.value)
                            
                        }}
                        />

                    </div>
                </div>

                <div className="search-books-results">
                    <ol className="books-grid">

                     {this.state.Result.map((Book) => (
                                    <li key={Book.id}>
                                        <BookCard key={Book.id} onChangeBook = {onChangeBook} Book = {Book}/>
                                    </li>
                                ))}
                                
                                
                    </ol>
                </div>
          </div>    
            
        )
    }
}

export default SearchBooks
