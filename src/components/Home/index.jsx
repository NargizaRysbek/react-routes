import React, { useEffect, useState } from 'react'
import { Card, Avatar, Spin } from 'antd'

export const Home = () => {

    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true) // дщ того как будет загружаться фотки выйдет спин
        fetch('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=10')
        .then(response => response.json())
        .then(json => {
            setPhotos(json)
            setLoading(false) // после загрузки фотокБ спин пропадет
        })
    }, [])
    

    return (
        <div style={styles}>

             {/* если true выходит спин */}
            
            {
                loading && <div style={{display: 'flex', margin: '50px auto'}}> 
               
                     <Spin/>  loading...
                </div>
               
            }
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