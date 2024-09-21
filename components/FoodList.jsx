import { useEffect, useState } from "react"
import { FoodCard } from "./FoodCard.jsx"
import { useRouter } from "next/router.js"

export function FoodList({foodList, foodLoading, foodError, handleShowModal}) {
    const router = useRouter()

    // useEffect(() => {
           
    // }, [foodLoading, props.restaurantName])

    // const onClickFood = (data) => {
    //     handleShowModal(data)
    // }

    if (foodLoading) {
        return <>Loading...</>
    }

    if (foodError) {
        return <>Error al cargar los platos.</>
    }


    return(
        <>
            <div className="container mx-auto p-4">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-center text-2xl text-black font-bold mb-4">Platos</h2>
                    <div className="flex flex-col gap-1.5">
                        {foodList.map((item, index) => (
                            <FoodCard key={index} 
                            data={item}
                            name={item.name} 
                            price={item.price}
                            description={item.description} 
                            image={'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png'}
                            handleShowModal={handleShowModal}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}