import React from "react";
import "./bookcard.css";

const BookCard = (props) => {
  const { image, name, genre, author } = props.book;

  return (
    <div className="book-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Genre: {genre}</p>
      <p>Author: {author}</p>
    </div>
  );
};

export default BookCard;
