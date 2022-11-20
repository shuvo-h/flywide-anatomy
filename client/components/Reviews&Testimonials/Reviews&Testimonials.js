import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import styles from "./AllReviews.module.css";

const AllReviews = () => {
  const data = [
    {
      id: 1,
      point: "5.0",
      star: "/Testimonial/Group 1.svg",
      review: `"Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia impedit molestiae minus facere officia vel veniam id et dolore repellat sequi saepe provident, voluptas in, itaque aliquid quae nulla. Mollitia impedit molestiae minus."`,
      buyer: "verified Traveler",
      name: "Mike Hardson",
      designation: "Traveler",
      image: "/Testimonial/testimonial-3.png",
    },
    {
      id: 2,
      point: "5.0",
      star: "/Testimonial/Group 1.svg",
      review: `"Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia impedit molestiae minus facere officia vel veniam id et dolore repellat sequi saepe provident, voluptas in, itaque aliquid quae nulla. Mollitia impedit molestiae minus."`,
      buyer: "verified Traveler",
      name: "Amy Johnson",
      designation: "Traveler",
      image: "/Testimonial/testimonial-3.png",
    },
    {
      id: 3,
      point: "5.0",
      star: "/Testimonial/Group 1.svg",
      review: `"Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia impedit molestiae minus facere officia vel veniam id et dolore repellat sequi saepe provident, voluptas in, itaque aliquid quae nulla. Mollitia impedit molestiae minus."`,
      buyer: "verified Traveler",
      name: "Luaka Smith",
      designation: "Traveler",
      image: "/Testimonial/testimonial-3.png",
    },
    {
      id: 4,
      point: "5.0",
      star: "/Testimonial/Group 1.svg",
      review: `"Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia impedit molestiae minus facere officia vel veniam id et dolore repellat sequi saepe provident, voluptas in, itaque aliquid quae nulla. Mollitia impedit molestiae minus."`,
      buyer: "verified Traveler",
      name: "NORMIN NAK",
      designation: "Traveler",
      image: "/Testimonial/testimonial-3.png",
    },
    {
      id: 5,
      point: "5.0",
      star: "/Testimonial/Group 1.svg",
      review: `"Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia impedit molestiae minus facere officia vel veniam id et dolore repellat sequi saepe provident, voluptas in, itaque aliquid quae nulla. Mollitia impedit molestiae minus."`,
      buyer: "verified Traveler",
      name: "Peter",
      designation: "Traveler",
      image: "/Testimonial/testimonial-3.png",
    },
  ];

  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    //  autoplay: true,
    // speed: 5000,
    // autoplaySpeed: 5000,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.allReviews}>
      <div className="container">
        <h2>REVIEW & TESTIMONIALS</h2>
        <h3>Top Reviews</h3>

        <div>
          <Slider {...settings} className={`reviewSlider ${styles.slider}`}>
            {data.map((item, i) => (
              <div className={` sliderMainDiv`}>
                <div className={`${styles.sliderMain} sliderMain`}>
                  <div className={styles.stars}>
                    <h6>{item.point}</h6>
                    <div>
                      <Image src={item.star} width={102} height={24} />
                    </div>
                  </div>
                  <p className={`${styles.reviews} reviews`}>{item.review}</p>
                  <h5 className={`${styles.verify} verify`}>
                    <i class="ri-checkbox-circle-fill"></i>
                    {item.buyer}
                  </h5>
                  <div className={styles.reviewer}>
                    <div className={styles.reviewerInfo}>
                      <p>{item.name}</p>
                      <h4>{item.designation}</h4>
                    </div>
                    <div className={styles.image}>
                      <Image
                        src="/Testimonial/qsvg.svg"
                        width={100}
                        height={54}
                      />
                    </div>
                  </div>
                  <div className={styles.reviewImage}>
                    <Image src={item.image} width={64} height={64} />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
