import { createContext, useState } from "react";

export type Warden = {
    isActive: boolean,
    setIsActive: (value: boolean) => void
}

const GuardContext = createContext<Warden | null>(null)

const WardenWindow = ({ children }: { children: React.ReactNode }) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <GuardContext.Provider value={{ isActive, setIsActive }}>
            {children}
        </GuardContext.Provider>
    )
}

export { WardenWindow, GuardContext }