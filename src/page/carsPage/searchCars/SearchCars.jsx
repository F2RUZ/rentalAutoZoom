import React, { useEffect } from 'react'
import useData from '../../../hooks/getData'
import { useParams } from 'react-router'
import FilterCarsCard from '../filterCarsCard/FilterCarsCard'
import "../allCars/AllCars.scss"

const SearchCars = () => {
    const { search } = useParams()
     let url = ''
     if(search.endsWith("keyword")){
        const result = search.split("keyword")[0]
        url = `cars?limit=300&keyword=${result}`
    }else if(search.endsWith("model")){
        const result = search.split("model")[0]
        url = `cars?limit=300&brand_id=${result}`
    }else if(search.endsWith("location")){
      const result = search.split("location")[0]
      url = `cars?limit=300&location_id=${result}`
  }else if(search.endsWith("city")){
    const result = search.split("city")[0]
    url = `cars?limit=300&city_id=${result}`
}else{
        url = `cars?limit=300&category_id=${search}`
    }
    
    
    const { data: carsData, loading, getData: getCarsData } = useData({
        url: url
      })
      useEffect(() => {
        
        getCarsData()
      }, [search])
  return (
    <div className='all-cars'>
        {
             
                loading ? <div className='loading'>Loading...</div> : carsData?.length ?  carsData?.map((item) => (
                  <FilterCarsCard
                      key={item?.id} 
                      id={item?.id}
                      img={item?.car_images}
                      brandName={item?.brand?.title}
                      modelName={item?.model?.name}
                      aed={item?.price_in_aed}
                      usd={item?.price_in_usd}
                  />
              )) : <div className='empty'>Data not found</div>
            
        }
    </div>
  )
}

export default SearchCars