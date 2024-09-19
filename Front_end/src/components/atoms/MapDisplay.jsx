import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";

// Icône personnalisée pour votre position
const userLocationIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  iconRetinaUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

// Icône personnalisée pour les lieux de "catering"
const cateringLocationIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  iconRetinaUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const MapDisplay = () => {
  const [position, setPosition] = useState(null); // Position de l'utilisateur
  const [places, setPlaces] = useState([]); // Lieux de la catégorie "catering"
  const [positionFound, setPositionFound] = useState(false); // Position trouvée

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          console.log("Position obtenue :", pos);
          setPosition([pos.coords.latitude, pos.coords.longitude]);
          setPositionFound(true);
          searchPlaces(pos.coords.latitude, pos.coords.longitude); // Recherche des lieux via Overpass dès que la position est obtenue
        },
        (error) => {
          console.error("Erreur de géolocalisation :", error);
          setPosition([48.8566, 2.3522]); // Paris comme fallback
          setPositionFound(true);
          searchPlaces(48.8566, 2.3522); // Recherche des lieux à Paris
        }
      );
    } else {
      console.log("La géolocalisation n'est pas supportée par ce navigateur.");
      setPosition([48.8566, 2.3522]); // Paris comme fallback
      setPositionFound(true);
      searchPlaces(48.8566, 2.3522); // Recherche des lieux à Paris
    }
  }, []);

  // Fonction pour rechercher les lieux de la catégorie "catering" avec Overpass API
  const searchPlaces = async (latitude, longitude) => {
    const overpassUrl = "https://overpass-api.de/api/interpreter";

    // Requête Overpass pour récupérer les lieux de type "catering"
    const query = `
      [out:json];
      (
        node["amenity"="restaurant"](around:200,${latitude},${longitude});
        node["amenity"="cafe"](around:200,${latitude},${longitude});
        node["amenity"="bar"](around:200,${latitude},${longitude});
        node["amenity"="fast_food"](around:200,${latitude},${longitude});

      );
      out body;
    `;

    try {
      const response = await axios.post(overpassUrl, `data=${query}`);
      console.log("Lieux trouvés :", response.data.elements);
      setPlaces(response.data.elements);
    } catch (error) {
      console.error("Erreur lors de la recherche des lieux:", error);
    }
  };

  return (
    <div className="h-[400px] w-full">
      {positionFound ? (
        <MapContainer
          center={position}
          zoom={17}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Marqueur pour la position de l'utilisateur */}
          {position && (
            <Marker position={position} icon={userLocationIcon}>
              <Popup>Vous êtes ici</Popup>
            </Marker>
          )}
          {/* Marqueurs pour les lieux de la catégorie "catering" */}
          {places.map((place) => (
            <Marker
              key={place.id}
              position={[place.lat, place.lon]}
              icon={cateringLocationIcon}
            >
              <Popup>
                <strong>{place.tags.name || "Lieu sans nom"}</strong>
                <br />
                Type : {place.tags.amenity}
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
