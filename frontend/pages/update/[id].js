"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";

const update = ({ product }) => {
  const [name, setName] = useState(product.name);
  const [file, setFile] = useState(product.image);
  const [preview, setPreview] = useState(product.url);
  const { push } = useRouter();

  const loadImage = (e) => {
    const image = e.target.files[0];
    console.log(image);
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);

    try {
      await axios.patch(
        `http://localhost:5000/api/products/${product.id}`,
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      );
      push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full max-w-md mx-auto mt-16">
      <form
        className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={updateProduct}
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
            Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            onChange={loadImage}
          />
        </div>
        <div className="my-3">
          {preview ? <img src={preview} width={200} /> : ""}
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default update;

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(
    `http://localhost:5000/api/products/${params.id}`
  );
  const data = await response.json();
  return {
    props: {
      product: data,
    },
  };
};
