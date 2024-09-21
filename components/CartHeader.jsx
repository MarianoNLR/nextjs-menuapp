import { useEffect, useState } from "react"
import CartIcon from '../public/icon-cart.svg'
import { useRouter } from "next/router"

export function CartHeader(props) {
    const [cart, setCart] = useState()

    return (
        <>
            <div onClick={(e) => props.handleCartModal(e)}><CartIcon width={48} height={48} fill='black'></CartIcon></div>
        </>
    )
}