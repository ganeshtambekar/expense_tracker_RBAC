import React, { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    alert("Thank you!");
    // You can add API call or other actions here.
    console.log({ email, name, description });
  };

  return (
    <div>
      <div className="h-3/4 bg-mj-black w-3/5 p-10 rounded-md mx-auto">
        <div className="mx-auto w-fit">
          <div className="text-center mb-10 text-3xl text-mj-yellow font-bold font-lexand">
            Contact Us
          </div>
          <div className="ml-auto mb-10 flex">
            <label className="mr-5 text-xl font-lexand text-mj-yellow mt-1" htmlFor="email">
              Email :
            </label>
            <input
              id="email"
              placeholder="Enter Email"
              className="text-mj-yellow p-2 bg-jp-black h-10 w-3/4 rounded-md ml-1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="ml-auto mb-10 flex">
            <label className="mr-5 text-xl font-lexand text-mj-yellow mt-1" htmlFor="name">
              Name :
            </label>
            <input
              id="name"
              placeholder="Enter Name"
              className="text-mj-yellow p-2 bg-jp-black h-10 w-3/4 rounded-md"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="mr-5 text-xl font-lexand text-mj-yellow mt-1" htmlFor="description">
              Description :
            </label>
            <textarea
              id="description"
              placeholder="Enter your message"
              className="text-mj-yellow p-2 bg-jp-black w-[36rem] rounded-md h-40"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <button
              className="px-10 py-3 bg-mj-yellow text-gray-800 border border-mj-yellow rounded-md hover:bg-gray-800 hover:text-mj-yellow"
              onClick={handleSubmit}
            >
              <span className="font-bold text-lg">SEND</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
