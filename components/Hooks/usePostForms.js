import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const Post = (postData) => {
  const newEndpoints = postData.path;
  delete postData.path

  return axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API}${newEndpoints}` , postData);
};

export function usePostForms() {
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
