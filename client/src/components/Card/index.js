import React from "react";

function Card(props) {
  if (props.view === "saved") {
    return (
      <div className="card text-center">
        <div className="img-container">
          <img height="250px" width="250px" alt={props.name} src={props.image}></img>
        </div>
        <div className="content" float="right">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <strong>Title:</strong> {props.title}
            </li>
            <li class="list-group-item">
              <strong>Author:</strong> {props.author}
            </li>
            <li class="list-group-item">
              <strong>Description:</strong> {props.description}
            </li>
            <li class="list-group-item">
              <strong>Link:</strong> <a href={props.link}>{props.link}</a>
            </li>
          </ul>
        </div>
        <span onClick={props.deleteBook(props.id)} className="delete">
          X
        </span>
      </div>
    );
  } else {
    return (
      <div className="card text-center">
        <div className="img-container">
          <img height="250px" width="250px" alt={props.name} src={props.image} />
        </div>
        <div className="content" float="right">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <strong>Title:</strong> {props.title}
            </li>
            <li class="list-group-item">
              <strong>Author:</strong> {props.author}
            </li>
            <li class="list-group-item">
              <strong>Description:</strong> {props.description}
            </li>
            <li class="list-group-item">
              <strong>href:</strong> {props.link}
            </li>
          </ul>
        </div>
        <span onClick={props.saveBook(props.id)} className="save"> O </span>
      </div>
    );
  }
}

export default Card;
