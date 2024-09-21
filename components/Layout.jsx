import { useState } from "react";
import { Footer } from "./Footer.jsx";
import { Header } from "./Header.jsx";
import { CartDetailsModal } from "./CartDetailsModal.jsx";
export default function Layout ({ children }) {
    const [showCartModal, setShowCartModal] = useState(false)

    const handleCartModal = () => {
        setShowCartModal(true)
    }

    return (
        <>
            <Header handleCartModal={handleCartModal}></Header>
            
            <main className="flex-1">
                {children}
            </main>
            <Footer></Footer>
        </>
    )
}