"use client";

import { useEffect } from "react";

export default function Reviews() {
  useEffect(() => {
    // Si ya está cargado, no hacer nada
    if (window.google && window.google.maps && window.google.maps.places)
      return;
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    // Cargar script de Google Maps con Places
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      const interval = setInterval(() => {
        if (window.google && window.google.maps && window.google.maps.places) {
          clearInterval(interval);

          const map = document.createElement("div");
          const service = new window.google.maps.places.PlacesService(map);

          const request = {
            placeId: "ChIJrSmpM99JQg0RObDTzsi1dYE",
            fields: ["reviews"],
          };

          service.getDetails(
            request,
            (
              place: google.maps.places.PlaceResult,
              status: google.maps.places.PlacesServiceStatus
            ) => {
              if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                const container = document.getElementById("google-reviews");
                if (container && place.reviews) {
                  container.innerHTML = "";
                  place.reviews.slice(0, 3).forEach((review) => {
                    const el = document.createElement("div");
                    el.className = "bg-white p-4 rounded shadow mb-4";
                    el.innerHTML = `
                      <p class="font-semibold">${review.author_name}</p>
                      <p class="text-yellow-500">${"★".repeat(review.rating ?? 0)}</p>
                      <p class="text-gray-700">${review.text}</p>`;
                    container.appendChild(el);
                  });
                }
              }
            }
          );
        }
      }, 500);
    };

    return () => {
      // Limpiar el intervalo si el componente se desmonta
      // No hay acceso al intervalo desde aquí, pero podrías usar un ref si quieres
    };
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-oliva mb-10">
          Lo que dicen nuestros clientes
        </h2>
        <div id="google-reviews" className="max-w-4xl mx-auto"></div>
      </div>
    </section>
  );
}
