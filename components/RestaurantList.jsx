import { useEffect, useState } from "react"
import { RestaurantCard } from "./RestaurantCard.jsx"
import { useRouter } from "next/router.js"
import api from "@/api.js"

export function RestaurantList() {
    const [restaurantList, setRestaurantList] = useState(null)
    const [restaurantLoading, setRestaurantLoading] = useState(true)
    const [restaurantError, setRestaurantError] = useState(false)
    const router = useRouter()

    useEffect(() => {
        api.get('/restaurants/')
        .then(res => {
            setRestaurantList(res.data.result)
            setRestaurantLoading(false)
        })
        .catch(err => {
            console.log(err)
            setRestaurantError(true)
        })
    }, [restaurantLoading])

    const onClickRestaurant = (name) => {
        const urlName = encodeURI(name)
        router.push(`/${urlName}`)
    }

    if (restaurantLoading) {
        return <>Loading...</>
    }

    if (restaurantError) {
        return <>Error al cargar los restaurantes.</>
    }


    return(
        <>
            <div className="container mx-auto p-4">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-center text-2xl text-black font-bold mb-4">Restaurantes</h2>
                    <div className="flex flex-col gap-1.5">
                        {restaurantList.map((item, index) => (
                            <RestaurantCard key={index} 
                            name={item.name} 
                            address={item.address} 
                            image={'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png'}
                            handleOnClick={onClickRestaurant}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}