import React from "react"

const Banner = () => {
    return (
        <section
            style={{
                backgroundImage: `url("/images/banner.JPG")`,
            }}
            className="h-screen bg-cover bg-no-repeat mt-[-100px] relative text-white flex justify-center items-center xs:h-full xs:py-[120px] sm:w-full sm:py-[120px] "
        >
            <div className="relative z-10 flex container justify-between items-center gap-y-7 ">
                <div
                    className="max-w-[450px] px-10 py-6 rounded-3xl
                 bg-[#00000080] backdrop-blur-sm "
                >
                    <h2 className="text-4xl text-center mb-5 xs:text-3xl ">
                        NHẬN BÁO GIÁ TỪ CHỦ ĐẦU TƯ VẠN XUÂN GROUP & ƯU ĐÃI GIAI ĐOẠN 1 QUA ZALO
                    </h2>
                    {/* <ul className=" list-disc text-lg px-3 xs:text-base ">
                        <li>
                            Nhận nhà ngay nhận ưu đãi{" "}
                            <span style={{ color: "#ff6600" }}>
                                <strong>15 + 8 chỉ vàng</strong>
                            </span>
                        </li>
                        <li className="my-2">
                            Miễn{" "}
                            <span style={{ color: "#ff6600" }}>
                                <strong>0%</strong>
                            </span>{" "}
                            L/S +{" "}
                            <span style={{ color: "#ff6600" }}>
                                <strong>12 tháng</strong>
                            </span>{" "}
                            HTLS
                        </li>
                        <li>
                            <span style={{ color: "#ff6600" }}>
                                <strong>Duy nhất tháng 3 tặng 5,5% + 30 tháng PQL</strong>
                            </span>
                        </li>
                    </ul> */}
                    <div class="relative flex flex-col w-full rounded-xl bg-transparent mt-4 ">
                        <form class=" max-w-screen-lg sm:w-96">
                            <div class="mb-1 flex flex-col gap-4">
                                <div class="w-full max-w-sm min-w-[200px]">
                                    <label class="block mb-2 text-base font-semibold text-white">
                                        Họ và tên:
                                    </label>
                                    <input
                                        type="text"
                                        class="w-full bg-white placeholder:text-[#757575] text-black text-base  rounded-md px-4 py-3 transition duration-300 ease "
                                        placeholder="Nhập họ tên"
                                    />
                                </div>
                                <div class="w-full max-w-sm min-w-[200px]">
                                    <label class="block mb-2 text-base font-semibold text-white">
                                        Điện thoại:
                                    </label>
                                    <input
                                        type="text"
                                        class="w-full bg-white placeholder:text-[#757575] text-black text-base  rounded-md px-4 py-3 transition duration-300 ease "
                                        placeholder="Nhập điện thoại"
                                    />
                                </div>
                                <div class="w-full max-w-sm min-w-[200px]">
                                    <label class="block mb-2 text-base font-semibold text-white">
                                        Email:
                                    </label>
                                    <input
                                        type="text"
                                        class="w-full bg-white placeholder:text-[#757575] text-black text-base  rounded-md px-4 py-3 transition duration-300 ease "
                                        placeholder="Nhập Email"
                                    />
                                </div>
                            </div>

                            <button
                                class="mt-7 w-full max-w-[150px] block rounded-md bg-[#F1BE78] py-3.5 px-5.5 xs:p-[10px_20px]  mx-auto border-[2px] border-white text-center text-lg text-black transition-all  hover:text-white  hover:bg-[#0d152c] "
                                type="button"
                            >
                                Gửi thông tin
                            </button>
                        </form>
                    </div>
                </div>
                <span></span>
            </div>
        </section>
    )
}

export default Banner
