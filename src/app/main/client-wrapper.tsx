"use client"

import AppSidebar from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { ReactNode, useEffect, useState } from "react"
import Load from "./load"
import { WardenWindow } from "@/components/warden-window"
import { useIsMobile } from "@/hooks/use-mobile"
import WarningMobile from "./warning-mobile"

const ClientWrapper = ({ children }: Readonly<{ children: ReactNode }>) => {
    const [loadComponentHaveLoaded, setLoadComponentHaveLoaded] = useState<boolean>(true)
    const isMobile = useIsMobile()

    useEffect(() => {
        if (loadComponentHaveLoaded) {
            
            const timer = setTimeout(() => {
                setLoadComponentHaveLoaded(false)
            }, 1000)

            clearTimeout(timer)
        }
    }, [])

    if (loadComponentHaveLoaded) {
        return <Load finished={[loadComponentHaveLoaded, setLoadComponentHaveLoaded]} />
    }

    return !isMobile ?
        (
            <WardenWindow>
                <SidebarProvider defaultOpen={false}>
                    <AppSidebar />
                    <main>
                        <SidebarTrigger />
                        {children}
                    </main>
                </SidebarProvider>
            </WardenWindow>
        ) :
        (
            <WarningMobile />
        )
}

export default ClientWrapper