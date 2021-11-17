import { useRef } from 'react'
import { FaRegTimesCircle, FaSearch, FaShoppingCart } from 'react-icons/fa'

export function Header() {
    const ref = useRef()
    return (
        <>
            <div className="sticky top-0 z-50 h-14 bg-white py-10 px-40 flex items-center justify-between shadow-xl">
                <img src="/assets/logo.png" alt="" className="h-10" />
            </div>
        </>
    )
}
