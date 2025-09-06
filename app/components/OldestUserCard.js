"use client";
import { FaUserCircle } from "react-icons/fa";

export default function OldestUserCard({username,address}) {
  return (
    <div className="m-10 text-white flex items-center justify-center">

      <div className="w-64 aspect-square rounded-full border border-white/15 bg-white/5 shadow-2xl flex flex-col items-center justify-center text-center p-6">
        <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-3">
          <FaUserCircle className="w-16 h-16" />
        </div>

        <h3 className="text-base font-semibold mb-1">Our Oldest User</h3>

        <p className="text-sm opacity-90">{username}</p>

        <p className="text-xs opacity-70 mt-2">
          {address}
        </p>
      </div>
    </div>
  );
}
