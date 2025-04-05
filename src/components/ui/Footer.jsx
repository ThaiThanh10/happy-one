import React from "react"

const Footer = () => {
    return (
        <footer className="bg-[#0D152C] pt-12 xs:pt-8 ">
            <div className="container flex justify-between items-start pb-12 xs:flex-col xs:gap-y-5 xs:pb-8 sm:flex-col sm:gap-y-5 ">
                <div className="max-w-[30%] xs:max-w-full sm:max-w-full text-white flex flex-col gap-y-2 font-semibold  ">
                    <h3 className="text-[#F1BE78] text-xl">THÔNG TIN LIÊN HỆ</h3>
                    <p>Hotline: 0916.83.1313</p>
                    <p>Email: pkd.happyone@gmail.com</p>
                    <p>Địa chỉ: Số 27 đường số 9, Linh Xuân, TP.Thủ Đức</p>
                </div>
                <div className="max-w-[30%] xs:max-w-full sm:max-w-full text-white flex flex-col gap-y-2     ">
                    <h3 className="text-[#F1BE78] text-xl">Chính sách bảo mật thông tin</h3>
                    <ul>
                        {[
                            "Chính sách bảo mật",
                            "Điều khoản sử dụng",
                            "Quy trình dịch vụ",
                            "Giấy phép kinh doanh",
                            "Giấy phép bán hàng",
                        ].map((item) => (
                            <li
                                className="flex gap-x-2.5 mb-1"
                                key={item}
                            >
                                {" "}
                                <svg
                                    fill="#f1be78"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 240.608 240.608"
                                    className="w-4"
                                >
                                    <path d="M208.79 29.972l31.82 31.82L91.763 210.637 0 118.876l31.82-31.82 59.944 59.942L208.79 29.972z" />
                                </svg>
                                {item}
                            </li>
                        ))}
                        <li></li>
                    </ul>
                </div>
                <div className="max-w-[30%] xs:max-w-full sm:max-w-full text-white flex flex-col gap-y-2     ">
                    <h3 className="text-[#F1BE78] text-xl">Đăng ký nhận thông tin</h3>
                    <ul>
                        {[
                            "* Cung cấp những thông tin nhanh chóng & cập nhật mới nhất từ chủ đầu tư.",
                            "* Hỗ trợ quý khách tìm được căn hộ đẹp nhất.",
                            "* Cung cấp bảng giá gốc và tư vấn căn phù hợp với ngân sách.",
                            "* Không thu thêm bất cứ khoản phí nào.",
                            "* Hỗ trợ làm thủ tục trực tiếp với chủ đầu tư, trước và sau bán hàng.",
                        ].map((item) => (
                            <li
                                className="mb-1"
                                key={item}
                            >
                                {item}
                            </li>
                        ))}
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center items-center text-white tex-base bg-[#0b1124] py-2 mt-5">
                Copyright 2025 &copy; HAPPY ONE SORA
            </div>
        </footer>
    )
}

export default Footer
