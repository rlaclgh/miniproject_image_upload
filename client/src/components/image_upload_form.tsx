"use client";
import { Controller, useForm } from "react-hook-form";
import CameraSVG from "@/public/camera.svg";
import XmarkSVG from "@/public/x-mark.svg";
import Image from "next/image";
import TextButton from "./text_button";

interface FormProps {
  imageUrl: string;
}

const ImageUploadForm = () => {
  const { control, formState, getValues } = useForm<FormProps>({
    defaultValues: {
      imageUrl: "",
    },

    mode: "onChange",
    reValidateMode: "onChange",
  });
  return (
    <div className="p-4">
      <Controller
        name="imageUrl"
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <>
              <label className="text-sm text-black font-normal" htmlFor={""}>
                <div>이미지</div>
              </label>

              <div className="flex">
                <div className="relative w-44 h-44 rounded-2xl border border-solid border-gray-light shadow flex">
                  <label
                    htmlFor={"imageUrl"}
                    className="relative flex w-full cursor-pointer items-center justify-center"
                  >
                    <CameraSVG width={40} height={40} />
                  </label>

                  <input
                    className="absolute top-0 left-0 right-0 bottom-0 w-0 h-0"
                    type="file"
                    accept="image/*"
                    id={"imageUrl"}
                    onChange={async (e) => {
                      if (!e) return;
                      if (!e.target) return;
                      if (!e.target.files) return;
                      const file: File = e.target.files[0];

                      const objectURL = URL.createObjectURL(file);
                      onChange(objectURL);

                      //   const result = await createPreSignedUrl({
                      //     contentType: file.type,
                      //   });

                      //   try {
                      //     await axios.put(result.data.url, file, {
                      //       headers: {
                      //         "Content-Type": file.type,
                      //       },
                      //       // onUploadProgress: (progressEvent) => {
                      //       //   const percentCompleted = Math.round(
                      //       //     (progressEvent.loaded * 100) / progressEvent.total
                      //       //   );
                      //       // },
                      //     });

                      //     onChange(result?.data?.url.split("?X")[0]);
                      //   } catch (error) {
                      //     console.log("🚀 ~ onChange={ ~ error:", error);
                      //   }
                    }}
                  />
                </div>

                <div className="w-4" />

                {value && (
                  <div className="w-44 h-44 rounded-2xl flex relative">
                    <Image
                      src={value}
                      alt="채팅방 이미지"
                      width={192}
                      height={192}
                    />

                    {/* <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                    <Spinner />
                  </div> */}

                    <XmarkSVG
                      color="white"
                      width={16}
                      height={16}
                      className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red"
                      onClick={() => {
                        onChange("");
                      }}
                    />
                  </div>
                )}
              </div>
            </>
          );
        }}
      />

      <div className="h-4" />

      <TextButton text="업로드" onClick={() => {}} disabled={false} />
    </div>
  );
};

export default ImageUploadForm;