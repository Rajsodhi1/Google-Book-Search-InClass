import React, { Component } from 'react';
import API from "../utils/API";
import Card from "../components/Card";
// import Form from "../components/Form";

class Saved extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    API.getBooks()
    .then(data => {
      this.setState({
        books: data
      })
    })
  }

  bookDelete = id => {
    API.deleteBook(id).then(() => this.getBooks)
  }

    render() {
      return (
        <div className="container-fluid">
          {this.state.books.map(book => {
            return (
              <Card 
                name={book.title}
                title={book.title}
                author={book.author}
                description={book.description}
                link={book.link}
                id={book._id}
                image={book.image}
                key={book._id}
                view="saved"
                bookDelete={this.deleteBook(book._id)}
              />
            )
          })}
        </div>
  
      )
    }
  }
  
  export default Saved