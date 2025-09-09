"use client"
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function GetConnectedPage() {
  const searchParams = useSearchParams();
  const preSelectedPlan = searchParams.get("plan");
  const preSelectedDeal = searchParams.get("deal");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting, errors },
  } = useForm();

  useEffect(() => {
    if (preSelectedPlan) {
      setValue("plan", preSelectedPlan);
    }
  }, [preSelectedPlan, setValue]);

  useEffect(() => {
    if (preSelectedDeal) {
      setValue("deal", preSelectedDeal);
    }
  }, [preSelectedDeal, setValue]);

  const delay = (d) =>
    new Promise((resolve) => setTimeout(resolve, d * 1000));

  // const onSubmit = async (data) => {
  //   let r = await fetch("https://maxbackend-production.up.railway.app/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   let res = await r.text();
  //   // console.log(data, res);
  // };
  const onSubmit = async (data) => {
  try {
    const res = await fetch("https://maxbackend-production.up.railway.app/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    console.log(result);
  } catch (err) {
    console.error("Fetch failed:", err);
  }
};


  return (
    <div className="mt-20 flex flex-col items-center justify-center min-h-fit py-10 px-6 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-300 mb-6 text-center">
        Let <span className="text-blue-600">Maxnet</span> Connect You to the{" "}
        <span className="text-blue-600">World</span>
      </h1>

      {isSubmitting && (
        <div className="flex justify-center items-center mb-5">
          <lord-icon
            src="https://cdn.lordicon.com/euaablbm.json"
            trigger="loop"
            stroke="bold"
            state="loop-cycle"
            colors="primary:#ffffff,secondary:#3080e8"
            style={{ width: "30px", height: "30px" }}
          />
        </div>
      )}

      <form
        className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4 w-full max-w-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        {Object.values(errors)[0] && (
          <p className="text-cyan-900 text-lg mt-1">
            {Object.values(errors)[0].message}
          </p>
        )}

        {/* NAME ENTRY */}
        <input
          {...register("name", {
            required: "Name is required",
            minLength: { value: 3, message: "Name must be at least 3 characters" },
            maxLength: { value: 20, message: "Name must be under 20 characters" },
          })}
          type="text"
          placeholder="Name"
          className="p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        />

        <input
          {...register("number", {
            required: "Enter valid number",
            minLength: { value: 11, message: "Must be 11 digits" },
            maxLength: { value: 11, message: "Must be 11 digits" },
            pattern: {
              value: /^[0][0-9]{10}$/,
              message: "Number must start with 0",
            },
          })}
          type="tel"
          placeholder="Phone No"
          className="p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        />

        <input
          {...register("houseNo", {
            required: "House Number Required",
            minLength: 1,
            maxLength: 10,
          })}
          type="text"
          placeholder="House No"
          className="p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        />

        {/* FLOOR */}
        <select
          {...register("floor", {
            required: "SELECT FLOOR",
          })}
          className="p-2 border rounded bg-white focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="">Select Floor</option>
          <option value="ground">Ground</option>
          <option value="1st">1st</option>
          <option value="2nd">2nd</option>
          <option value="3rd">3rd</option>
          <option value="4th">Other</option>
        </select>

        {/* BLOCK */}
        <select
          {...register("block", {
            required: "SELECT BLOCK",
          })}
          className="p-2 border rounded bg-white focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="">Select Block</option>
          <option value="9">Block 9</option>
          <option value="14">Block 14</option>
          <option value="15">Block 15</option>
        </select>

        {/* CONNECTION TYPE */}
        <select
          {...register("type", {
            required: "SELECT CONNECTION TYPE",
          })}
          disabled={!!preSelectedDeal}
          className="p-2 border rounded bg-white focus:outline-none focus:ring focus:ring-blue-300 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-white"
        >
          <option value="">Select connection type</option>
          <option value="eth">Ethernet</option>
          <option value="fibre">Fibre to Home</option>
        </select>

        {/* DEAL */}
        <select
          {...register("deal")}
          disabled={!!preSelectedDeal}
          className="p-2 border rounded bg-white focus:outline-none focus:ring focus:ring-blue-300 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-white"
        >
          <option value="">Select deal</option>
          <option value="d1">Deal One</option>
          <option value="d2">Deal Two</option>
          <option value="d3">Deal Three</option>
          <option value="d4">Deal Four</option>
          <option value="d5">Deal Five</option>
          <option value="d6">Deal Six</option>
          <option value="d7">Deal Seven</option>
        </select>

        {/* PLAN */}
        <select
          {...register("plan", {
            required: "SELECT PLAN",
          })}
          disabled={!!preSelectedPlan || !!preSelectedDeal}
          className="p-2 border rounded bg-white focus:outline-none focus:ring focus:ring-blue-300 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-white"
        >
          <option value="">Select Plan</option>
          <option value="p1">GPON-Pure-102</option>
          <option value="p2">GPON-Pure-52</option>
          <option value="p3">GPON-Pure-32</option>
          <option value="p4">GPON-Pure-27</option>
          <option value="p5">GPON-Pure-22</option>
          <option value="p6">GPON-Pure-17</option>
          <option value="p7">GPON-Pure-10</option>
        </select>

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" {...register("static")} className="w-4 h-4" />
          STATIC IP ~ Rs1000/-
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" {...register("agree")} className="w-4 h-4" />
          All required data is correct
        </label>

        <input
          disabled={isSubmitting || !watch("agree")}
          type="submit"
          value="Submit"
          className="mt-4 p-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition disabled:bg-gray-800"
        />
      </form>
    </div>
  );
}

export default GetConnectedPage;
