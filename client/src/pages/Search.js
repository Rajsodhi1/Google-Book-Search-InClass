import React, { Component } from "react"
import API from "../utils/API";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Form from "../components/Form";

class Search extends Component {
  state = {
    searchTerm: "",
    books: []
  }

  /* SEARCH STUFF */
  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the search and password
  handleFormSubmit = event => {
    event.preventDefault();
    this.loadBooks()
  };

  loadBooks = () => {
    API.googleThis(this.state.searchTerm)
      .then(res => {
        this.setState({
          books: res.data.items.map(book => {
            let item = {
              title: book.volumeInfo.title,
              author: book.volumeInfo.authors,
              description: book.volumeInfo.description,
              image: book.volumeInfo.imageLinks.thumbnail,
              link: book.volumeInfo.infoLink
            }
            return item;
          })
        })
      })
      .catch(err => console.log(err));
  };

  saveBook = id => {
    API.saveBook(id)
  }

  render() {
    return (
      <div className="container-fluid" max-height= "545px"
      border= "1px #DDDDDD solid"
      border-radius= "4px">
        <Form
          value={this.state.searchTerm}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          />
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
                bookSave={() => this.saveBook(book._id)}
              />
            )
          })}
        </div>

        )
      }
    }
    
export default Search