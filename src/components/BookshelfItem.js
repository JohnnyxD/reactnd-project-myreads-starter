import React from 'react'

function BookshelfItem(props) {
  const { onShelfChange, book } = props
  const { authors, title, imageLinks } = book
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks && imageLinks.thumbnail})` }}></div>
        <div className="book-shelf-changer">
          <select value={book.shelf || "none"} onChange={(e) => onShelfChange(book, e.target.value)}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">
        {authors && authors.map(author => (
          <div key={author}>{author}</div>
        ))}
      </div>
    </div>
  );
}

export default BookshelfItem;
