import { ArrowBigUpDash, ArrowDownSquare, ArrowUpSquare, RotateCcwSquare, RotateCwSquare, Space } from "lucide-react"
import DeviceController from "@/models/device-controller"

/**
 * 
 * @returns a MobileControl component that includes icons to specifies
 * some motions
 */
const MobileControl = () => {
    const mobileController = DeviceController.instance

    const forwardPressed = mobileController.forwardPressed
    const backwardPressed = mobileController.backwardPressed
    const leftPressed = mobileController.leftPressed
    const rightPressed = mobileController.rightPressed
    const jumpPressed = mobileController.jumpPressed
    const runPressed = mobileController.runPressed

    const handleTouchStart = (action: "forward" | "backward" | "left" | "right" | "jump" | "run") => {
        switch (action) {
            case "forward":
                forwardPressed.current = true
                break
            case "backward":
                backwardPressed.current = true
                break
            case "left":
                leftPressed.current = true
                break
            case "right":
                rightPressed.current = true
                break;
            case "jump":
                jumpPressed.current = true
                break
            case "run":
                runPressed.current = true
                break
        }
    }

    const handleTouchEnd = (action: "forward" | "backward" | "left" | "right" | "jump" | "run") => {
        switch (action) {
            case "forward":
                forwardPressed.current = false
                break
            case "backward":
                backwardPressed.current = false
                break
            case "left":
                leftPressed.current = false
                break
            case "right":
                rightPressed.current = false
                break;
            case "jump":
                jumpPressed.current = false
                break
            case "run":
                runPressed.current = false
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