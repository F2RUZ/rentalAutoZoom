import { useEffect } from 'react'
import useData from '../../../hooks/getData';
import { useNavigate } from 'react-router-dom';

function Location() {
    const { data, getData } = useData({ url: "locations" });
    useEffect(() => {
        getData()
    }, [])
    const navigate = useNavigate()
    function navigateCars(id) {
        navigate(`/cars/${id}locations`)
    }


    return (
        <div style={{
            color: '#fff9', fontSize: "16px",
            marginTop: "7px", textDecoration: "underline"
        }}>
            {data?.map(location => (
                <p key={location.id} style={{ marginTop: '7px' }} onClick={() => navigateCars(location.id)}>{location.name}</p>
            ))}
        </div>
    )
}

export default Location