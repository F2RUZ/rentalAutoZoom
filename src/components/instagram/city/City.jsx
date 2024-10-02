import { useEffect } from 'react'
import useData from '../../../hooks/getData';
import { useNavigate } from 'react-router-dom';

function City() {
    const { data, getData } = useData({ url: "cities" });
    useEffect(() => {
        getData()
    }, [])
    const navigate = useNavigate()
    function navigateCars(id) {
        navigate(`/cars/${id}city`)
    }

    return (
        <div style={{
            color: '#fff9', fontSize: "16px",
            marginTop: "7px", textDecoration: "underline"
        }}>
            {data?.map(city => (
                <p key={city.id} style={{ marginTop: '7px' }} onClick={() => navigateCars(city.id)}>{city.name}</p>
            ))}
        </div>
    )
}

export default City