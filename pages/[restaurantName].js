import { FoodList } from "@/components/FoodList"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { FoodDetailsModal } from "@/components/FoodDetailsModal.jsx"
import CartIcon from '../public/icon-cart.svg'
import api from "@/api.js"
import { CartDetailsModal } from "@/components/CartDetailsModal"

export default function RestaurantHome() {
    const params = useParams()
    const [foodList, setFoodList] = useState(null)
    const [foodLoading, setFoodLoading] = useState(true)
    const [foodError, setFoodError] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState(null)
    const [cartModal, setCartModal] = useState(null)
    const [showCartModal, setShowCartModal] = useState(false)

    useEffect(() => {
        //localStorage.removeItem('order')
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

        // const handleBeforeUnload = (e) => {
        //     e.preventDefault()
        //     localStorage.removeItem('order')
        // }

        // window.addEventListener('beforeunload', handleBeforeUnload);

        // return () => {
        //     window.removeEventListener('beforeunload', handleBeforeUnload);
        // };
        
    }, [foodLoading, params])

    const handleShowModal = (data) => {
        setModalData(data)
        setShowModal(prev => !prev)
        // console.log('Abriendo modal...', data)
    }

    const handleShowCartModal = (data) => {
        setCartModal(data)
        setShowCartModal(true)
    }

    if (!params) {
        return <div>Cargando...</div>
    }

    return (
        <>
            <div className="container mx-auto">
                <h1>Pagina del Restaurante: {params.restaurantName}</h1>
                <div className="container flex mx-auto p-4 align-end justify-end">
                    <button className="flex justify-center align-center items-center gap-2 text-xl bg-white text-black px-2 rounded-lg" onClick={(e) => handleShowCartModal(e)}>
                        <CartIcon width={50} height={50} fill="#fffffff"></CartIcon>
                        Ver carrito
                    </button>
                </div>
                <FoodList foodList={foodList} foodLoading={foodLoading} foodError={foodError} handleShowModal={handleShowModal}></FoodList>
                {showModal && (<FoodDetailsModal data={modalData} setShowModal={setShowModal}></FoodDetailsModal>)}
                {showCartModal && (<CartDetailsModal cartModal={JSON.parse(localStorage.getItem('order'))} setShowCartModal={setShowCartModal}></CartDetailsModal>)}
            </div>
        </>
    )
}