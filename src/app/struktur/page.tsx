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
      children: [
        {
          label: "Wakil Ketua BIOS",
          type: "person",
          data: { name: "Jane Smith", avatar: "/struktur/akong.png" },
          children: [
            {
              label: "Sekretaris",
              type: "person",
              data: { name: "Pheremya", avatar: "/struktur/stephen.png" },
            },
            {
              label: "Tata Usaha",
              type: "person",
              data: { name: "Stephen", avatar: "/struktur/stephen.png" },
            },
            {
              label: "Public Relation",
              type: "person",
              data: { name: "Stephen", avatar: "/struktur/stephen.png" },
            },
            {
              label: "Acara",
              type: "person",
              data: { name: "Stephen", avatar: "/struktur/stephen.png" },
            },
            {
              label: "Publication & Documentation",
              type: "person",
              data: { name: "", avatar: "/struktur/.png" },
            },
            {
              label: "Creative & Design",
              type: "person",
              data: { name: "", avatar: "/struktur/.png" },
            },
            {
              label: "Development & Programming",
              type: "person",
              data: { name: "", avatar: "/struktur/kwik.png" },
            },
            
          ],
        },
      ],
    },
  ];

  const nodeTemplate = (node: any) => {
    if (node.type === "person") {
      return (
        <div className="flex flex-col items-center p-2">
          <Image
            src={node.data.avatar}
            alt={node.data.name}
            width={50}
            height={50}
            className=" mb-2"
          />
          <div className="font-bold">{node.data.name}</div>
          <div className="text-sm text-gray-500">{node.label}</div>
        </div>
      );
    }
    return <span>{node.label}</span>;
  };

  return (
    <Layout
      title="Struktur Organisasi - BIOS"
      description="Struktur Organisasi HIMA BIOS Universitas Bunda Mulia"
    >
      <div className="card mt-12 mb-12">
        <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
      </div>
    </Layout>
  );
}
