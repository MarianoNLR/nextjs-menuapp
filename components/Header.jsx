import { useRouter } from "next/router.js";
import { CartHeader } from "./CartHeader.jsx";


export function Header(props) {
    return (
        <>
            <header className="flex w-full h-20 bg-white items-center justify-between">
                <div className="text-4xl ml-4 text-black"><a href="/">TuMenu</a></div>
            </header>
        </>
    )
}