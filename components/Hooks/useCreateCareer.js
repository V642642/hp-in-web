import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const Post = (postData) => {

  return axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API}${postData.get('path')}` , postData);
};

export function useCreateCareer() {
  const queryClient = useQueryClient();
  return useMutation(Post, {
    onSuccess: (data) => {
    },
    onError: (errorData) => {
      const errorMessage = errorData?.error?.message || errorData?.message;
      alert(errorMessage);
    },
  });
}
