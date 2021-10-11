import React, { Component } from 'react'

class BookCard extends Component {
    render() {
        const { Book , onChangeBook} = this.props
        
        
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${Book.imageLinks && Book.imageLinks.thumbnail})`  }}></div>
                    <div className="book-shelf-changer">
                    <select  value={Book.shelf} onChange={(event)=> {onChangeBook(Book,event.target.value)}}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{Book.title}</div>

                { Book.authors && Book.authors.map((author) => (

                    <div className="book-authors" key={author}>{author}</div>
                ))}
            </div>
           
        )
    }
}


export default BookCard
