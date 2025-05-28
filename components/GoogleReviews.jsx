"use client";

import { useEffect, useState } from "react";

export default function GoogleReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        window.google &&
        window.google.maps &&
        window.google.maps.places
      ) {
        clearInterval(interval);

        const map = document.createElement("div");
        const service = new window.google.maps.places.PlacesService(map);

        const request = {
          placeId: "ChIJrSmpM99JQg0RObDTzsi1dYE",
          fields: ["reviews"],
        };

        service.getDetails(request, (place, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            if (place.reviews) {
              setReviews(place.reviews.slice(0, 3));
            }
          }
        });
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="google-reviews" className="space-y-4">
      {reviews.length === 0 ? (
        <p>Cargando reseñas...</p>
      ) : (
        reviews.map((review, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded shadow mb-4"
          >
            <p className="font-semibold">{review.author_name}</p>
            <p className="text-yellow-500">
              {"★".repeat(review.rating)}
            </p>
            <p className="text-gray-700">{review.text}</p>
          </div>
        ))
      )}
    </div>
  );
}
