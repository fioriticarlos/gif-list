import { useState } from "react"

export default function Search ({keyword}) {

    const [newText, setNewText] = useState(keyword)

    const handleChange = (event) => {
        setNewText(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setNewText(event.target.value)
    }

    return (
        <form className="search" onSubmit={handleSubmit}>
            <input 
                className="searchInput"
                type='text' 
                value={newText} 
                onChange={handleChange}
                placeholder='Type in...'
            />
            <button className="searchButon" type="submit" >Search</button>
        </form>
    )
}