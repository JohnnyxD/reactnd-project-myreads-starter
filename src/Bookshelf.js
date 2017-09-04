import React from 'react'
import { Link } from 'react-router-dom'
import BookshelfRow from './components/BookshelfRow'

function Bookshelf(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookshelfRow
            title="Currently Reading"
            readingItems={props.myBooks.filter(book => book.shelf === "currentlyReading")}
            onShelfChange={props.onShelfChange}
          />
          <BookshelfRow
            title="Want to Read"
            readingItems={props.myBooks.filter(book => book.shelf === "wantToRead")}
            onShelfChange={props.onShelfChange}
          />
          <BookshelfRow
            title="Read"
            readingItems={props.myBooks.filter(book => book.shelf === "read")}
            onShelfChange={props.onShelfChange}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}


export default Bookshelf;
