"use client";
import Header from "@/components/header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
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
    </div>
  );
}
