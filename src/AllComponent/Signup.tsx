import Button1 from "@/components/ui/Button1"
import Button2 from "@/components/ui/Button2"
import { Facebook, google, signup } from "@/ImportImages/ImportImages"
import { Link } from "react-router"


const Signup:React.FC = () => {
  return (
    <div className="relative">
        <div className="absolute">
                <img src={signup} alt="img" />
            </div>
        <div className="container mt-15">
            <div className="grid grid-cols-2  items-center justify-between gap-[120px]">
                <div>

                </div>


            
            <div className="py-[125px] max-w-[370px] ">
                <h2 className="font-inter tracking-wide leading-7.5 text-[36px] font-medium mb-6">Create an account</h2>
                <p className="font-poppins mb-12">Enter your details below</p>


                <div className="flex font-poppins text-gray-500  flex-col gap-10">
                    <input  className=" pb-2 border-b border-button w-full focus:outline-none" type="text" placeholder="Email or Phone Number" />
                    <input  className=" pb-2 border-b border-button w-full focus:outline-none" type="text" placeholder="Name" />
                    <input  className=" pb-2 border-b border-button w-full focus:outline-none" type="password"  placeholder="Password"/>
                </div>

                <Button2 className="mt-10 w-full mb-4">Create Account</Button2>
                <Button1 className="mb-2 flex gap-4 w-full justify-center items-center font-normal">
                    <img src={google} alt="icon" />
                    Sign up with Google
                </Button1>
                <Button1 className="mb-4 flex gap-4 w-full justify-center items-center font-normal">
                    <img className=" h-[24px] w-[24px] " src={Facebook} alt="icon" />
                    Sign up with Facebook
                </Button1>
                <p className="font-poppins text-center ">Already have an account? 
                    <Link className="font-medium ml-4 underline underline-offset-8" to={"/login"}>Log In</Link>
                </p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Signup