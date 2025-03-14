import { ArrowBigUpDash, ArrowDownSquare, ArrowUpSquare, RotateCcwSquare, RotateCwSquare, Space } from "lucide-react"
import DeviceController from "@/models/device-controller"

/**
 * 
 * @returns a MobileControl component that includes icons to specifies
 * some motions
 */
const MobileControl = () => {
    const mobileController = DeviceController.instance

    const handleTouchStart = (action: "forward" | "backward" | "left" | "right" | "jump" | "run") => {
        switch (action) {
            case "forward":
                mobileController.forwardPressed = true
                break
            case "backward":
                mobileController.backwardPressed = true
                break
            case "left":
                mobileController.leftPressed = true
                break
            case "right":
                mobileController.rightPressed = true
                break;
            case "jump":
                mobileController.jumpPressed = true
                break
            case "run":
                mobileController.runPressed = true
                break
        }
    }

    const handleTouchEnd = (action: "forward" | "backward" | "left" | "right" | "jump" | "run") => {
        switch (action) {
            case "forward":
                mobileController.forwardPressed = false
                break
            case "backward":
                mobileController.backwardPressed = false
                break
            case "left":
                mobileController.leftPressed = false
                break
            case "right":
                mobileController.rightPressed = false
                break;
            case "jump":
                mobileController.jumpPressed = false
                break
            case "run":
                mobileController.runPressed = false
                break
        }
    }

    return (
        <div className="hidden h-sm:block fixed w-screen right-0 bottom-10">
            <div className="flex justify-between ml-32 me-24 items-center">
                <div className="flex justify-self-start gap-x-6">
                    <div
                        onTouchStart={() => handleTouchStart("run")}
                        onTouchEnd={() => handleTouchEnd("run")}
                    >
                        <ArrowBigUpDash size={50} />
                    </div>

                    <div
                        onTouchStart={() => handleTouchStart("jump")}
                        onTouchEnd={() => handleTouchEnd("jump")}
                    >
                        <Space size={50} />
                    </div>
                </div>
                <div className="flex justify-self-end">
                    <div className="grid grid-cols-1 grid-rows-2">

                        <div className="flex justify-self-center"
                            onTouchStart={() => handleTouchStart("forward")}
                            onTouchEnd={() => handleTouchEnd("forward")}
                        >
                            <ArrowUpSquare size={50} />
                        </div>

                        <div className="grid grid-cols-3">

                            <div
                                onTouchStart={() => handleTouchStart("left")}
                                onTouchEnd={() => handleTouchEnd("left")}
                            >
                                <RotateCcwSquare size={50} />
                            </div>

                            <div
                                onTouchStart={() => handleTouchStart("backward")}
                                onTouchEnd={() => handleTouchEnd("backward")}
                            >
                                <ArrowDownSquare size={50} />
                            </div>

                            <div
                                onTouchStart={() => handleTouchStart("right")}
                                onTouchEnd={() => handleTouchEnd("right")}
                            >
                                <RotateCwSquare size={50} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
//hidden h-sm:block

export default MobileControl