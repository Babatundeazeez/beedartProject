import React from 'react'
import Slider  from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const TestimoniaPage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoPlay: true,
        autoPlaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1200,   //large Screen
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }

            },
            {
                breakpoint: 992,    //medium
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,    //Tablet
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }

            },
            {
                breakpoint: 768, /////Small
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };

    const testimonials = [
        {
            name: "Azeez Babatunde",
            location: "Ibadan, Nigeria",
            image: "/image/profileImage3.jpg",
            text: "I ordered a personalized Arabic calligraphy frame from BeedahArt, and it was absolutely beautiful! The quality , design, and delivery were perfect. Highly recommended!",
            rating: 5,
 
        },
        {
            name: "Mis Mariam Anifowose",
            location: "Sagamu, Ogun State",
            image: "/image/ava1.png",
            text: "The frame I received was exactly what I imagined. Elegant, well-packaged, and perfect for gifting. BeedahArt exceeded my expectations.",
            rating: "4",
        },
        {
            name: "Mrs Aisha Ganiyu",
            location: "Abuja, Nigeria",
            image: "/image/ava2.jpg",
            text: "Beautiful craftsmanship and fast delivery. I’ve already ordered two more! BeedahArt is now my go-to for special gifts.",
            rating: "5",
        },
        {
            name: "Mustaqeem Olasunkami",
            location: "Ibadan, Oyo",
            image: "/image/ava8.png",
            text: "““Beautiful craftsmanship and fast delivery. I’ve already ordered two more! BeedahArt is now my go-to for special gifts.",
            rating: "4",
        },
        {
            name: "Taiwo ",
            location: "Lagos, Nigeria",
            image: "/image/ava3.png",
            text: "Amazing experience! The artwork was unique and the delivery was super fast. I will surely recommend BeedahArt to my friends",
            rating: "5",
        },
        {
            name: "Suliyah Olamilekan",
            location: "Osogbo, Osun",
            image: "/image/ava4.jpg",
            text: "What I love about Beedart is how reliable it is. My first purchase came earlier than expected, and the packaging was excellent. Definitely my go-to e-commerce site now.”",
            rating: "4",
        },
        {
            name: "Khadijah",
            location: "Abeokun Ogun",
            image: "/image/ava5.jpg",
            text: "Beedart gives me the confidence to shop online without stress. The product descriptions are accurate, the pictures are clear, and I always get exactly what I order",
            rating: "5",
        },

    ]

  return (
    <div className='container about-content my-5 mt-5'>
        
        <Slider {...settings}>
            {
                testimonials.map((text, index) => (
                    <div key={index} className=' col-12 col-md-6 col-lg-4 p-3'>
                        <div className='card shadow-sm p-4 border-0 h-100'>
                            <div className='d-flex align-items-center gap-2 mb-3'>
                                <img src={text.image} alt="customer" className='rounded-circle me-3' width= "60" height="60" />

                            </div>
                            <div className=''>
                                <h6 className='mb-0'>{text.name}</h6>
                                <small className='text-muted'>{text.location}</small>

                            </div>
                            <div className='mt-2'>
                                 <p className='fst-italic'>{text.text}</p>
                                <div className='text-warning fs-5'>
                                {"★".repeat(text.rating)}{"★".repeat(5- text.rating)}

                                </div>
                             </div>

                        </div>
                       

                    </div>
                ))
            }

        </Slider>



    </div>
  )
}

export default TestimoniaPage