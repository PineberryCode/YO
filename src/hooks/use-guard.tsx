import { GuardContext } from "@/components/warden-window"
import { useContext } from "react"

/**
 * It blocks the motion of the knight 
 * chess when a "Sooner" have been shown
 */
const useWarden = () => {
    const context = useContext(GuardContext)

    if (!context) {
        throw new Error("useWarden must be used inside the WardenWindow")
    }

    return context
}

export default useWarden