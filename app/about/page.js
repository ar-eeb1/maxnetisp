"use client"
import React from "react";
import Image from "next/image";

import OldestUserCard from "../components/OldestUserCard";

function Page() {
  return (
    <div className="bg-black min-h-screen pt-40">
      {/* About Section */}
      <div className="px-10 md:px-40 py-16">
        <h1 className="text-white text-5xl font-bold mb-6">About Maxnet</h1>
        <p className="text-2xl text-gray-100 leading-relaxed">
          Seventeen years ago, a group of friendly neighbors came together with a simple passion —
          playing Counter-Strike 1.6. To connect with each other, they ran Ethernet wires across
          their homes and built a small local server. What started as a pastime soon grew into
          something much bigger.
          <br /><br />
          That very server has now grown into a vibrant community of <span className="font-bold">1,400+ users</span>.
          This was the beginning of <span className="font-bold">Maxnet</span>, founded by Uzair and Adnan.
          Later, Uzair entrusted the project to his beloved brother Noman, whose dedication and
          tireless efforts turned Maxnet into what it is today.
          <br /><br />
          <span className="font-bold">Alhamdulillah</span>, with pure hard work, passion, and the unwavering
          support of our beloved users, Maxnet has grown to become the <span className="font-bold">one of the best in our area</span>.
          Managed by an experienced and committed team, our promise has always been clear: to deliver
          the best possible service without compromise — and that dedication will never fade.
        </p>
      </div>

      {/* Why Choose Section */}
      <div className="experience bg-white text-center py-20">
        <h1 className="text-4xl md:text-7xl font-extrabold text-cyan-500 mb-6">
          Why Choose MaxNet
        </h1>
        <p className="text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
          With 17 years of experience and a commitment to excellence, we&apos;re not just an ISP —
          we&apos;re your connectivity partner.
        </p>

        {/* Cards Grid */}
        <div className="cards flex flex-wrap justify-center gap-10 items-stretch">
          {[
            {
              src: "/one.svg",
              title: "17 Years of Excellence",
              desc: "Proven track record of delivering reliable internet services since 2007",
            },
            {
              src: "/two.svg",
              title: "1400+ Satisfied Customers",
              desc: "Growing community of homes and businesses that trust MaxNet",
            },
            {
              src: "/three.svg",
              title: "95% Same-Day Complaint Solving",
              desc: "Our team will ensure seamless connectivity",
            },
            {
              src: "/four.svg",
              title: "24/7 Technical Support",
              desc: "Round-the-clock expert assistance whenever you need it",
            },
            {
              src: "/five.svg",
              title: "Lightning Fast Speeds",
              desc: "Fiber-optic technology delivering blazing fast internet",
            },
            {
              src: "/six.svg",
              title: "Local Customer Care",
              desc: "Dedicated local support team that understands your needs",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="w-80 flex flex-col items-center justify-start bg-[#111] p-8 rounded-2xl shadow-lg 
                          transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/50"
            >
              <Image
                src={card.src}
                alt={card.title}
                width={100}
                height={100}
                className="bg-cyan-500 rounded-full p-4 mb-6 shadow-md"
              />
              <h3 className="text-white text-2xl font-bold mb-3 text-center">{card.title}</h3>
              <p className="text-gray-300 text-lg text-center leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Legacy Connections */}
      <h1 className="text-white px-10 md:px-40 mt-12 mb-6">Legacy Connections</h1>
      <OldestUserCard
        username="SOON"
        address="SOON"
      />
      <OldestUserCard
        username="SOON"
        address="SOON"
      />
      <OldestUserCard
        username="SOON"
        address="SOON"
      />

    </div>
  );
}

export default Page;
