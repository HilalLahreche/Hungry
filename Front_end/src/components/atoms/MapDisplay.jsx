import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

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
          setPosition([pos.coords.latitude, pos.coords.longitude]);
          setPositionFound(true);
        },
        (error) => {
          console.error("Erreur de géolocalisation :", error);
          setPosition([48.8566, 2.3522]); // Paris comme fallback
          setPositionFound(true);
        }
      );
    } else {
      console.log("La géolocalisation n'est pas supportée par ce navigateur.");
      setPosition([48.8566, 2.3522]); // Paris comme fallback
      setPositionFound(true);
    }
  }, []);

  const searchRestaurants = async () => {
    if (!position) return; // Ne rien faire si la position n'est pas encore définie

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=restaurants+near+${position[0]},${position[1]}&format=json&limit=10`
      );
      const data = await response.json();
      setRestaurants(data);
    } catch (error) {
      console.error("Erreur lors de la recherche des restaurants:", error);
    }
  };

  return (
    <div className="h-[400px] w-full">
      <button
        onClick={searchRestaurants}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Rechercher des restaurants à proximité
      </button>
      {positionFound && position ? (
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "calc(100% - 48px)", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>Vous êtes ici</Popup>
          </Marker>
          {restaurants.map((restaurant, index) => (
            <Marker
              key={index}
              position={[
                parseFloat(restaurant.lat),
                parseFloat(restaurant.lon),
              ]}
            >
              <Popup>{restaurant.display_name}</Popup>
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
