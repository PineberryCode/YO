import { RespawnerContext } from "@/components/respawn"
import { useContext } from "react"

/**
 * 
 * @returns a hook to permits to know if the knight chess has fallen from "SemiPlane"
 */
const useRespawn = () => {
    const context = useContext(RespawnerContext)

    if (!context) {
        throw new Error("useRespawn must be used inside the Respawner")
    }

    return context
}

export default useRespawn