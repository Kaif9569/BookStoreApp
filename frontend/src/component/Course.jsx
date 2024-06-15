import React from "react";
import Card from "./Card";
import list from "../../public/list.json";
import {Link} from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have{""}{" "}
            <span className="text-pink-500">Here!</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            possimus quis est id, suscipit consequuntur placeat deleniti ad quos
            architecto officiis odio ipsa velit dolorem iste corrupti assumenda
            incidunt? Suscipit nulla a ducimus asperiores natus voluptas at
            doloribus officiis ullam, blanditiis aliquam, cumque hic, fugiat
            quibusdam autem porro quas vitae!
          </p>
          <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
              <Card item={item} key={item.id} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Course;
