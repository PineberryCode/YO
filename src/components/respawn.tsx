import React, { createContext, useState } from "react"

interface Respawn {
    hasFallen: boolean,
    setHasFallen: (value: boolean) => void,
    knightPosition: number[]
}

const RespawnerContext = createContext<Respawn | null>(null)

const Respawner = ({ children }: { children: React.ReactNode }) => {
    const [hasFallen, setHasFallen] = useState(false)
    const knightPosition = [5, 2, 0]

    return (
        <RespawnerContext.Provider value={{ hasFallen, setHasFallen, knightPosition }}>

            {children}
        </RespawnerContext.Provider>
    )
}

export { Respawner, RespawnerContext }