import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Slider from "react-slick";
// import list from "../../public/list.json";
import Card from "./Card";
function Freebook() {
  // const filterData = list.filter((data) => data.category === "free");
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((data) => data.category === "free")
        setBook(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    getBook();
  }, []);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur . Temporibus asperiores fuga
            dolorum rem architecto ipsum inventore nobis facilis cum amet odit
            exercitationem dolorem culpa, facere laudantium similique corporis
            provident consequatur! Ab veniam, beatae eum voluptates dolores
            necessitatibus? Molestias, iste.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
