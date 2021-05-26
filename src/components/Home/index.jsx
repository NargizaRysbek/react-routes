import React, { useEffect, useState } from 'react'
import { Card, Avatar } from 'antd'

export const Home = () => {

    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=10')
        .then(response => response.json())
        .then(json => setPhotos(json))
    }, [])

    return (
        <div style={styles}>
            {
                photos.map((el, id) => {
                    return <Card key={id} style={{ width: 300, margin: 10}}>
                       <Avatar size={60} src={el.thumbnailUrl}/>
                       <h3>{el.title}</h3>
                    </Card>
                }, [])
            }
            

        </div>
    )
}

const styles = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: '1000px',
    overflowY: 'scroll',
    height: '80vh'
}