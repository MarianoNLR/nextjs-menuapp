import { useEffect, useState } from "react"

export function CartModalDetails(props) {
    const [cartData, setCartData] = useState([])

    useEffect(() => {
        setCartData(JSON.parse(localStorage.getItem('order')))
    }, [])

    if (!props.isOpen) return null

    return (
        <>
            <div className="cart-modal-container">
                <div className="cart-modal-main">
                    <div onClick={(e) => props.setShowCartModal(false)}>X</div>
                    {console.log("modal")}
                </div>
            </div>
        </>
    )
}