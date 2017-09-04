import React from 'react'
import BookshelfItem from './BookshelfItem'

function BookshelfRow(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.readingItems.map(book => (
            <li key={book.id}>
              <BookshelfItem
                book={book}
                onShelfChange={props.onShelfChange}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default BookshelfRow;
