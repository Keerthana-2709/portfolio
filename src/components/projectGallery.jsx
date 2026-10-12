import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./projectGallery.css";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    image: "/arch.jpg",
    title: "2D Designs",
    link: "/2d_designs",
  },
  {
    id: 2,
    image: "/architecture_detailss.png",
    title: "3D Designs",
    link: "/3d_designs",
  },
  {
    id: 3,
    image: "/about_1.jpg",
    title: "Elevation Designs",
    link: "/elevation_designs",
  },
  {
    id: 4,
    image: "/interior.jpg",
    title: "Interior Designs",
    link: "/interior_designs",
  },
];

const ProjectCarousel = () => {
  return (
    <section id="projectGallery" className="portfolio-section">
      <div className="section-heading">
        <h2>Project Gallery</h2>
        <p>Transform Your Space with Precision & Style</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <Link to={project.link} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <h3>{project.title}</h3>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProjectCarousel;