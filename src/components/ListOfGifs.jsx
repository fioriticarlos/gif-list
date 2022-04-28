import { useEffect, useState } from 'react'
import Gif from "./Gif"
import getGifs from '../services/getGifs'

export default function ListOfGifs ({params}) {
    const {keyword} = params
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    useEffect(function () {
        setLoading(true)
        getGifs({keyword})
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword])

    if (loading) {
        return  'Loading...'
    }

    return <ul className='gifs'>
        { 
            gifs.map(singleGif => 
                <Gif 
                    key={singleGif.id}
                    title={singleGif.title} 
                    id={singleGif.id} 
                    url={singleGif.url} 
                />
            )
        }
    </ul>
}