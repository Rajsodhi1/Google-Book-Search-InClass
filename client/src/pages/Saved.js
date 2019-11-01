import React, { Component } from 'react';
import API from "../utils/API";
import Card from "../components/Card";
// import Form from "../components/Form";

class Saved extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    console.log('get saved books')
    API.getBooks()
      .then(res => {
        console.log(res.data)
        this.setState({
          books: res.data
        })
      })
  }

  getBooks = () => {
    API.getBooks()
    .then(data => {
      this.setState({
        books: data
      })
    })
  }

  bookDelete = event => {
    let {value:id} = event.target;
    console.log(`Delete book ${id}`)
    API.deleteBook(id)
      .then(res => {
        console.log(res.data)
        API.getBooks()
          .then(res2 => {
            this.setState({
              books: res2.data
            })
          })
      })
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
                bookDelete={this.bookDelete}
              />
            )
          })}
        </div>
  
      )
    }
  }
  
  export default Saved;