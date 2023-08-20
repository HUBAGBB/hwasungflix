import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import { BellIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { useEffect, useState } from 'react' 
import logo from "./logo.png"

function Header() {
        const [isScrolled, setIsScrolled] = useState(false) 

        useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 0) {
                    setIsScrolled(true)
                } else {
                    setIsScrolled(false)
                }
            }

            window.addEventListener('scroll', handleScroll)

            return () => {
                window.removeEventListener('scroll' , handleScroll)
            }
        }, [])

    return (
        <header className={`${isScrolled && "bg-zinc-900"}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img src="https://i.imgur.com/aT6r755.png" alt="" width={100} height={100} className="cursor-pointer object-contain" />

                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink">태그검색</li>
                    <li className="headerLink">요일별 신작</li>
                    <li className="headerLink">테마추천</li>
                    <li className="headerLink">찜한 애니</li>
                    <li className="headerLink">멤버십</li>
                </ul>
            </div>

            <div className="flex items-center space-x-7 test-sm">
                <MagnifyingGlassIcon className="h-6 w-6 sm:inline"/>
                <BellIcon className="hidden h-6 w-6 sm:inline"/>
                <Link href="/account">
                    <img src="https://thumbnail.laftel.net/profiles/default/ddad1788-ad54-4aad-81fb-f3c96ed082ed.jpg" alt="" width={30} height={30} className="cursor-pointer rounded"/>
                </Link>
            </div>
        </header>
    )
}

export default Header