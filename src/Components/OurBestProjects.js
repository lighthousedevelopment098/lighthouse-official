// import React from 'react'
// import project1 from '../Images/OurProject/SsfSavor.1f5fb754.png'
// import project2 from '../Images/OurProject/Cab5.b7ed8f1d.png'
// import project3 from '../Images/OurProject/FoodChannel.7285e425.png'
// import project4 from '../Images/OurProject/Linkefy.0f4eb2d6.png'
// import project5 from '../Images/OurProject/QuickWays.2f671178.png'
// import project6 from '../Images/OurProject/Vheelo.258e66b7.png'
// import project7 from '../Images/OurProject/RooiBoos.f622512b.png'
// const OurBestProjects = () => {
//     const bg1 = '/services.3b34f62e.png'
//     const bg2 = '/Home-Herobg-c2e4d53f.png'

//     const style = {
//         backgroundImage: `
//             linear-gradient(rgba(144, 240, 231, 0.5), rgba(206, 91, 91, 0.4)),
//             url(${bg2}),
//             url(${bg1})`,
//         backgroundSize: 'contain, cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: ' right, center',
//         backgroundColor: 'white', // Fallback background color
//     };
//     return (
//         <>
//             <div className="OurBestProjecta py-5" style={style}>
//                 <div className="container-fluid text-center">
//                     <h2 className='borderBottom mb-5'><span className=''>Our</span> Best <span className="greenColor">Projects</span></h2>
//                     <div className="projectContainer" style={{ width: '95%', margin: '0px auto' }}>
//                         <ul className="nav p-2 align-items-center  d-flex align-items-center justify-content-center nav-tabs" id="myTab" role="tablist" style={{ backgroundColor: '#ffffff', borderRadius: '10px' }}>
//                             <li className="nav-item" role="presentation">
//                                 <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">All</button>
//                             </li>
//                             <li className="nav-item" role="presentation">
//                                 <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Applicatons</button>
//                             </li>
//                             <li className="nav-item" role="presentation">
//                                 <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Websites</button>
//                             </li>
//                             <li className="nav-item" role="presentation">
//                                 <button className="nav-link" id="ecommerce-tab" data-bs-toggle="tab" data-bs-target="#ecommerce" type="button" role="tab" aria-controls="contact" aria-selected="false">Ecommerce Store</button>
//                             </li>
//                         </ul>

//                         <div className="tab-content p-3 " id="myTabContent">
//                             <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" >
//                                 <div className="row justify-content-between">
//                                     <div className="bestProjectsBoxes rounded-3 bg-transparent p-3" style={{ border: '4px solid #903519', color: 'white' }}>
//                                         <img src="/RooiBoos.f622512b.png" className='img-fluid rounded-3 mb-3' alt="" />
//                                         <h5 style={{ cursor: 'pointer' }}>Rooi Boos</h5>

//                                     </div>
//                                     <div className="bestProjectsBoxes rounded-3 bg-transparent p-3" style={{ border: '4px solid #903519', color: 'white' }}>
//                                         <img src="/RooiBoos.f622512b.png" className='img-fluid rounded-3 mb-3' alt="" />
//                                         <h5 style={{ cursor: 'pointer' }}>Rooi Boos</h5>

//                                     </div>
//                                     <div className="bestProjectsBoxes rounded-3 bg-transparent p-3" style={{ border: '4px solid #903519', color: 'white' }}>
//                                         <img src="/RooiBoos.f622512b.png" className='img-fluid rounded-3 mb-3' alt="" />
//                                         <h5 style={{ cursor: 'pointer' }}>Rooi Boos</h5>

//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
//                             <div className="row justify-content-between">
//                                     <div className="bestProjectsBoxes rounded-3 bg-transparent p-3" style={{ border: '4px solid #903519', color: 'white' }}>
//                                         <img src={project1} className='img-fluid rounded-3 mb-3' alt="" />
//                                         <h5 style={{ cursor: 'pointer' }}>Rooi Boos</h5>

//                                     </div>
//                                     <div className="bestProjectsBoxes rounded-3 bg-transparent p-3" style={{ border: '4px solid #903519', color: 'white' }}>
//                                         <img src={project2} className='img-fluid rounded-3 mb-3' alt="" />
//                                         <h5 style={{ cursor: 'pointer' }}>Rooi Boos</h5>

//                                     </div>
//                                     <div className="bestProjectsBoxes rounded-3 bg-transparent p-3" style={{ border: '4px solid #903519', color: 'white' }}>
//                                         <img src={project3} className='img-fluid rounded-3 mb-3' alt="" />
//                                         <h5 style={{ cursor: 'pointer' }}>Rooi Boos</h5>

//                                     </div>
//                                     <div className="bestProjectsBoxes rounded-3 bg-transparent p-3" style={{ border: '4px solid #903519', color: 'white' }}>
//                                         <img src={project4} className='img-fluid rounded-3 mb-3' alt="" />
//                                         <h5 style={{ cursor: 'pointer' }}>Rooi Boos</h5>

//                                     </div>
//                                     <div className="bestProjectsBoxes rounded-3 bg-transparent p-3" style={{ border: '4px solid #903519', color: 'white' }}>
//                                         <img src={project5} className='img-fluid rounded-3 mb-3' alt="" />
//                                         <h5 style={{ cursor: 'pointer' }}>Rooi Boos</h5>

//                                     </div>
//                                     <div className="bestProjectsBoxes rounded-3 bg-transparent p-3" style={{ border: '4px solid #903519', color: 'white' }}>
//                                         <img src={project6} className='img-fluid rounded-3 mb-3' alt="" />
//                                         <h5 style={{ cursor: 'pointer' }}>Rooi Boos</h5>

//                                     </div>
//                                     <div className="bestProjectsBoxes rounded-3 bg-transparent p-3" style={{ border: '4px solid #903519', color: 'white' }}>
//                                         <img src={project7} className='img-fluid rounded-3 mb-3' alt="" />
//                                         <h5 style={{ cursor: 'pointer' }}>Rooi Boos</h5>

//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
//                             <div className="row justify-content-between">
//                                     <div className="bestProjectsBoxes rounded-3 bg-transparent p-3" style={{ border: '4px solid #903519', color: 'white' }}>
//                                         <img src="/RooiBoos.f622512b.png" className='img-fluid rounded-3 mb-3' alt="" />
//                                         <h5 style={{ cursor: 'pointer' }}>Rooi Boos</h5>

//                                     </div>
//                                     <div className="bestProjectsBoxes rounded-3 bg-transparent p-3" style={{ border: '4px solid #903519', color: 'white' }}>
//                                         <img src="/RooiBoos.f622512b.png" className='img-fluid rounded-3 mb-3' alt="" />
//                                         <h5 style={{ cursor: 'pointer' }}>Rooi Boos</h5>

//                                     </div>
//                                     <div className="bestProjectsBoxes rounded-3 bg-transparent p-3" style={{ border: '4px solid #903519', color: 'white' }}>
//                                         <img src="/RooiBoos.f622512b.png" className='img-fluid rounded-3 mb-3' alt="" />
//                                         <h5 style={{ cursor: 'pointer' }}>Rooi Boos</h5>

//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="tab-pane fade" id="ecommerce" role="tabpanel" aria-labelledby="ecommerce-tab">
//                                 <div className="row justify-content-between">
//                                     <div className="bestProjectsBoxes rounded-3 bg-transparent p-3" style={{ border: '4px solid #903519', color: 'white' }}>
//                                         <img src="/RooiBoos.f622512b.png" className='img-fluid rounded-3 mb-3' alt="" />
//                                         <h5 style={{ cursor: 'pointer' }}>Rooi Boos</h5>

//                                     </div>
//                                     <div className="bestProjectsBoxes rounded-3 bg-transparent p-3" style={{ border: '4px solid #903519', color: 'white' }}>
//                                         <img src="/RooiBoos.f622512b.png" className='img-fluid rounded-3 mb-3' alt="" />
//                                         <h5 style={{ cursor: 'pointer' }}>Rooi Boos</h5>

//                                     </div>
//                                     <div className="bestProjectsBoxes rounded-3 bg-transparent p-3" style={{ border: '4px solid #903519', color: 'white' }}>
//                                         <img src="/RooiBoos.f622512b.png" className='img-fluid rounded-3 mb-3' alt="" />
//                                         <h5 style={{ cursor: 'pointer' }}>Rooi Boos</h5>

//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }


// export default OurBestProjects

import React, { useState } from "react";
import project1 from '../Images/OurProject/SsfSavor.1f5fb754.png'
import project2 from '../Images/OurProject/Cab5.b7ed8f1d.png'
import project3 from '../Images/OurProject/FoodChannel.7285e425.png'
import project4 from '../Images/OurProject/Linkefy.0f4eb2d6.png'
import project5 from '../Images/OurProject/QuickWays.2f671178.png'
import project6 from '../Images/OurProject/Vheelo.258e66b7.png'
import project7 from '../Images/OurProject/RooiBoos.f622512b.png'
import project8 from '../Images/OurProject/website/4thGeneration.57249ba4.png'
import project9 from '../Images/OurProject/website/AestheticaPlastika.1980798e.png'
import project10 from '../Images/OurProject/website/Bch.8a4ce993.png'
import project11 from '../Images/OurProject/website/BlackLabelCannabis.78f36887.png'
import project12 from '../Images/OurProject/website/ChampionshipBelts.fe9b71d9.png'
import project13 from '../Images/OurProject/website/Fitthenics.be5c5ff8.png'
import project14 from '../Images/OurProject/website/HairFree.405916f2.png'
import project15 from '../Images/OurProject/website/Illc.4c405dc8.png'
import project16 from '../Images/OurProject/website/IsscOdont.7c9c7a4e.png'
import project17 from '../Images/OurProject/website/KashmirCloth.40f8f6bb.png'
import project18 from '../Images/OurProject/website/PortfolioInDepth.03cbc56f.png'
import project19 from '../Images/OurProject/website/Prp.589999fd.png'
import project20 from '../Images/OurProject/website/Virsa.581aefc6.png'
import project21 from '../Images/OurProject/website/UltimateAdventureTours.e26508da.png'
import project22 from '../Images/OurProject/website/Tks.8dd29ce6.png'
import project23 from '../Images/OurProject/website/RoyalMate.f852bace.png'
import project33 from '../Images/OurProject/website/Web Development Post.jpg'
import project25 from '../Images/OurProject/Ecom/Artisan.a3e2e9b5.png'
import project26 from '../Images/OurProject/Ecom/AshhKaro.e9ef2943.png'
import project27 from '../Images/OurProject/Ecom/Fashionably.51df3095.png'
import project28 from '../Images/OurProject/Ecom/KokoBazar.2bfe438b.png'
import project29 from '../Images/OurProject/Ecom/Luks.0219f089.png'
import project30 from '../Images/OurProject/Ecom/ShakuGems.a0ee1beb.png'
import project31 from '../Images/OurProject/Ecom/StShop.6dcc1e36.png'
import project24 from '../Images/OurProject/Ecom/VapourSmoke.a943487b.png'
// Sample project data
const projects = [
  { id: 1, name: "Ssf Savor", category: "Applications", image: project1 },
  { id: 2, name: "Cab-5", category: "Applications", image: project2 },
  { id: 3, name: "Food Channel", category: "Applications", image: project3 },
  { id: 4, name: "Linkefy", category: "Applications", image: project4 },
  { id: 5, name: "QuickWays", category: "Applications", image: project5 },
  { id: 6, name: "Vheelo", category: "Applications", image: project6 },
  { id: 7, name: "Rooi Boos", category: "Applications", image: project7 },
  { id: 24, name: "VistaMart", category: "Websites", image: project33 },
  { id: 8, name: "4thGeneration", category: "Websites", image: project8 },
  { id: 9, name: "Aesthetica Plastika", category: "Websites", image: project9 },
  { id: 10, name: "Bch", category: "Websites", image: project10 },
  { id: 11, name: "BlackLabelCannabis", category: "Websites", image: project11 },
  { id: 12, name: "ChampionshipBelts", category: "Websites", image: project12 },
  { id: 13, name: "Fitthenics", category: "Websites", image: project13 },
  { id: 14, name: "HairFree", category: "Websites", image: project14 },
  { id: 15, name: "Illc", category: "Websites", image: project15 },
  { id: 16, name: "IsscOdont", category: "Websites", image: project16 },
  { id: 17, name: "KashmirCloth", category: "Websites", image: project17 },
  { id: 18, name: "PortfolioInDepth", category: "Websites", image: project18 },
  { id: 19, name: "Prp", category: "Websites", image: project19 },
  { id: 20, name: "Virsa", category: "Websites", image: project20 },
  { id: 21, name: "UltimateAdventureTours", category: "Websites", image: project21 },
  { id: 22, name: "Tks", category: "Websites", image: project22 },
  { id: 23, name: "RoyalMate", category: "Websites", image: project23 },

  { id: 25, name: "VapourSmoke", category: "Ecommerce Store", image: project24 },

  { id: 26, name: "Artisan", category: "Ecommerce Store", image: project25 },
  
  { id: 27, name: "AshhKaro", category: "Ecommerce Store", image: project26 },
  
  { id:28, name: "Fashionably", category: "Ecommerce Store", image: project27 },
  
  { id: 29, name: "KokoBazar", category: "Ecommerce Store", image: project28 },
  
  { id: 30, name: "Luks", category: "Ecommerce Store", image: project29 },
  
  { id: 31, name: "ShakuGems", category: "Ecommerce Store", image: project30 },
  
  { id: 32, name: "StShop", category: "Ecommerce Store", image: project31 },
];

const OurBestProjects = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [showAll, setShowAll] = useState(false);
  
    const filteredProjects = projects.filter(
      (project) => selectedCategory === "All" || project.category === selectedCategory
    );
  
    // Limit projects to 6 by default
    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);
  
 

  // Filter projects based on selected category
 
  const bg1 = "/";
  const bg2 = "/Home-Herobg-c2e4d53f.png";

  const style = {
    backgroundImage: `
            linear-gradient(rgba(206, 91, 91, 0.4), rgba(144, 240, 231, 0.5)),
            url(${bg2}),
            url(${bg1})`,
    backgroundSize: "contain, cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right, center",
    backgroundColor: "white", // Fallback background color
  };

  return (
    <div className="OurBestProjects py-5" style={style}>
    <div className="container-fluid text-center">
      <h2 className="borderBottom mb-5">
        <span>Our</span> Best <span className="greenColor">Projects</span>
      </h2>
      <div className="projectContainer" style={{ width: "95%", margin: "0 auto" }}>
        {/* Tabs */}
        <ul
          className="nav p-2 d-flex align-items-center justify-content-center nav-tabs"
          id="myTab"
          role="tablist"
          style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}
        >
          {["All", "Applications", "Websites", "Ecommerce Store"].map((category) => (
            <li className="nav-item" role="presentation" key={category}>
              <button
                className={`nav-link ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        {/* Projects Grid */}
        <div className="tab-content p-3">
          <div className="row justify-content-center g-3">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                className="bestProjectsBoxes col-lg-4 col-md-6 col-sm-6 mb-4 gap-2 rounded-3 bg-transparent p-3"
                style={{ border: "4px solid #903519", color: "white" }}
              >
                <img
                  src={project.image}
                  className="img-fluid rounded-3 mb-3"
                  alt={project.name}
                  style={{ height: "400px", }}
                />
                <h5
                  style={{
                    cursor: "pointer",
                    color: "#903519",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  {project.name}
                </h5>
              </div>
            ))}
          </div>

          {/* See More Button */}
          {filteredProjects.length > 6 && (
            <div className="text-center mt-4">
              <button
                className="btn btn-primary"
                onClick={() => setShowAll((prev) => !prev)}
                style={{
                  backgroundColor: "#903519",
                  border: "none",
                  padding: "10px 20px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                {showAll ? "See Less" : "See More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  );
};

export default OurBestProjects;
