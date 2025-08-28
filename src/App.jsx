import { useState, useEffect } from 'react'
import './App.css'
import Pagination from './components/Pagination';
import Searcher from './components/Searcher';
import Table from './components/Table';
import Modal from './components/Modal';

function App() {
  const API_URL = 'https://swapi.info/api'
  const itemsPerPage = 5;
  const planetsUrls = []



  const fetchPlanets = async () => {
    const newMap = {}
    const requests = planetsUrls.map((url) => fetch(url))
    const responses = await Promise.all(requests);
    const promises = await Promise.all(responses.map((response) => response.json()))

    const planetsNames = promises.map(planet => {
      newMap[planet.url] = planet.name
      return planet.name
    })
    setMapPlanets(newMap)
  }


  //States
  const [characters, setCharacters] = useState([])
  const [mapPlanets, setMapPlanets] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);




  //Api call
  useEffect(() => {
    fetch(`${API_URL}/people`)
      .then((res) => res.json())
      .then((json) => {
        setCharacters(json)
        json.forEach(character => {
          if (!planetsUrls.includes(character.homeworld)) {
            planetsUrls.push(character.homeworld)
          }
        })
        fetchPlanets()
      })
  }, [])

  // console.log(characters)


  //Searcher
  let filteredData = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // console.log(filteredData)

  // filteredData = filteredData.slice(indexOfFirstItem, indexOfLastItem)

  //Pagination 
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  let indexOfLastItem = currentPage * itemsPerPage;
  let indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentCharacters = filteredData.slice(indexOfFirstItem, indexOfLastItem);


  //Handlers
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (term) => {
    setSearchTerm(term)

    setCurrentPage(1) //Reset pagination

    // indexOfFirstItem = 0
    // indexOfLastItem = 5
    // itemsPerPage = filteredData.length
  }

  const handleCharacter = (character) => {
    setSelectedCharacter(character)
  }

  const handleClose = () => {
    setSelectedCharacter(null)
  }

  return (
    <>
      <h1>Práctica técnica</h1>
      <Searcher term={searchTerm} handleSearch={handleSearch} />
      <Table filteredCharacters={currentCharacters} planets={mapPlanets}
        handleCharacter={handleCharacter} />
      <Pagination handleChange={handlePageChange} currentPage={currentPage}
        totalPages={totalPages} itemsPage={itemsPerPage} />

      {selectedCharacter &&
        <Modal selectedCharacter={selectedCharacter} onClose={handleClose} />}
    </>
  )
}

export default App
