import React from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    myBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState({
          myBooks: books
        });
      })
  }

  onShelfChange(movedBook, nextShelf) {
    BooksAPI.update(movedBook, nextShelf)
      .then(() => {
        const myBooksWithoutMovedBook = this.state.myBooks.filter(book => book.id !== movedBook.id)
        movedBook.shelf = nextShelf
        this.setState({ myBooks: nextShelf !== 'none' ? myBooksWithoutMovedBook.concat([ movedBook ]) : myBooksWithoutMovedBook })
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() =>
          <Bookshelf
            onShelfChange={(movedBook, nextShelf) => this.onShelfChange(movedBook, nextShelf)}
            myBooks={this.state.myBooks}
          />}
        />
        <Route path="/search" render={() =>
          <SearchBooks
            onShelfChange={(movedBook, nextShelf) => {
              this.onShelfChange(movedBook, nextShelf)
            }}
            myBooks={this.state.myBooks}
          />}
        />
      </div>
    )
  }
}

export default BooksApp
