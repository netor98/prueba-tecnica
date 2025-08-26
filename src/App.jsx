import { useState, useEffect } from 'react'
import './App.css'
import Pagination from './components/Pagination';
import Searcher from './components/Searcher';
import Table from './components/Table';

function App() {
  const API_URL = 'https://swapi.info/api'
  const itemsPerPage = 5;

  const [characters, setCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  //Api call
  useEffect(() => {
    fetch(`${API_URL}/people`)
      .then((res) => res.json())
      .then((json) => setCharacters(json))
  }, [])

  console.log(characters)


  //Searcher
  let filteredData = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  console.log(filteredData)

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

    setCurrentPage(1)

    // indexOfFirstItem = 0
    // indexOfLastItem = 5
    // itemsPerPage = filteredData.length
  }

  return (
    <>
      <h1>Práctica técnica</h1>
      <Searcher term={searchTerm} handleSearch={handleSearch} />
      <Table filteredCharacters={currentCharacters} />
      <Pagination handleChange={handlePageChange} currentPage={currentPage}
        totalPages={totalPages} itemsPage={itemsPerPage} />
    </>
  )
}

export default App
