import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import BookCard from './BookCard'
class ListBooks extends Component {
    render() {
        const { MyBooks , onChangeBook} = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">

                                
                                {MyBooks.filter((Book)=>(
                                    Book.shelf === "currentlyReading"
                                )
                                
                                ).map((Book) => (
                                    <li key={Book.id}>
                                        <BookCard key={Book.id} onChangeBook = {onChangeBook} Book = {Book}/>
                                        {/* <BookCard key={Book.id} onChangeBook = {onChangeBook} title = {Book.title} authers = {Book.authors} image = {Book.imageLinks.thumbnail}/> */}
                                    </li>
                                ))
                                
                                }
                            </ol>
                        </div>
                        </div>
                        <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                            
                                {MyBooks.filter((Book)=>(
                                        Book.shelf === "wantToRead"
                                    )
                                    
                                    ).map((Book) => (
                                        <li key={Book.id}>
                                            <BookCard key={Book.id} onChangeBook = {onChangeBook} Book = {Book}/>
                                            {/* <BookCard key={Book.id} title = {Book.title} authers = {Book.authors} image = {Book.imageLinks.thumbnail}/> */}
                                        </li>
                                    ))
                                    
                                }
                            </ol>
                        </div>
                        </div>
                        <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                            
                                {MyBooks.filter((Book)=>(
                                            Book.shelf === "read"
                                        )
                                        
                                        ).map((Book) => (
                                            <li key={Book.id}>
                                                <BookCard key={Book.id} onChangeBook = {onChangeBook} Book = {Book}/>
                                                {/* <BookCard key={Book.id} title = {Book.title} authers = {Book.authors} image = {Book.imageLinks.thumbnail}/> */}
                                            </li>
                                        ))
                                        
                                }
                            </ol>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                     <Link to = '/search'><button>Add a book </button> </Link> 
                </div>
            </div>
        )
    }
}

export default ListBooks
