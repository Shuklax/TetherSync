import { MessageSquare } from "lucide-react";

function Signup() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center bg-[#0b0b0b] px-5 h-130 w-100 rounded-2xl border-1 border-emerald-800">
        <div className="flex flex-col items-center mb-2">
          <div id="title" className="text-white flex">
            <MessageSquare className="text-green-400 mt-1 mr-2" />
            <span className="font-bold text-2xl">TetherSync</span>
          </div>
          <div className="text-white opacity-50 mt-2">
            Create your account to join the conversation
          </div>
        </div>
        <div id="input-fields" className="m-2">
          <Input label={"Email"} input={"Enter your email"} type={"email"}/>
          <Input label={"Username"} input={"Choose a username"} />
          <Input label={"Password"} input={"Create a password"} type={"password"}/>
          <Input label={"Confirm Password"} input={"Confirm your password"} type={"password"}/>
        </div>
        <div>
          <button className="text-black bg-green-400 rounded-lg w-full h-8 font-semibold">Create Account</button>
        </div>
        <div className="text-white opacity-50 mt-3">
            Already have an account?<span className="hover:underline"> Sign In</span>
        </div>
      </div>
    </div>
  );
}

function Input({ label, input, type }:any) {
  return (
    <div className="text-white flex flex-col my-3">
      <label htmlFor="" className="mb-1 font-semibold">{label}</label>
      <input className="px-2 h-8 focus:outline-none focus:ring-2 focus:ring-green-400" type={type} placeholder={input} />
    </div>
  );
}

export default Signup;
