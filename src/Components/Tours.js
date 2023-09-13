import React from "react";
import Card from "./Card.js";

export default function Tours({ tours, removeTour }) {
  return (
    <div className="container">
      <div>
        <h2 className="title">Plan With Jai</h2>
      </div>
      <div className="cards">
        {tours.map((tour) => (
          <Card {...tour} key={tour.id} removeTour={removeTour}></Card>
        ))}
      </div>
    </div>
  );
}
