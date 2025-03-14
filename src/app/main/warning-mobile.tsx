import { Smartphone } from "lucide-react"

const WarningMobile = () => {
    return (
        <div className="flex my-64 items-center">
            <div className="grid grid-cols-1 m-auto gap-10">
                <h3 className="font-pixel justify-self-center text-5xl">Rotate Your Phone</h3>
                <div className="flex justify-center"> <Smartphone className="animate-spin" size={60} /> </div>
                <p className="font-pixel justify-self-center text-3xl">For Better Experience</p>
            </div>
        </div>
    )
}

export default WarningMobile