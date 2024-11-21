import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ResellerSlider = () => {
    return (
        <>
            <div className="ResellerSlider" style={{ backgroundColor: 'black', overflowX:'hidden' }}>
                <div
                    style={{ width: '95%', margin: '20px auto' }}>
                    <Swiper
                        slidesPerView={4}
                        loop={true}
                        autoplay={{
                            delay: 1000,
                        }}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay]}
                        className="ResellerSwiper"
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            567: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            767: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            992: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <img
                                src="https://assets.tripplite.com/large-image/sr48ub-front-l.jpg"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                           
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                              CPU Installation and Setup
                            </button>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                src="https://stl.tech/wp-content/uploads/2023/01/Routers-in-networking.jpg"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                                ROUTER
                            </button>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                src="https://www.phoenix.com/wp-content/uploads/green-circuit-board.jpg"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                                Computer Hardware Upgrades

                            </button>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                src="https://5.imimg.com/data5/TE/DC/GM/SELLER-1683937/local-control-panels-lcp--500x500.jpg"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                                Server Settings
                            </button>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                src="https://upsonlinestore.com/wp-content/uploads/2021/05/WPL150-12N-480x480-1.jpg"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                               Battery Installation 
                            </button>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9cYP5KO9DYNDolcPDOk60JZ-C3RWsdkB80g&s"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                                Electrical Wiring Installation
                            </button>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                src="https://e6f7jzv78yj.exactdn.com/wp-content/uploads/2017/08/Power-Cables-lineup-1170x585.jpg?strip=all&lossy=1&ssl=1"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                               Fyber Wiring Installation
                            </button>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bzXhZKO7f1JkZ3yqQzybkOLz-eIU7VTzsA&s"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                                Industrial Equipment Repairs
                            </button>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyvQub-4-h9eNxHwjE9nd7ibYUq-M4mEbF9w&s"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                                Boards Repairs
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://cdn.mrmahir.com/uploads/380feccd-201f-43f9-9888-a83542a31548.jpg"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                                Home Appliance Repairs
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://www.pcworld.com/wp-content/uploads/2023/04/kingston-nvme.jpg?quality=50&strip=all"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                                Computer Hardware Upgrades

                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://propakistani.pk/how-to/wp-content/uploads/2020/07/9-2.png"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                                Laptop Screen Replacements
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://propakistani.pk/how-to/wp-content/uploads/2020/06/1-26.jpg"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                                Smartphone Screen Repairs
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIdVJVCO8ANnsLvce1EngT3IN6RtEZRrDEEw&s"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                                TV Mounting and Setup
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-install-a-washing-machine-step-1.jpg"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                                Washing Machine Installation
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlQ1bsDbvrXuWhdthLsmTh7h3IdkAvdQbRJA&s"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                               Refrigerator Repair Services
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://greenhouseplumbing.com/wp-content/uploads/2022/05/Air-Conditioner-Contractor.jpg"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                                Air Conditioner Installation 
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://www.ifixutah.com/wp-content/uploads/2024/03/Male-Worker-Repairing-microwave-oven-in-kitchen.jpg"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                                Microwave Repair  
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://cheapplumber.ca/wp-content/uploads/2023/11/dishwasher-installation-650x433.png"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                               Dishwasher Installation
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7iOMOtCnRry7T2L8nsTAoHX9pskVcdAcJjQ&s"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                               Switch
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgBOZMrQi3X3Tka15QaTRhR37OB2ocM_BxZg&s"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                               Modem
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://wpdistrict.sitelock.com/wp-content/uploads/2016/06/Firewall.png"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                               Firewall Installation
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://media.licdn.com/dms/image/v2/D5612AQFnd37Rh4Zx3A/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1682498396668?e=1736985600&v=beta&t=qLIfzcQKDwzAGGp1J_Jn5hkb5HNcs0FlRHzNzOzg38M"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                              Access Point (AP)
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDXO58xabmbD4iCtpCt2kJumrHYYLcZY01fQ&s"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                              USB Hub Installation & Setup
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://i.ytimg.com/vi/ai5bFPVToMU/maxresdefault.jpg"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >Gateway Installation 
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://www.elprocus.com/wp-content/uploads/bridge-in-computer-network.jpg"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                               Network Bridge Installation
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSay9n-LmFBHSFzYDzxbxj4VjfogkE4WsP_FQ&s"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                               Network Interface Card (NIC)
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://cdn.shopify.com/s/files/1/1268/5407/files/different-types-of-wifi-repeater_large.jpg?v=1588621565"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                               Repeater Installation
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55Zz_Cbn5e0kL7shlRETG-XvYd9r9oQS4SA&s"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                               Load Balancer Setup
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://brightdata.com/wp-content/uploads/2024/05/How-proxy-servers-work.png"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                              Proxy Server Setup
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://zeve.au/wp/uploads/2023/12/diy-home-plumbing-projects.jpg"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                              Plumbing Hardware Installation
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://www.familyhandyman.com/wp-content/uploads/2017/06/FH10MAY_508_06_034-1200.jpg?fit=640%2C824"
                                className="h-full border border-2 "
                                style={{ maxWidth: '260px', height: '50vh' }}
                                alt=""
                            />
                            <button
                                type="button"
                                className="px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3"
                                style={{ backgroundColor: '#009BDD' }}
                            >
                               Lighting Fixture Installation
                            </button>
                        </SwiperSlide>
                      
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default ResellerSlider;
