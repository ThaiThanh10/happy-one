import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

    const headerRef = useRef(null)
    useEffect(() => {
        function scrollHeader() {
            if (window.scrollY > 80) {
                headerRef.current?.classList.add("bg-[#0d152c]")
                headerRef.current?.classList.remove("bg-transparent")
            } else {
                headerRef.current?.classList.remove("bg-[#0d152c]")
            }
        }
        console.log("🚀headerRef---->", headerRef)
        window.addEventListener("scroll", scrollHeader)

        return () => {
            window.removeEventListener("scroll", scrollHeader)
        }
    }, [window.scrollY])
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    return (
        <header
            ref={headerRef}
            className=" bg-transparent sticky top-0 z-30 "
        >
            <div className="container flex justify-between items-center pb-2 ">
                <div className="flex items-center">
                    <Link to={"/"}>
                        <img
                            className="max-w-[150px]"
                            src="https://happyone-sora.net/wp-content/uploads/2025/03/logo-happy-one-sora-menu.png"
                            alt="Logo"
                        />
                    </Link>
                </div>
                <div
                    className={` ${width < 1024
                            ? `" absolute top-full right-0 w-full text-center bg-[#00000080] backdrop-blur-sm py-6 transition-all duration-200 ease origin-top ${isOpen && width < 1024 ? "scale-y-1 " : "scale-y-0"
                            }  "`
                            : " relative  "
                        }  `}
                >
                    <ul className="flex gap-4 xs:flex-col sm:flex-col lg:justify-center">
                        {[
                            { name: "Tổng quan", slug: "tong-quan" },
                            { name: "Vị trí", slug: "vi-tri" },
                            { name: "Mặt bằng", slug: "mat-bang" },
                            { name: "Thiết kế", slug: "thiet-ke" },
                            { name: "Nhà mẫu", slug: "nha-mau" },
                            { name: "Tiện ích", slug: "tien-ich" },
                        ].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.slug}`}
                                    className="text-lg xl:text-base uppercase p-[4px_14px] cursor-pointer text-white font-semibold hover:bg-[#f1be78] hover:text-black rounded-md transition-all duration-200 ease"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <nav className=" bg-transparent relative w-1/3 hidden xs:block sm:block lg:block  ">
                    <div className="flex items-center justify-end ">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            data-collapse-toggle="navbar-hamburger"
                            type="button"
                            className="  w-8 h-8 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar-hamburger"
                            aria-expanded="false"
                        >
                            <svg
                                className="w-5 h-5 mx-auto "
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
