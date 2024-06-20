import React from "react";
// import { Link } from "react-router-dom";
import Login from "./Login";

function Signup() {
  return (
    <>
      <div className="  flex h-screen items-center justify-center ">
        <div id="my_modal_2" className=" shadow-md border-[2px] p-5 rounded-md">
          <div className="">
            {/* <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link> */}
            <h3 className="font-bold text-lg">SignUp</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-80 px-3 py-1 border rounder-md outline-none"
              />
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounder-md outline-none"
              />
            </div>
            {/* password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="text"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounder-md outline-none"
              />
            </div>
            <div className="mt-4 space-y-2 flex justify-around">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p>
                Already Have Account?{""}
                {/* <Link to="/">
                </Link> */}
                <button
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  Login
                </button>
                {""}
                <Login />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
