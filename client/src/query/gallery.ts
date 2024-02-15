import {
  MutationFunction,
  UseMutationOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import Axios from ".";

interface CreateGalleryProps {
  imageUrl: string;
}

interface CreateGalleryResponse {
  id: number;
  imageUrl: string;
  createdAt: string;
}

const createGallery: MutationFunction<
  AxiosResponse<CreateGalleryResponse>,
  CreateGalleryProps
> = (props) => {
  const { imageUrl } = props;
  return Axios({
    method: "post",
    url: "/gallery",
    data: {
      imageUrl,
    },
  });
};

export const useCreateGallery = (
  options?: UseMutationOptions<
    AxiosResponse<CreateGalleryResponse>,
    Error,
    CreateGalleryProps
  >
) => {
  return useMutation({
    mutationFn: createGallery,
    ...options,
  });
};

interface GetGalleryResponse {
  id: number;
  imageUrl: string;
  createdAt: string;
}

const getGalleries = async () => {
  const data = await Axios({
    method: "get",
    url: `/gallery`,
  });

  return data.data;
};

export const useGetGalleries = () => {
  return useQuery<GetGalleryResponse[]>({
    queryKey: ["gallery"],
    queryFn: getGalleries,
  });
};
