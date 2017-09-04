import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookshelfItem from './components/BookshelfItem'

class SearchBooks extends Component {
  state = {
    searchText: '',
    searchResults: []
  }

  handleSearchChange(e) {
    e.preventDefault()
    const newSearchText = e.target.value;
    this.setState({ searchText: newSearchText })
    if (newSearchText !== '') {
      BooksAPI.search(newSearchText)
        .then((res) => {
          this.setState({
            searchResults: res.error ? [] : res
          })
        })
    } else {
      this.setState({
        searchResults: []
      })
    }
  }

  render() {
    const { myBooks, onShelfChange } = this.props
    const { searchText, searchResults } = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={searchText}
              onChange={(e) => this.handleSearchChange(e)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResults
              .map(book => {
                const categorizedBook = myBooks.find(myBook => myBook.id === book.id)
                if (categorizedBook) {
                  book.shelf = categorizedBook.shelf
                }
                return (
                  <li key={book.id}>
                    <BookshelfItem
                      book={book}
                      onShelfChange={onShelfChange}
                    />
                  </li>
                )
              })
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
