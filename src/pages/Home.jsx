import React, { useState } from "react"
import { Banner } from "../components/layouts"

const Home = () => {
    const [imgSrc, setImgSrc] = useState(
        "https://happyone-sora.net/wp-content/uploads/2025/03/thiet-ke-can-1-phong-ngu-happy-one-sora.jpg"
    )
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    return (
        <main>
            <Banner />
            {/* Phong cách kiến trúc */}
            <section
                id="tong-quan"
                className="container pb-10 pt-20 lg:max-w-full "
            >
                <h2 className="text-5xl text-center xs:text-4xl ">
                    <span className="text-[#f1be78]">HAPPY ONE SORA</span> - TỔNG QUAN DỰ ÁN
                </h2>
                {/* <p className="mt-2.5 max-w-[80%] text-center mx-auto ">
                    Singapore được xem là thiên đường của kiến trúc xanh độc đáo bậc nhất thế giới,
                    là nguồn cảm hứng bất tận cho rất nhiều công trình cao tầng. Tại{" "}
                    <strong>Happy One Central</strong> chúng tôi mang đến trải nghiệm sống hoàn hảo
                    mang phong cách của quốc đảo sư tử, đưa thiên nhiên tràn ngập mọi không gian,
                    len lỏi vào từng giác quan, đánh thức sự sáng tạo và khơi nguồn cho những ý
                    tưởng.
                </p> */}
                <span className=" flex justify-center items-center mt-3 mb-5 mx-auto  ">
                    <img
                        className="max-w-[200px]"
                        src="https://canhohappyone.com.vn/app/images/line.svg"
                        alt="line"
                    />
                </span>
                <div className="flex justify-between items-center xs:flex-col-reverse sm:flex-col-reverse gap-y-6 ">
                    <div className=" w-full max-w-[50%] xs:max-w-full sm:max-w-full ">
                        <div class="relative flex flex-col w-full h-full  text-[#333]    ">
                            <table class="w-full max-w-full text-left table-auto    ">
                                <tbody>
                                    {[
                                        {
                                            name: "Chủ đầu tư:",
                                            desc: "Công Ty Cổ Phần Đầu Tư BĐS Vạn Xuân Bình Dương – Vạn Xuân Group",
                                        },
                                        {
                                            name: "Vị trí:",
                                            desc: "27 đường số 9, phường Linh Xuân, Thủ Đức",
                                        },
                                        {
                                            name: "Quy mô:",
                                            desc: "• Tổng diện tích: 6,687m²  • Mật độ xây dựng: 34.9%",
                                        },
                                        {
                                            name: "Sản phẩm:",
                                            desc: "	507 căn (Căn hộ, Shop, TMDV)",
                                        },
                                        {
                                            name: "Diện tích căn hộ:",
                                            desc: "• Căn 1 phòng ngủ: 46m² – 49m² – 51m² (12%) • Căn 2 phòng ngủ: 59m² – 69m² – 84m² – 87m² (85%) • Căn 3 phòng ngủ: 108m² – 109m² (sân vườn) – 129m² (Duplex – sân vườn)",
                                        },
                                        {
                                            name: "Thời gian bàn giao:",
                                            desc: "Dự kiến Quý IV/2027",
                                        },
                                    ].map((item) => (
                                        <tr>
                                            <td class="py-3 w-1/4 border-b border-[#EDEDED]">
                                                <p class=" text-base font-bold antialiased ">
                                                    {item.name}
                                                </p>
                                            </td>
                                            <td class="py-3 border-b border-[#EDEDED] text-base font-normal antialiased xs:px-2 sm:px-1  ">
                                                {item.desc.includes("•") ? ( // Kiểm tra nếu có dấu "•" thì render dạng danh sách
                                                    <ul>
                                                        {item.desc
                                                            .split("•")
                                                            .filter((item) => item.trim() !== "")
                                                            .map((item, index) => (
                                                                <li
                                                                    className="list-disc"
                                                                    key={index}
                                                                >
                                                                    {item.trim()}
                                                                </li>
                                                            ))}
                                                    </ul>
                                                ) : (
                                                    <p>{item.desc}</p> // Nếu không có dấu "•", render đoạn văn bản bình thường
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* <div className="mx-auto mt-7 w-max  ">
                            <button className="px-5 py-4 rounded mx-auto text-xl text-[#0D152C] font-semibold bg-[#F1BE78] shadow-[0_9px_36px_0_#f1be78] hover:bg-[#0d152c] hover:text-white hover:shadow-[0_9px_36px_0_#0d152c] ">
                                NHẬN TRỌN BỘ TÀI LIỆU DỰ ÁN
                            </button>
                        </div> */}
                    </div>
                    <div className="max-w-[47%] xs:max-w-full sm:max-w-full">
                        <img
                            src="/images/tong-quan.JPG"
                            alt=""
                        />
                    </div>
                </div>
            </section>
            {/* Vị trí */}
            <section
                id="vi-tri"
                className=" py-[78px] mt-[90px]  bg-[#0d152c] "
            >
                <div className="container flex items-center justify-around xs:flex-col gap-y-5 sm:flex-col lg:flex-col sm:max-w-full xl:max-w-full ">
                    <img
                        data-lazyloaded={1}
                        src="https://happyone-sora.net/wp-content/uploads/2025/03/vi-tri-thuc-te-happy-one-sora-linh-xuan.jpg"
                        loading="lazy"
                        decoding="async"
                        width={1200}
                        height={745}
                        data-src="https://happyone-sora.net/wp-content/uploads/2025/03/vi-tri-thuc-te-happy-one-sora-linh-xuan.jpg"
                        className="max-w-[55%] xs:max-w-full sm:max-w-full lg:max-w-full "
                        alt="vi tri thuc te happy one sora linh"
                        data-srcset="https://happyone-sora.net/wp-content/uploads/2025/03/vi-tri-thuc-te-happy-one-sora-linh-xuan.jpg 1200w, https://happyone-sora.net/wp-content/uploads/2025/03/vi-tri-thuc-te-happy-one-sora-linh-xuan-320x199.jpg 320w, https://happyone-sora.net/wp-content/uploads/2025/03/vi-tri-thuc-te-happy-one-sora-linh-xuan-768x477.jpg 768w"
                        data-sizes="auto, (max-width: 1200px) 100vw, 1200px"
                        title="Trang chủ"
                        data-ll-status="loaded"
                        sizes="auto, (max-width: 1200px) 100vw, 1200px"
                        srcSet="https://happyone-sora.net/wp-content/uploads/2025/03/vi-tri-thuc-te-happy-one-sora-linh-xuan.jpg 1200w, https://happyone-sora.net/wp-content/uploads/2025/03/vi-tri-thuc-te-happy-one-sora-linh-xuan-320x199.jpg 320w, https://happyone-sora.net/wp-content/uploads/2025/03/vi-tri-thuc-te-happy-one-sora-linh-xuan-768x477.jpg 768w"
                    />
                    <div className=" max-w-[35%]  xs:max-w-full sm:max-w-full lg:max-w-full flex flex-col items-start gap-4">
                        <h2 className="text-4xl font-semibold text-[#F1BE78]">Vị trí</h2>
                        <p className="text-white text-lg font-semibold ">
                            Happy One Linh Xuân tọa lạc tại số 27 đường số 9, phường Linh Xuân,
                            thành phố Thủ Đức, thành phố Hồ Chí Minh. Sở hữu vị trí đắc địa với
                            nhiều tiện ích xung quanh. Nằm gần các tuyến đường huyết mạch như Quốc
                            lộ 1K, Quốc lộ 1A và Phạm Văn Đồng. Đây là vị trí cửa ngõ khu Đông thành
                            phố, kết nối đồng bộ 3 trọng điểm kinh tế phía nam: TP. Thủ Đức – TP. Dĩ
                            An – TP. Biên Hòa.
                        </p>
                        <p className="text-white text-lg font-semibold ">
                            Giao điểm TP. Thủ Đức – TP. Dĩ An có hệ thống hạ tầng giao thông phát
                            triển cùng các tiện ích ngoại khu đầy đủ như trường học, bệnh viện,
                            trung tâm thương mại và khu vui chơi giải trí (chỉ 5 – 10 phút di
                            chuyển), đảm bảo cho cư dân cuộc sống thuận tiện.
                        </p>
                        <p className="text-white text-lg font-semibold ">
                            Với vị trí chiến lược kết nối đồng bộ, nhanh chóng đến các hạ tầng, tiện
                            ích trong khu vực cùng thiết kế hiện đại và tiện ích đẳng cấp, đây không
                            chỉ là căn hộ thuận tiện cho cuộc sống mà còn có tiềm năng tăng giá trị
                            trong tương lai.{" "}
                        </p>
                        {/* <div className="mx-auto mt-7 w-max  lg:w-full ">
                            <button className="px-5 py-4 rounded border-[2px] border-[#F1BE78] mx-auto text-xl text-[#0D152C] font-semibold bg-[#F1BE78] shadow-[0_9px_36px_0_#f1be78] hover:bg-[#0d152c] hover:text-white hover:shadow-[0_9px_36px_0_#0d152c] ">
                                ĐĂNG KÝ THAM QUAN DỰ ÁN
                            </button>
                        </div> */}
                    </div>
                </div>
            </section>
            {/* Cuộc Sống Tiện Nghi */}
            <section className=" bg-[#ffe6d0] py-10">
                {" "}
                <div className="container">
                    <h2 className="text-5xl text-center xs:text-4xl ">
                        Cuộc Sống Tiện Nghi Tận Cửa Tại
                        <span className="text-[#f1be78]"> Happy One Sora</span>
                    </h2>
                    <span className=" flex justify-center items-center mt-3 mb-5 mx-auto">
                        <img
                            className="max-w-[200px]"
                            src="https://canhohappyone.com.vn/app/images/line.svg"
                            alt="line"
                        />
                    </span>
                </div>
                <div className=" container grid grid-cols-1 gap-2 xs:grid-cols-1 px-3 sm:grid-cols-1 sm:max-w-full lg:grid-cols-1 lg:max-w-full xl:grid-cols-1 ">
                    <div class="text-xl hidden py-7  flex-col gap-2.5 xs:py-0 sm:py-0 lg:py-3 ">
                        <p>
                            Hướng đến xây dựng một cộng đồng sống văn minh, thân thiện với môi
                            trường để tạo nên giá trị phát triển bền vững, tạo nên sức hút khác biệt
                            nhờ sở hữu 68 tiện ích nội khu ấn tượng dành riêng cho cư dân.
                        </p>
                        <p>
                            Hòa hợp cùng thiên nhiên với hai sảnh căn hộ được kết nối bởi hồ cá Koi,
                            lấy ánh sáng từ đài phun nước nghệ thuật ở tầng 3, tạo không khí trong
                            lành và mặt hồ lấp lánh từ quảng trường ánh sáng, mang lại vượng khí cho
                            các chủ nhân sống tại <strong>Happy One Central</strong>.
                        </p>
                        <p>
                            Khu vui chơi trẻ em tại tầng 3 và phòng tranh nghệ thuật tại tầng 20 là
                            nơi khơi nguồn cảm hứng sáng tạo cho trẻ nhỏ.
                        </p>
                        <p>
                            Phát triển thể chất toàn diện với combo tiện ích chăm sóc sức khỏe như:
                            khu vực yoga, phòng gym với thiết bị hiện đại, hồ bơi vô cực, khuôn viên
                            nội bộ,… thỏa sức vận động.
                        </p>
                        <p>
                            Ngoài ra, những tiện ích đặc quyền như vườn treo nghệ thuật, cầu không
                            trung, sảnh đón thượng hạng, sky bar trên không, quảng trường ánh sáng,
                            đài phun nước nghệ thuật,… giúp gia chủ tận hưởng những giá trị sống
                            sang trọng nhất, đẳng cấp nhất, góp phần khiến Happy One Central trở
                            thành căn hộ đáng mơ ước đối với cư dân Bình Dương.
                        </p>
                    </div>

                    <div>
                        <img
                            data-lazyloaded={1}
                            src="/images/tien-nghi-1.JPG"
                            loading="lazy"
                            decoding="async"
                            width={1200}
                            height={675}
                            className=" m-auto py-7   xl:py-0 xs:py-4 sm:py-4 lg:pt-0 "
                            alt="tien ich ho boi happy one sora"
                            data-sizes="auto, (max-width: 1200px) 100vw, 1200px"
                            data-ll-status="loaded"
                            sizes="auto, (max-width: 1200px) 100vw, 1200px"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 mt-5 gap-4 xs:grid-cols-1 px-3 sm:grid-cols-1 lg:grid-cols-1 lg:mt-0 xs:mt-0 sm:mt-0 ">
                    {[
                        "tien-nghi-2.JPG",
                        "tien-nghi-3.JPG",
                        "tien-nghi-4.JPG",
                        "tien-nghi-5.JPG",
                    ].map((img) => (
                        <div key={img}>
                            <img
                                data-lazyloaded={1}
                                src={`/images/${img}`}
                                loading="lazy"
                                decoding="async"
                                width={1200}
                                height={675}
                                className=" m-auto"
                                data-sizes="auto, (max-width: 1200px) 100vw, 1200px"
                                data-ll-status="loaded"
                                sizes="auto, (max-width: 1200px) 100vw, 1200px"
                            />
                        </div>
                    ))}
                    {/* <div>
                        <img
                            data-lazyloaded={1}
                            src="https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-ho-boi-sac-mau-happy-one-sora.jpg"
                            loading="lazy"
                            decoding="async"
                            width={1200}
                            height={675}
                            className=" m-auto  mix-blend-darken"
                            data-sizes="auto, (max-width: 1200px) 100vw, 1200px"
                            data-ll-status="loaded"
                            sizes="auto, (max-width: 1200px) 100vw, 1200px"
                        />
                    </div>
                    <div>
                        <img
                            data-lazyloaded={1}
                            src="https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-khu-vui-choi-tre-em-happy-one-sora.jpg"
                            loading="lazy"
                            decoding="async"
                            width={1200}
                            height={675}
                            data-src="https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-khu-vui-choi-tre-em-happy-one-sora.jpg"
                            className=" m-auto  mix-blend-darken"
                            alt="tien ich khu vui choi tre em happy one sora"
                            data-srcset="https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-khu-vui-choi-tre-em-happy-one-sora.jpg 1200w, https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-khu-vui-choi-tre-em-happy-one-sora-320x180.jpg 320w, https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-khu-vui-choi-tre-em-happy-one-sora-768x432.jpg 768w"
                            data-sizes="auto, (max-width: 1200px) 100vw, 1200px"
                            title="Trang chủ"
                            data-ll-status="loaded"
                            sizes="auto, (max-width: 1200px) 100vw, 1200px"
                            srcSet="https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-khu-vui-choi-tre-em-happy-one-sora.jpg 1200w, https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-khu-vui-choi-tre-em-happy-one-sora-320x180.jpg 320w, https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-khu-vui-choi-tre-em-happy-one-sora-768x432.jpg 768w"
                        />
                    </div>
                    <div>
                        <img
                            data-lazyloaded={1}
                            src="https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-khu-vui-choi-tre-em-trong-nha-happy-one-sora.jpg"
                            loading="lazy"
                            decoding="async"
                            width={1200}
                            height={675}
                            data-src="https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-khu-vui-choi-tre-em-trong-nha-happy-one-sora.jpg"
                            className=" m-auto  mix-blend-darken"
                            alt="tien ich khu vui choi tre em trong nha happy one sora"
                            data-srcset="https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-khu-vui-choi-tre-em-trong-nha-happy-one-sora.jpg 1200w, https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-khu-vui-choi-tre-em-trong-nha-happy-one-sora-320x180.jpg 320w, https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-khu-vui-choi-tre-em-trong-nha-happy-one-sora-768x432.jpg 768w"
                            data-sizes="auto, (max-width: 1200px) 100vw, 1200px"
                            title="Trang chủ"
                            data-ll-status="loaded"
                            sizes="auto, (max-width: 1200px) 100vw, 1200px"
                            srcSet="https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-khu-vui-choi-tre-em-trong-nha-happy-one-sora.jpg 1200w, https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-khu-vui-choi-tre-em-trong-nha-happy-one-sora-320x180.jpg 320w, https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-khu-vui-choi-tre-em-trong-nha-happy-one-sora-768x432.jpg 768w"
                        />
                    </div>
                    <div>
                        <img
                            data-lazyloaded={1}
                            src="https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-phong-lam-viec-happy-one-sora.jpg"
                            loading="lazy"
                            decoding="async"
                            width={1200}
                            height={675}
                            data-src="https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-phong-lam-viec-happy-one-sora.jpg"
                            className=" m-auto  mix-blend-darken"
                            alt="tien ich phong lam viec happy one sora"
                            data-srcset="https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-phong-lam-viec-happy-one-sora.jpg 1200w, https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-phong-lam-viec-happy-one-sora-320x180.jpg 320w, https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-phong-lam-viec-happy-one-sora-768x432.jpg 768w"
                            data-sizes="auto, (max-width: 1200px) 100vw, 1200px"
                            title="Trang chủ"
                            data-ll-status="loaded"
                            sizes="auto, (max-width: 1200px) 100vw, 1200px"
                            srcSet="https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-phong-lam-viec-happy-one-sora.jpg 1200w, https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-phong-lam-viec-happy-one-sora-320x180.jpg 320w, https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-phong-lam-viec-happy-one-sora-768x432.jpg 768w"
                        />
                    </div> */}
                </div>
            </section>{" "}
            {/* Mặt bằng tiện ích */}
            {/* <section
                id="mat-bang"
                className="container py-10 sm:max-w-full "
            >
                <h2 className="text-5xl text-center ">Mặt bằng tiện ích</h2>
                <span className=" flex justify-center items-center mt-3 mb-5 mx-auto">
                    <img
                        className="max-w-[200px]"
                        src="https://canhohappyone.com.vn/app/images/line.svg"
                        alt="line"
                    />
                </span>
                <div className="flex justify-around items-start xs:flex-col sm:flex-col lg:flex-col gap-y-7 gap-x-5 ">
                    <div className="flex flex-col flex-wrap gap-2.5 max-w-[15%] w-full items-start xs:flex-row xs:max-w-full sm:max-w-full sm:flex-row lg:max-w-full lg:flex-row ">
                        {["Tầng trệt", "Tầng 03", "Tầng 20", "Tầng 40"].map((item) => (
                            <button
                                key={item}
                                className="px-4  py-3 rounded w-full sm:w-[48%] lg:w-[23%] text-left  mx-auto text-lg text-[#0D152C] font-medium bg-[#eee]  hover:bg-[#0d152c] hover:text-white  "
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <div>
                        <img
                            // className=" max-w-[1050px]"
                            width={1100}
                            height={736}
                            data-src="https://web.hn.ss.bfcplatform.vn/canhohappyone/element/1-hp-564837546g.jpg"
                            src="https://web.hn.ss.bfcplatform.vn/canhohappyone/element/1-hp-564837546g.jpg"
                            alt="Tầng trệt"
                        />
                    </div>
                </div>
            </section> */}
            {/* Mặt bằng điển hình */}
            <section
                id="mat-bang"
                className="container pt-20 pb-10 "
            >
                <h2 className="text-5xl text-center xs:text-4xl ">Mặt bằng tầng điển hình</h2>
                <span className=" flex justify-center items-center mt-3 mb-5 mx-auto">
                    <img
                        className="max-w-[200px]"
                        src="https://canhohappyone.com.vn/app/images/line.svg"
                        alt="line"
                    />
                </span>
                <div>
                    <img
                        data-lazyloaded={1}
                        src="https://happyone-sora.net/wp-content/uploads/2025/03/mat-bang-can-ho-happy-one-sora.jpg"
                        loading="lazy"
                        decoding="async"
                        width={1200}
                        height={848}
                        data-src="https://happyone-sora.net/wp-content/uploads/2025/03/mat-bang-can-ho-happy-one-sora.jpg"
                        className="mx-auto"
                        alt="mat bang can ho happy one sora"
                        data-srcset="https://happyone-sora.net/wp-content/uploads/2025/03/mat-bang-can-ho-happy-one-sora.jpg 1200w, https://happyone-sora.net/wp-content/uploads/2025/03/mat-bang-can-ho-happy-one-sora-320x226.jpg 320w, https://happyone-sora.net/wp-content/uploads/2025/03/mat-bang-can-ho-happy-one-sora-1132x800.jpg 1132w, https://happyone-sora.net/wp-content/uploads/2025/03/mat-bang-can-ho-happy-one-sora-768x543.jpg 768w"
                        data-sizes="auto, (max-width: 1200px) 100vw, 1200px"
                        title="Trang chủ"
                        data-ll-status="loaded"
                        sizes="auto, (max-width: 1200px) 100vw, 1200px"
                        srcSet="https://happyone-sora.net/wp-content/uploads/2025/03/mat-bang-can-ho-happy-one-sora.jpg 1200w, https://happyone-sora.net/wp-content/uploads/2025/03/mat-bang-can-ho-happy-one-sora-320x226.jpg 320w, https://happyone-sora.net/wp-content/uploads/2025/03/mat-bang-can-ho-happy-one-sora-1132x800.jpg 1132w, https://happyone-sora.net/wp-content/uploads/2025/03/mat-bang-can-ho-happy-one-sora-768x543.jpg 768w"
                    />
                </div>
                {/* <div className="mx-auto mt-10 w-max   ">
                    <button className="px-5 py-4 rounded mx-auto text-xl text-[#0D152C] font-semibold bg-[#F1BE78] shadow-[0_9px_36px_0_#f1be78] hover:bg-[#0d152c] hover:text-white hover:shadow-[0_9px_36px_0_#0d152c] ">
                        NHẬN THIẾT KẾ CHI TIẾT
                    </button>
                </div> */}
            </section>
            {/* Thiết kế */}
            <section
                id="thiet-ke"
                className="container pt-20 pb-10 sm:max-w-full "
            >
                <h2 className="text-5xl text-center xs:text-4xl ">Thiết kế</h2>
                <span className=" flex justify-center items-center mt-3 mb-7 mx-auto  ">
                    <img
                        className="max-w-[200px]"
                        src="https://canhohappyone.com.vn/app/images/line.svg"
                        alt="line"
                    />
                </span>
                <div className="flex justify-around items-start xs:flex-col sm:flex-col lg:flex-col gap-y-7 gap-x-5 ">
                    <div className="flex flex-col flex-wrap gap-2.5 max-w-[18%] w-full items-start xs:flex-row xs:max-w-full sm:max-w-full sm:flex-row lg:max-w-full lg:flex-row ">
                        {[
                            {
                                name: "Căn 1 Phòng Ngủ",
                                img: "https://happyone-sora.net/wp-content/uploads/2025/03/thiet-ke-can-1-phong-ngu-happy-one-sora.jpg",
                            },
                            {
                                name: "Căn 1+1 Phòng Ngủ",
                                img: "https://happyone-sora.net/wp-content/uploads/2025/03/thiet-ke-can-2-phong-ngu-1-happy-one-sora.jpg",
                            },
                            {
                                name: "Căn 2 Phòng Ngủ",
                                img: "https://happyone-sora.net/wp-content/uploads/2025/03/thiet-ke-can-2-phong-ngu-happy-one-sora.jpg",
                            },
                            {
                                name: "Căn 3 Phòng Ngủ",
                                img: "https://happyone-sora.net/wp-content/uploads/2025/03/thiet-ke-can-3-phong-ngu-happy-one-sora.jpg",
                            },
                        ].map((item) => (
                            <button
                                key={item.name}
                                onClick={() => {
                                    setImgSrc(item.img)
                                }}
                                className="px-4  py-3 rounded w-full sm:w-[48%] lg:w-[48%] text-left  mx-auto text-lg text-[#0D152C] font-normal bg-[#eee]  hover:bg-[#0d152c] hover:text-white  "
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                    <div>
                        <img
                            data-lazyloaded={1}
                            src={imgSrc}
                            loading="lazy"
                            decoding="async"
                            width={1967}
                            height={2048}
                            data-sizes="auto, (max-width: 1967px) 100vw, 1967px"
                            title="Trang chủ"
                            data-ll-status="loaded"
                            sizes="auto, (max-width: 1967px) 100vw, 1967px"
                        />
                    </div>
                </div>
                {/* <div className="mx-auto mt-10 w-max   ">
                    <button className="px-5 py-4 rounded mx-auto text-xl text-[#0D152C] font-semibold bg-[#F1BE78] shadow-[0_9px_36px_0_#f1be78] hover:bg-[#0d152c] hover:text-white hover:shadow-[0_9px_36px_0_#0d152c] ">
                        BẢNG GIÁ CÁC CĂN HIỆN CÒN
                    </button>
                </div> */}
            </section>
            {/* Nhà mẫu căn hộ 1 phòng ngủ */}
            <section
                id="nha-mau"
                className="container pt-20 pb-10 sm:max-w-full lg:max-w-full "
            >
                <h2 className="text-5xl text-center xs:text-4xl ">Nhà mẫu căn hộ 1 phòng ngủ</h2>
                <span className=" flex justify-center items-center mt-3 mb-7 mx-auto">
                    <img
                        className="max-w-[200px]"
                        src="https://canhohappyone.com.vn/app/images/line.svg"
                        alt="line"
                    />
                </span>
                <div className="flex flex-wrap justify-center gap-6 ">
                    {[
                        "https://happyone-sora.net/wp-content/uploads/2025/03/nha-mau-2-happy-one-sora-768x512.jpg",
                        "https://happyone-sora.net/wp-content/uploads/2025/03/nha-mau-3-happy-one-sora-768x512.jpg",
                        "https://happyone-sora.net/wp-content/uploads/2025/03/nha-mau-happy-one-sora-768x512.jpg",
                        "https://happyone-sora.net/wp-content/uploads/2025/03/nha-mau-4-happy-one-sora-768x512.jpg",
                        "https://happyone-sora.net/wp-content/uploads/2025/03/nha-mau-5-happy-one-sora-768x512.jpg",
                        "https://happyone-sora.net/wp-content/uploads/2025/03/nha-mau-6-happy-one-sora-768x512.jpg",
                    ].map((item) => (
                        // <img
                        //     key={item}
                        //     className=" max-w-[31%]   xs:max-w-full sm:max-w-[40%] lg:max-w-[30%]"
                        //     width={1200}
                        //     height={801}
                        //     data-src="https://web.hn.ss.bfcplatform.vn/canhohappyone/element/1-hp-5748hf84387t6456.jpg"
                        //     src="https://web.hn.ss.bfcplatform.vn/canhohappyone/element/1-hp-5748hf84387t6456.jpg"
                        //     alt="HAPPY ONE CENTRAL - Căn hộ Bình Dương"
                        // />
                        <img
                            key={item}
                            data-lazyloaded={1}
                            src={item}
                            loading="lazy"
                            decoding="async"
                            width={1200}
                            height={800}
                            className=" max-w-[31%]   xs:max-w-full sm:max-w-[40%] lg:max-w-[30%]"
                            data-sizes="auto, (max-width: 1200px) 100vw, 1200px"
                            data-ll-status="loaded"
                            sizes="auto, (max-width: 1200px) 100vw, 1200px"
                        />
                    ))}
                </div>
            </section>
            {/* Nhà mẫu căn hộ 2 phòng ngủ */}
            {/* <section className="container py-10 sm:max-w-full lg:max-w-full ">
                <h2 className="text-5xl text-center ">Nhà mẫu căn hộ 2 phòng ngủ</h2>
                <span className=" flex justify-center items-center mt-3 mb-7 mx-auto">
                    <img
                        className="max-w-[200px]"
                        src="https://canhohappyone.com.vn/app/images/line.svg"
                        alt="line"
                    />
                </span>
                <div className="flex flex-wrap justify-center gap-6 ">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                        <img
                            key={item}
                            className=" max-w-[31%]  xs:max-w-full sm:max-w-[40%] lg:max-w-[30%]"
                            width={1200}
                            height={801}
                            data-src="https://web.hn.ss.bfcplatform.vn/canhohappyone/element/1-hp-5748hf84387t6456.jpg"
                            src="https://web.hn.ss.bfcplatform.vn/canhohappyone/element/1-hp-5748hf84387t6456.jpg"
                            alt="HAPPY ONE CENTRAL - Căn hộ Bình Dương"
                        />
                    ))}
                </div>
            </section> */}
            {/* Hình ảnh thực tế */}
            {/* <section
                id="hinh-anh"
                className="container py-10 sm:max-w-full lg:max-w-full  "
            >
                <h2 className="text-5xl text-center ">Hình ảnh thực tế</h2>
                <span className=" flex justify-center items-center mt-3 mb-7 mx-auto">
                    <img
                        className="max-w-[200px]"
                        src="https://canhohappyone.com.vn/app/images/line.svg"
                        alt="line"
                    />
                </span>
                <div className="flex flex-wrap justify-center gap-3 ">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <img
                            key={item}
                            className="max-w-[24%] xs:max-w-full sm:max-w-[40%] lg:max-w-[30%]"
                            width={1200}
                            height={800}
                            data-src="https://web.hn.ss.bfcplatform.vn/canhohappyone/element/1-hp-78ruj34g.jpg"
                            src="https://web.hn.ss.bfcplatform.vn/canhohappyone/element/1-hp-78ruj34g.jpg"
                            alt="HAPPY ONE CENTRAL - Căn hộ Bình Dương"
                        />
                    ))}
                </div>
                <div className="mx-auto mt-10 w-max   ">
                    <button className="px-5 py-4 rounded mx-auto text-xl text-[#0D152C] font-semibold bg-[#F1BE78] shadow-[0_9px_36px_0_#f1be78] hover:bg-[#0d152c] hover:text-white hover:shadow-[0_9px_36px_0_#0d152c] ">
                        NHẬN TIẾN ĐỘ THÁNG 4/2025
                    </button>
                </div>
            </section> */}
            {/* Tiện ích */}
            <section
                id="tien-ich"
                className="px-5 pb-10 pt-20 "
            >
                <h2 className="text-5xl text-center xs:text-4xl ">Tiện ích</h2>
                <span className=" flex justify-center items-center mt-3 mb-7 mx-auto">
                    <img
                        className="max-w-[200px]"
                        src="https://canhohappyone.com.vn/app/images/line.svg"
                        alt="line"
                    />
                </span>
                <div className="flex flex-wrap justify-center gap-3 xs:flex-col  ">
                    {[
                        "https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-ho-boi-happy-one-sora.jpg",
                        "https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-ho-boi-sac-mau-happy-one-sora.jpg",
                        "https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-khu-vui-choi-tre-em-happy-one-sora.jpg",
                        "https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-khu-vui-choi-tre-em-trong-nha-happy-one-sora.jpg",
                        "https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-phong-lam-viec-happy-one-sora.jpg",
                        "https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-phong-tiec-happy-one-sora.jpg",
                        "https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-phong-tap-nhay-happy-one-sora.jpg",
                        "https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-phong-gym-happy-one-sora.jpg",
                        "https://happyone-sora.net/wp-content/uploads/2025/03/tien-ich-vuon-thu-gian-sky-garden-happy-one-sora.jpg",
                    ].map((item) => (
                        // <img
                        //     key={item}
                        //     className=" max-w-[24%] xs:max-w-full sm:max-w-[40%] lg:max-w-[33%] "
                        //     width={1200}
                        //     height={800}
                        //     data-src="https://web.hn.ss.bfcplatform.vn/canhohappyone/element/1-hp-78ruj34g.jpg"
                        //     src="https://web.hn.ss.bfcplatform.vn/canhohappyone/element/1-hp-78ruj34g.jpg"
                        //     alt="HAPPY ONE CENTRAL - Căn hộ Bình Dương"
                        // />
                        <img
                            key={item}
                            data-lazyloaded={1}
                            src={item}
                            loading="lazy"
                            decoding="async"
                            width={1200}
                            height={675}
                            className=" max-w-[30%] xs:max-w-full sm:max-w-[45%] lg:max-w-[40%] "
                            data-sizes="auto, (max-width: 1200px) 100vw, 1200px"
                            title="Trang chủ"
                            data-ll-status="loaded"
                            sizes="auto, (max-width: 1200px) 100vw, 1200px"
                        />
                    ))}
                </div>
            </section>
            {/* ĐĂNG KÝ NHẬN THÔNG TIN */}
            <section
                style={{
                    backgroundImage: `url("/images/banner.JPG")`,
                }}
                className="h-full bg-no-repeat mt-10 relative text-white flex justify-center items-center  "
            >
                <div className="relative z-10 flex container justify-between items-center gap-y-7 xs:py-10 sm:py-10 lg:py-[60px] py-20 ">
                    <div className="max-w-[450px] px-10 py-6 rounded-3xl bg-[#00000080] backdrop-blur-sm ">
                        <h2 className="text-4xl text-center mb-5">ĐĂNG KÝ NHẬN THÔNG TIN</h2>
                        <p className="text-lg">
                            Để tìm hiểu thông tin chi tiết, quý khách vui lòng để lại thông tin.
                        </p>
                        <p className="text-lg">
                            Phòng kinh doanh của chúng tôi sẽ liên hệ quý khách trong thời gian sớm
                            nhất.
                        </p>
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
                                    class="mt-7 w-full max-w-[150px] block rounded-md bg-[#F1BE78] py-3.5 px-5.5  mx-auto border-[2px] border-white text-center text-lg text-black transition-all  hover:text-white  hover:bg-[#0d152c] "
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
            <div className="fixed bottom-5 left-5 flex flex-col gap-y-2">
                <div className=" flex justify-center items-center w-[60px] aspect-square p-3 bg-[#00000080] backdrop-blur-sm rounded-full cursor-pointer ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="max-w-[30px]"
                    >
                        <path
                            fill="#005be0"
                            d="M320.5 457C173.868 457 55 338.132 55 191.5 55 116.247 86.315 48.313 136.617 0H122C54.621 0 0 54.621 0 122v268c0 67.379 54.621 122 122 122h268c67.379 0 122-54.621 122-122v-14.617C463.687 425.685 395.753 457 320.5 457z"
                        />
                        <path
                            fill="#fff"
                            d="M390 0H136.617C86.315 48.313 55 116.247 55 191.5c0 61.584 20.974 118.266 56.16 163.306-.118 36.573-10.707 55.705-28.351 68.288 33.334 8.702 59.404-1.247 84.13-14.985C210.289 438.898 263.28 457 320.5 457c75.253 0 143.187-31.315 191.5-81.617V122C512 54.621 457.379 0 390 0z"
                        />
                        <path
                            d="M108.864 291.84v-14.209l74.29-108.709h-74.91v-18.349h100.984v14.209l-74.29 108.71h74.91v18.348H108.864zm156.924 2.346c-6.714 0-12.785-1.253-18.21-3.759s-9.715-6.15-12.865-10.933-4.725-10.645-4.725-17.589c0-5.978 1.149-10.898 3.449-14.761a25.45 25.45 0 019.312-9.174c3.908-2.252 8.277-3.954 13.106-5.104a130.47 130.47 0 0114.761-2.621l15.451-1.828c3.954-.483 6.829-1.276 8.622-2.38s2.69-2.897 2.69-5.38v-.483c0-6.023-1.69-10.691-5.07-14.002s-8.405-4.966-15.072-4.966c-6.944 0-12.405 1.529-16.382 4.587s-6.726 6.449-8.243 10.174l-19.383-4.415c2.299-6.438 5.667-11.646 10.105-15.624s9.553-6.874 15.348-8.691 11.887-2.725 18.279-2.725c4.23 0 8.726.495 13.485 1.483a40.3 40.3 0 0113.382 5.415c4.162 2.621 7.576 6.358 10.243 11.209s4.001 11.14 4.001 18.865v70.358H297.93v-14.485h-.828c-1.334 2.667-3.335 5.289-6.001 7.863s-6.094 4.714-10.277 6.415-9.197 2.551-15.036 2.551zm4.483-16.555c5.701 0 10.588-1.126 14.658-3.38s7.174-5.208 9.312-8.864 3.208-7.576 3.208-11.761v-13.658c-.736.736-2.15 1.414-4.242 2.035s-4.473 1.15-7.139 1.586l-7.794 1.173-6.346.862c-4 .506-7.646 1.357-10.933 2.552s-5.909 2.909-7.863 5.139-2.932 5.185-2.932 8.864c0 5.104 1.885 8.957 5.656 11.554s8.575 3.898 14.415 3.898zm95.88-127.058V291.84h-20.625V150.573h20.625zm72.357 143.406c-9.933 0-18.602-2.276-26.005-6.829s-13.152-10.921-17.245-19.107-6.139-17.75-6.139-28.695c0-10.99 2.046-20.601 6.139-28.833s9.84-14.624 17.245-19.176 16.072-6.829 26.005-6.829 18.6 2.276 26.005 6.829 13.151 10.945 17.244 19.176 6.139 17.843 6.139 28.833c0 10.945-2.046 20.51-6.139 28.695s-9.841 14.554-17.244 19.107-16.072 6.829-26.005 6.829zm.069-17.314c6.438 0 11.771-1.701 16.003-5.104s7.369-7.932 9.416-13.588 3.069-11.887 3.069-18.693c0-6.76-1.023-12.979-3.069-18.659s-5.185-10.243-9.416-13.692-9.565-5.173-16.003-5.173c-6.484 0-11.854 1.724-16.106 5.173s-7.404 8.013-9.45 13.692-3.069 11.899-3.069 18.659c0 6.806 1.023 13.037 3.069 18.693s5.196 10.186 9.45 13.588 9.622 5.104 16.106 5.104z"
                            fill="#005be0"
                        />
                    </svg>
                </div>
                <a
                    href="tel:0916831313"
                    className=" flex justify-center items-center gap-x-2 w-[185px] phoneBg py-2 px-2.5 rounded-full cursor-pointer border-[2px] border-[#fff] xs:hidden "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 74 74"
                        className="svg-icon max-w-[26px] "
                    >
                        <path d="M52.5 72h-31a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h31a5 5 0 0 1 5 5v60a5 5 0 0 1-5 5zm-31-68a3 3 0 0 0-3 3v60a3 3 0 0 0 3 3h31a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z"></path>
                        <path d="M17.5 12h39v2h-39zm0 46h39v2h-39zm15-51h9v2h-9zm5 62a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm27.82-10.58L63.91 51c8.11-8.12 8.11-19.9 0-28l1.41-1.41c8.94 8.92 8.94 21.9 0 30.83zm-4.49-4.48l-1.41-1.42A13.39 13.39 0 0 0 63.66 37a13.39 13.39 0 0 0-4.24-9.52l1.41-1.42A15.53 15.53 0 0 1 65.66 37a15.53 15.53 0 0 1-4.83 10.94zM8.68 52.42c-8.94-8.93-8.94-21.91 0-30.84L10.09 23C2 31.11 2 42.89 10.09 51zm4.49-4.48A15.53 15.53 0 0 1 8.34 37a15.53 15.53 0 0 1 4.83-10.94l1.41 1.42A13.39 13.39 0 0 0 10.34 37a13.39 13.39 0 0 0 4.24 9.52z"></path>
                    </svg>
                    <p className="text-xl font-semibold ">0916 83 1313</p>
                </a>
            </div>
            <button
                onClick={scrollToTop}
                className="fixed bottom-5 right-5 w-10 aspect-square flex justify-center items-center bg-[#00000080] backdrop-blur-sm rounded-full cursor-pointer "
            >
                <svg
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 492.002 492.002"
                    className="svg-icon max-w-5 "
                >
                    <path d="M484.136 328.473L264.988 109.33c-5.064-5.064-11.816-7.844-19.172-7.844-7.208 0-13.964 2.78-19.02 7.844L7.852 328.265C2.788 333.333 0 340.09 0 347.297s2.784 13.968 7.852 19.032l16.124 16.124a26.73 26.73 0 0019.032 7.86c7.208 0 13.964-2.796 19.032-7.86L245.892 198.6l184.056 184.064c5.064 5.06 11.82 7.852 19.032 7.852s13.96-2.792 19.028-7.852l16.128-16.132c10.488-10.492 10.488-27.568 0-38.06z" />
                </svg>
            </button>
        </main>
    )
}

export default Home
