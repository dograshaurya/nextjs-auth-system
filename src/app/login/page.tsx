"use client";
import Link from "next/link";
import React, { useEffect} from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
        setLoading(true);
        const response = await axios.post("/api/users/login",user);
        console.log('response',response.data);
        toast.success("Login successful!");
        router.push("/profile");
    } catch (error:any) {
        console.log("Login Failed",error.response);
        toast.error(error.response.data.error);
    } finally {
        setLoading(false);
    }
  };

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    },[user])

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-2xl shadow-lg">
          <div className="text-center text-white text-2xl">
            <h1>Login</h1>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300">Email</label>
              <input
                type="email"
                className="w-full p-3 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-gray-300">Password</label>
              <input
                type="password"
                className="w-full p-3 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <button
              onClick={onLogin}
              className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md"
            >

              {buttonDisabled ? "No Login" : "Login"}
            </button>
            Not a User? <Link href="/signup">Register</Link>
          </div>
        </div>
      </div>
    );
}
