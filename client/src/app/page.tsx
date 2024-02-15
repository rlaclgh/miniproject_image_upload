"use client";
import Header from "@/components/header";
import { useGetGalleries } from "@/query/gallery";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const { data: galleries } = useGetGalleries();
  return (
    <div>
      <Header
        renderCenter={() => <div>이미지 갤러리</div>}
        renderRight={() => (
          <button
            className="bg-blue h-8 pr-2 pl-2 rounded-xl"
            onClick={() => {
              router.push("/upload");
            }}
          >
            <span className="text-white text-base">생성</span>
          </button>
        )}
      />

      <div className="flex flex-wrap">
        {galleries?.map((gallery) => {
          return (
            <div className="w-4/12 aspect-square relative">
              <Image
                src={gallery.imageUrl}
                key={gallery.id}
                fill={true}
                alt="갤러리 이미지"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
