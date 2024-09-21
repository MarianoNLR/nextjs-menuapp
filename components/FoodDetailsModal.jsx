import Image from "next/image"
import { useState } from "react"

export function FoodDetailsModal(props) {
    const [quantity, setQuantity] = useState(1)
    console.log('aa', props.data.Restaurant.name)
    const handleSubQuantity = () => {
        setQuantity(prev => {
            if (prev <= 1) return prev

            return prev - 1
        })
    }

    const handleAddQuantity = () => {
        setQuantity(prev => {
            return prev + 1
        })

    }

    const addToOrder = () => {
        let order = JSON.parse(localStorage.getItem(`order`)) //Controlar si existe
        if (order) { //Si existe simplemente agrego o modifico
            order.items[props.data.id] = {dish: {id: props.data.id, name: props.data.name, description: props.data.description, unitPrice: props.data.price, restaurantId: props.data.Restaurant.id}, quantity}
        } else { // Si no existe creo order en el local storage y guardo el plato
            localStorage.setItem(`order`, JSON.stringify({items: {}, total:0}))
            order = JSON.parse(localStorage.getItem(`order`))
            order.items[props.data.id] = {dish: {id: props.data.id, name: props.data.name, description: props.data.description ,unitPrice: props.data.price, restaurantId: props.data.Restaurant.id}, quantity}
        }
        let total = 0

        // Recorrer los items y calcular el total
        for (const key in order.items) {
            console.log(order.items[key].dish.unitPrice)
            total += parseFloat(order.items[key].dish.unitPrice) * order.items[key].quantity
        }
        order.total = total
        localStorage.setItem(`order`, JSON.stringify(order))
    }
    return (
        <>
            <div className="modal-container absolute flex justify-center items-center top-0 left-0 w-full h-full bg-[#0a0a0a36] z-0">
                <div className="modal-main relative flex flex-col gap-8 z-10 bg-white p-8 rounded-lg w-1/2 items-center text-black">
                <button className="absolute top-5 right-10 p-2" onClick={(e) => props.setShowModal(prev => !prev)}>X</button>
                    <div>
                        <div className="modal-image-wrapper">
                            <Image
                            className=""
                            alt= 'Imagen Comida'
                            src='https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png'
                            width={200}
                            height={200} />
                        </div>
                        <div className="modal-details-wrapper flex flex-col items-center gap-2">
                            <div className="modal-details-name text-2xl">
                                {props.data.name}
                            </div>
                            <div className="modal-details-description text-lg">
                                {props.data.description}
                            </div>
                            <div className="modal-details-price text-xl">
                                ${props.data.price}
                            </div>
                        </div>
                    </div>
                    <div className="modal-controls-wrapper flex flex-col gap-4 align-center items-center">
                        <div className="modal-controls-quantity flex gap-4 items-center">
                            <div className="modal-control-sub border p-2 rounded-lg">
                                <button type="button" className="text-2xl" onClick={(e) => handleSubQuantity(e)}>-</button>
                            </div>
                            <div className="modal-control-text text-2xl">
                                {quantity}
                            </div>
                            <div className="modal-control-add p-2 border rounded-lg">
                                <button type="button" className="text-2xl" onClick={(e) => handleAddQuantity(e)}>+</button>
                            </div>
                        </div>
                        <div className="modal-controls-add-to-cart bg-black text-white p-2 rounded-lg">
                            <button className="text-2xl px-4" type="submit" onClick={(e) => addToOrder(e)}>Agregar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}