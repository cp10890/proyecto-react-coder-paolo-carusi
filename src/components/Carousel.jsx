import React from 'react';

const Carousel = () => {
    return (
        <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="true"
        >
            <div class="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img
                        src="images/GoW_Ragnarok_bnr.jpg"
                        class="d-block w-100"
                        alt="God Of War: Ragnarok"
                    />
                </div>
                <div class="carousel-item">
                    <img
                        src="images/DRG_Banner.png"
                        class="d-block w-100"
                        alt="Deep Rock Galactic"
                    />
                </div>
                <div class="carousel-item">
                    <img
                        src="images/COD_MWII_Banner.png"
                        class="d-block w-100"
                        alt="Call of Duty: Modern Warfare II"
                    />
                </div>
            </div>
            <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
