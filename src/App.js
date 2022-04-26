import { useState } from 'react'
import './App.css'
import ListOfGifs from './components/ListOfGifs'
import { Link, Route } from "wouter"
// import Search from './components/Search';

function App() {
    const [keyword, setKeyword] = useState('')

    const handleChange = (event) => {
        setKeyword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setKeyword(event.target.value)
    }

    return (
        <div className="App">
            <section className="App-content">
                <h1 className='pageTitle'> List of Gifs </h1>

                <form className="search" onSubmit={handleSubmit}>
                    <input 
                        className="searchInput"
                        type='text' 
                        value={keyword} 
                        onChange={handleChange}
                        placeholder='Type in...'
                    />
                    <Link to={`/gif/${keyword}`} >
                        <button className="searchButon" onClick={handleChange} type="submit" >Search</button>
                    </Link>
                </form>
                <Route 
                    component={ListOfGifs} 
                    path='/gif/:keyword' 
                />
            </section>
        </div>
    );
}

export default App;
