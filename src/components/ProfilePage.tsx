import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { logoutUser } from "../http/api";

interface ErrorResponse {
  message: string;
}

const ProfilePage = () => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [userId, SetUserId] = useState("");
  const [accesstoken, SetAccess] = useState("");
  const [refreshtoken, SetRefresh] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userSessionData = sessionStorage.getItem("user");
    if (userSessionData) {
      try {
        const parsed = JSON.parse(userSessionData);
        SetName(parsed?.name || "");
        SetEmail(parsed?.email || "");
        SetUserId(parsed?.id || "");
        SetAccess(parsed?.accessToken || "");
        SetRefresh(parsed?.refreshToken || "");
      } catch (err) {
        console.error("Error parsing session data:", err);
      }
    }
  }, []);
  const mutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      
      toast.success("user logout successfully",{position:"top-center"});
      sessionStorage.removeItem("user");
      navigate("/login");

      
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      const errorMeassge =
        err.response?.data.message || "Something went wrong.Try it again!";
      setErrMsg(errorMeassge);
      // toast
      toast.error(errorMeassge);
    },
  });
  const handleLogout = () => {
    mutation.mutate();
  };
  return (
    <div className="min-h-screen pt-12 mt-4">
      <div className="max-w-md mx-auto mt-10 bg-white border border-gray-200 rounded-xl shadow-md p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-600">User Profile</h2>
        {errMsg && <span className="text-red-400 text-sm mt-2 p-2">{errMsg}</span>}
        <div className="space-y-1">
          <p className="text-gray-700">
            <span className="font-medium">Name:</span> {name}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Email:</span> {email}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">User ID:</span> {userId}
          </p>
          <div className="text-sm text-gray-500 break-words">
            <span className="font-medium text-gray-700">access Token:</span>{" "}
            {accesstoken}
          </div>
          <div className="text-sm text-gray-500 break-words">
            <span className="font-medium text-gray-700">refresh Token:</span>{" "}
            {refreshtoken}
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full mt-6 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProfilePage;
