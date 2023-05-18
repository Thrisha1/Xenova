"use client";

import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ADD_AD } from "@/functions/graphql/queries/ads.mutation";
import { handleImage } from "@/functions/image/upload";

const Submit_ads = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState(null);
  const [file, setFile] = useState(null);
  const [mutateFunction, { mutation_data, loading, error }] =
    useMutation(ADD_AD);

  const onSubmit = async (data) => {
    //   setData(JSON.stringify(data));
    console.log(data.image);
    const keys = await handleImage(Array.from(data.image), "ads/");
    // console.log(keys);
    data.image = keys[0];
    data.expiry = new Date(new Date().getTime() + data.expiry * 86400000); // 86400000 ms in a day
    mutateFunction({variables:data});
    console.log(data);
  };
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto w-full lg:py-16">
          <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new Ad
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} action="#">
            <div class="grid gap-4 sm:grid-cols-4 sm:gap-6">
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Ad Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required=""
                />
              <div class="sm:col-span-2">
                <label
                  for="url"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  URL
                </label>
                <input
                  {...register("url")}
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required=""
                />
              </div>
              </div>
              <div class="w-full">
                <label
                  for="brand"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Ad Customer
                </label>
                <input
                  {...register("customer")}
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Product brand"
                  required=""
                />
              </div>
              <div class="w-full">
                <label
                  for="price"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  {...register("price")}
                  type="number"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  required=""
                />
              </div>
              <div>
                <label
                  for="item-weight"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Images to upload
                </label>
                <input
                  onChange={handleChange}
                  {...register("image")}
                  type="file"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required=""
                />
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  No of days Ads should run
                </label>
                <input
                  {...register("expiry")}
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required=""
                />
              </div>
              <div>
                <label
                  for="item-weight"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Expected Reach
                </label>
                <input
                  {...register("expected_reach")}
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required=""
                />
              </div>
              <div>
                <label
                  for="item-weight"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  No of Clicks
                </label>
                <input
                  {...register("expected_clicks")}
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required=""
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  {...register("description")}
                  rows="8"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              class="inline-flex border-2 items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-500 rounded-lg"
            >
              Submit Ad
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Submit_ads;
