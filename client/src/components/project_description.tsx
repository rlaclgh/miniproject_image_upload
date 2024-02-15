"use client";

const ProjectDescription = () => {
  return (
    <div className="flex items-center h-full flex-col">
      <div className="w-120">
        <div className="text-5xl mb-10 mt-10">miniproject_image_upload</div>
        <div className="text-2xl my-2">1. 프로젝트 설명</div>
        <div className="text-xl my-2">
          1.1 client에서 image 업로드시 server에서 presigned url 발급
        </div>
        <div className="text-xl my-2">
          1.2 client에서 presigned url 로 image s3에 업로드
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
