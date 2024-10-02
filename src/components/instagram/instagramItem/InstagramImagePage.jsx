import React from 'react'
import { useParams } from 'react-router-dom'
import { instagram } from '../../../constants/instagram'

function InstagramImagePage() {
    const { id } = useParams()
    const imgData = instagram.find(c => c.id === Number(id))
    console.log(id, imgData)
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={imgData.img} alt="" width={'200px'} height={'200px'} />
        </div>
    )
}

export default InstagramImagePage