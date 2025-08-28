import { useState } from "react"
import { useEffect } from "react"

export default function Modal({ selectedCharacter, onClose }) {

  //Urls
  const filmsUrls = selectedCharacter.films
  const vehiclesUrls = selectedCharacter.vehicles
  const starshipsUrls = selectedCharacter.starships

  const fetchFilms = async () => {
    const requests = filmsUrls.map((url) => fetch(url));
    const responses = await Promise.all(requests);
    const promises = await Promise.all(responses.map((response) => response.json()))
    const titles = promises.map(film => film.title)
    setFilms(titles)
  }


  const fetchVehicles = async () => {
    const requests = vehiclesUrls.map((url) => fetch(url));
    const responses = await Promise.all(requests);
    const promises = await Promise.all(responses.map((response) => response.json()))
    const vehicles = promises.map(vehicle => vehicle.name)
    setVehicles(vehicles)
  }


  const fetchStarships = async () => {
    const requests = starshipsUrls.map((url) => fetch(url));
    const responses = await Promise.all(requests);
    const promises = await Promise.all(responses.map((response) => response.json()))
    const vehicles = promises.map(vehicle => vehicle.name)
    setStarships(vehicles)
  }
  useEffect(() => {

    fetchFilms()
    fetchStarships()
    fetchVehicles()
    // let titles = Promise.all(films.map(url => fetch(url)
    //   .then(res => res.json())
    //   .then(responseJson => responseJson.title)))
    //   .then(titles => {
    //     return titles;
    //   });

  }, [selectedCharacter])


  const [films, setFilms] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [starships, setStarships] = useState([])

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="close-btn">
          <h2>Nombre: {selectedCharacter.name}</h2>
          <button onClick={onClose}>Cerrar</button>
        </div>
        <h3>Peliculas</h3>
        {films.length > 0 ?
          <ol>
            {films.map((film, i) => (<li key={i}> {film}</li>))}
          </ol>
          :
          <p>No hay peliculas</p>
        }

        <h3>Vehiculos</h3>

        {vehicles.length > 0 ?
          <ol>
            {vehicles.map((vehicle, i) => (<li key={i}> {vehicle}</li>))}
          </ol>
          :
          <p>No hay vehiculos</p>
        }

        <h3>Naves</h3>
        {starships.length > 0 ?
          <ol>
            {starships.map((starship, i) => (<li key={i}> {starship}</li>))}
          </ol>
          :
          <p>No hay naves</p>
        }
      </div>
    </div>
  )
}
