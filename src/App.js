  import React, { useState, useEffect } from 'react';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import Header from './components/Header';
  import Home from './components/Home';
  import Footer from './components/Footer';
  import AppRoutes from './routes/Routes';
 
  //API CONFIGURATION
  const api = {
    url: "https://freetestapi.com/api/v1/animals",
  };
  
  //MAIN APP COMPONENT
  const App = () => {
    const [query, setQuery] = useState(''); //STATE FOR SEARCH QUERY
    const [animals, setAnimals] = useState([]); //STATE FOR STORING FETCHING ANIMALS
    const [isLoading, setIsLoading] = useState(true); //STATE LOADING STATUS
    const [error, setError] = useState(null); //STATE ERROR MESSAGE
    const [modal, setModal] = useState({ isOpen: false }); //STATE MODAL VISIABILUTY  & CONTENT
  

    //FETCH ANIMAL WHEN QUERY CHANGE
    useEffect(() => {
      fetchAnimals(query);
    }, []); //DEPENDENCY ARRAY EMPTY TO FETCH ANIMAL ONLY ON MOUNT
  
    //FETCH ANIMAL FROM API
    const fetchAnimals = (query = '') => {
      setIsLoading(true); //SET LOADING STATE TRUE
      const queryString = query ? `?search=${query}` : ''; 
      const requestUrl = `${api.url}${queryString}`;
     
      fetch(requestUrl)
        .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch animals. Please try again later. 😔");
        }
        return res.json();
      })
      .then((data) => {
        if (data.length === 0) {
          throw new Error("Animal not found. 🐾");
        }
        setAnimals(data); //UPDATE STATE
        setIsLoading(false); //SET LOAD TO FALSE
      })
      .catch((error) => {
        setError(error.message); //SET ERROR MESSAGE
        setIsLoading(false);
      });
    };
  
    //HANDLE CHANGE IN INPUT SEARCH
    const handleSearchChange = (e) => {
      setQuery(e.target.value);
    };
  

    //SANDLE SEARCH FROM SUBMIT
    const handleSearchSubmit = (e) => {
      e.preventDefault();
      fetchAnimals(query); //FETCH ANIMAL BASED CURRENT QUERY
    };
  
    //HANDLE KEY DOWN EVENT
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        // handleSearchSubmit(event);
        fetchAnimals(query);
      }
    };
  
    return (
      <Router>
        {/* Header component with search functionality */}
        <Header 
          query={query}
          handleSearchChange={handleSearchChange}
          handleSearchSubmit={handleSearchSubmit}
          handleKeyDown={handleKeyDown}
        />
        <Routes>
          {/* Home route */}
          <Route 
            path="/" 
            element={
              <Home 
                animals={animals}
                isLoading={isLoading}
                error={error}
                modal={modal}
                setModal={setModal}
              />
            } 
          />
           {/* Other routes */}
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
        {/* Footer component */}
        <Footer/>
      </Router>
    );
  };
  
  export default App;
  