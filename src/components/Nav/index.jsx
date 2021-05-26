import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../../data'


export const Nav = () => {
    return (
        <div>
            {
                data.map((link, id) => {
                    return <Link key={id} to={link.route}>
                        {link.name}
                    </Link>
                })
            }
        </div>
    )
}