"use client";
import React from "react";
import Layout from "@/components/Layout";
import { OrganizationChart } from "primereact/organizationchart";
import Image from "next/image";

export default function StrukturPage() {
  const data = [
    {
      label: "Ketua BIOS",
      type: "person",
      data: { name: "Jonathan", avatar: "/struktur/jo.png" },
    },
    {
      label: "Wakil Ketua BIOS",
      type: "person",
      data: {
        name: "Vinnzene Fernando Karim",
        avatar: "/struktur/akong.png",
      },
    },
    {
      label: "Ketua Divisi BIOS",
      children: [
        {
          label: "Sekretaris",
          type: "person",
          data: {
            name: "Pheremya Margaretha",
            avatar: "/struktur/stephen.png",
          },
        },
        {
          label: "Tata Usaha",
          type: "person",
          data: {
            name: "Christoper Haris",
            avatar: "/struktur/stephen.png",
          },
        },
        {
          label: "PR",
          type: "person",
          data: { name: "Stephen", avatar: "/struktur/stephen.png" },
        },
        {
          label: "Acara",
          type: "person",
          data: {
            name: "Stephen Sebastian",
            avatar: "/struktur/stephen.png",
          },
        },
        {
          label: "PnD",
          type: "person",
          data: {
            name: "Nico",
            avatar: "/struktur/nico.png",
            department: "Media & Communication",
          },
        },
        {
          label: "CnD",
          type: "person",
          data: {
            name: "Chris",
            avatar: "/struktur/chris.png",
            department: "Visual Design",
          },
        },
        {
          label: "DnP",
          type: "person",
          data: { name: "Kwik Andreas", avatar: "/struktur/kwik.png" },
        },
      ],
    },
  ];

  const nodeTemplate = (node: any) => {
    if (node.type === "person") {
      return (
        <div className="flex flex-col items-center w-48 h-64 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700">
          {/* Avatar dengan ukuran tetap */}
          <div className="relative mb-3 flex-shrink-0">
            <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-emerald-500 shadow-md">
              <Image
                src={node.data.avatar || "/default-avatar.png"}
                alt={node.data.name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/default-avatar.png";
                }}
              />
            </div>
            {/* Status indicator yang lebih kecil */}
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse m-0.5"></div>
            </div>
          </div>

          {/* Name dengan tinggi tetap */}
          <div className="text-center mb-2 h-12 flex items-center justify-center">
            <h3 className="font-bold text-sm text-gray-900 dark:text-white leading-tight text-center line-clamp-2">
              {node.data.name}
            </h3>
          </div>

          {/* Position/Role dengan tinggi tetap */}
          <div className="text-center h-12 flex items-center justify-center">
            <span className="inline-block px-2 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded-full border border-emerald-200 dark:border-emerald-700 text-center line-clamp-2">
              {node.label}
            </span>
          </div>
        </div>
      );
    }
    return (
      <span className="px-3 py-1.5 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm">
        {node.label}
      </span>
    );
  };

  return (
    <Layout
      title="Struktur Organisasi - BIOS"
      description="Struktur Organisasi HIMA BIOS Universitas Bunda Mulia"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 py-12">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Struktur Organisasi
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Kenali tim pengurus HIMA BIOS yang berdedikasi untuk memajukan
              organisasi dan memberikan yang terbaik bagi anggota
            </p>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Organization Chart Container */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 md:p-8 border border-gray-100 dark:border-gray-700 overflow-x-auto">
            <div className="flex justify-center items-start">
              <div className="w-full">
                <OrganizationChart
                  value={data}
                  nodeTemplate={nodeTemplate}
                  className="organization-chart-custom"
                />
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
            <p>Periode 2024/2025 • HIMA BIOS Universitas Bunda Mulia</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
