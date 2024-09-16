import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";

// Correction pour l'icône de marqueur par défaut
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapDisplay = () => {
  const [position, setPosition] = useState(null); // Position initiale
  const [restaurants, setRestaurants] = useState([]);
  const [positionFound, setPositionFound] = useState(false); // État pour vérifier si la position a été trouvée

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          console.log("Position obtenue :", pos);
          setPosition([pos.coords.latitude, pos.coords.longitude]);
          setPositionFound(true);
          searchRestaurants(pos.coords.latitude, pos.coords.longitude); // Recherche des restaurants dès que la position est obtenue
        },
        (error) => {
          console.error("Erreur de géolocalisation :", error);
          setPosition([48.8566, 2.3522]); // Paris comme fallback
          setPositionFound(true);
          searchRestaurants(48.8566, 2.3522); // Recherche des restaurants à Paris
        }
      );
    } else {
      console.log("La géolocalisation n'est pas supportée par ce navigateur.");
      setPosition([48.8566, 2.3522]); // Paris comme fallback
      setPositionFound(true);
      searchRestaurants(48.8566, 2.3522); // Recherche des restaurants à Paris
    }
  }, []);

  const searchRestaurants = async (latitude, longitude) => {
    const apiKey = "052a9a708a6042bd978f813b9a65ed3e"; // Remplacez par votre clé API Geoapify

    try {
      const response = await axios.get(`https://api.geoapify.com/v2/places`, {
        params: {
          categories: "catering.restaurant", // Catégorie pour les restaurants
          filter: `circle:${longitude},${latitude};500`, // Rayon de 500 mètres
          apiKey: apiKey,
          limit: 10, // Limiter le nombre de résultats
        },
      });
      console.log("Restaurants trouvés :", response.data.features); // Ajoutez ce log
      setRestaurants(response.data.features);
    } catch (error) {
      console.error("Erreur lors de la recherche des restaurants:", error);
    }
  };

  return (
    <div className="h-[400px] w-full">
      {positionFound ? (
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {position && (
            <Marker position={position}>
              <Popup>Vous êtes ici</Popup>
            </Marker>
          )}
          {restaurants.map((restaurant) => (
            <Marker
              key={restaurant.properties.id}
              position={[
                restaurant.geometry.coordinates[1],
                restaurant.geometry.coordinates[0],
              ]}
            >
              <Popup>
                <strong>{restaurant.properties.name}</strong>
                <br />
                Adresse : {restaurant.properties.address_line1}
                <br />
                Catégorie : {restaurant.properties.categories.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      ) : (
        <div>Chargement de la carte...</div>
      )}
    </div>
  );
};

export default MapDisplay;
