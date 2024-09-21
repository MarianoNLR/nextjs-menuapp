import { useEffect, useState } from "react"
import { FoodCartCard } from "./FoodCartCard"

export function CartDetailsModal(props) {
    // const [cartData, setCartData] = useState(null)
    // const [loadingCartData, setLoadingCartData] = useState(true)
    
    useEffect(() => {
        
    }, [])

    return (
        <>
            <div className="cart-modal-container absolute flex justify-center items-center top-0 left-0 w-full h-full bg-[#0a0a0a36] z-0">
                <div className="cart-modal-main relative flex flex-col gap-8 z-10 bg-white p-8 rounded-lg w-1/2 items-center text-black">
                <div onClick={(e) => props.setShowCartModal(false)}>X</div>
                {props.cartModal && (
                    <>
                        {Object.entries(props.cartModal.items).map(([key, value]) => (
                            <FoodCartCard key={key} data={value} />
                        ))}
                    </>
                )}
                {!props.cartModal && <h2>No tienes productos en tu carrito.</h2>}
                </div>
                
                    
            </div>
        </>
    )
}