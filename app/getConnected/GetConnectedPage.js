"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { ToastContainer , toast, Slide} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const onSubmit = (data) => {
    toast.success("Form Submitted", {
      position: "top-right",
      autoClose: 2000,   // will disappear after 2s
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Slide,
    });
    // Build WhatsApp message
    const message = `
📌 New Connection Request
--------------------------
Name: ${data.name}
Phone: ${data.number}
House No: ${data.houseNo}
Floor: ${data.floor}
Block: ${data.block}
Type: ${data.type || "N/A"}
Deal: ${data.deal || "N/A"}
Plan: ${data.plan || "N/A"}
Static IP: ${data.static ? "Yes" : "No"}
Router: ${data.router ? "Yes" : "No"}
Cable: ${data.cable ? "Yes" : "No"}
Agree: ${data.agree ? "Yes" : "No"}
    `;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Your WhatsApp number
    const whatsappUrl = `https://wa.me/923162674302?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="mt-20 flex flex-col items-center justify-center min-h-fit py-10 px-6 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-300 mb-6 text-center">
        Let <span className="text-blue-600">Maxnet</span> Connect You to the{" "}
        <span className="text-blue-600">World</span>
      </h1>

      <form
        className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4 w-full max-w-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        {Object.values(errors)[0] && (
          <p className="text-cyan-900 text-lg mt-1">
            {Object.values(errors)[0].message}
          </p>
        )}

        {/* NAME */}
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

        {/* PHONE */}
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

        {/* HOUSE NO */}
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
          {...register("floor", { required: "SELECT FLOOR" })}
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
          {...register("block", { required: "SELECT BLOCK" })}
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
            required: !preSelectedDeal ? "SELECT CONNECTION TYPE" : false,
          })}
          disabled={!!preSelectedDeal}
          className="p-2 border rounded bg-white focus:outline-none focus:ring focus:ring-blue-300 disabled:cursor-not-allowed disabled:bg-gray-200"
        >
          <option value="">Select connection type</option>
          <option value="eth">Ethernet</option>
          <option value="fibre">Fibre to Home</option>
        </select>

        {/* DEAL */}
        <select
          {...register("deal")}
          disabled={!!preSelectedDeal || !!preSelectedPlan}
          className="p-2 border rounded bg-white focus:outline-none focus:ring focus:ring-blue-300 disabled:cursor-not-allowed disabled:bg-gray-200"
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
            required: !preSelectedPlan && !preSelectedDeal ? "SELECT PLAN" : false,
          })}
          disabled={!!preSelectedPlan || !!preSelectedDeal}
          className="p-2 border rounded bg-white focus:outline-none focus:ring focus:ring-blue-300 disabled:cursor-not-allowed disabled:bg-gray-200"
        >
          <option value="">Select Plan</option>
          <option value="P1-102">GPON-Pure-102</option>
          <option value="P2-52">GPON-Pure-52</option>
          <option value="P3-32">GPON-Pure-32</option>
          <option value="P4-27">GPON-Pure-27</option>
          <option value="P5-22">GPON-Pure-22</option>
          <option value="P6-17">GPON-Pure-17</option>
          <option value="P7-10">GPON-Pure-10</option>
        </select>


        {/* STATIC IP */}
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" {...register("static")} className="w-4 h-4" />
          STATIC IP ~ Rs1000/-
        </label>

        {/* router/wire */}
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" {...register("router")} className="w-4 h-4" />
          I have a Wi-Fi Router
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" {...register("cable")} className="w-4 h-4" />
          I have an Ethernet/Fibre Cable
        </label>

        {/* AGREEMENT */}
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
      <ToastContainer />
    </div>
  );
}

export default GetConnectedPage;
