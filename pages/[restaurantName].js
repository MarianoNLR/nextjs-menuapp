import { FoodList } from "@/components/FoodList"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { FoodDetailsModal } from "@/components/FoodDetailsModal.jsx"
import api from "@/api.js"

export default function RestaurantHome() {
    const params = useParams()
    const [foodList, setFoodList] = useState(null)
    const [foodLoading, setFoodLoading] = useState(true)
    const [foodError, setFoodError] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState(null)

    useEffect(() => {
        localStorage.removeItem('order')
        if (params) {
            api.get(`/foods/${params.restaurantName}`)
        .then(res => {
            console.log(res.data.result)
            setFoodList(res.data.result)
            setFoodLoading(false)
        })
        .catch(err => {
            console.log(err)
            setFoodError(true)
        })
        }

        const handleBeforeUnload = (e) => {
            e.preventDefault()
            localStorage.removeItem('order')
        }

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
        
    }, [foodLoading, params])

    const handleShowModal = (data) => {
        setModalData(data)
        setShowModal(prev => !prev)
        // console.log('Abriendo modal...', data)
    }

    if (!params) {
        return <div>Cargando...</div>
    }

    return (
        <>
            <h1>Pagina del Restaurante: {params.restaurantName}</h1>
            <FoodList foodList={foodList} foodLoading={foodLoading} foodError={foodError} handleShowModal={handleShowModal}></FoodList>
            {showModal && (<FoodDetailsModal data={modalData} setShowModal={setShowModal}></FoodDetailsModal>)}
        </>
    )
}