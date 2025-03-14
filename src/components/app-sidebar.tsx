import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { Leaf, PersonStanding } from "lucide-react"
import { Button } from "./ui/button"
import { itemsSidebar } from "@/utils/data"
import React, { useState } from "react"
import useWarden from "@/hooks/use-guard"
import { showAboutMe, showContactToMe, showHobbies, showProjects } from "@/utils/show-card"
import { Tooltip, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

const AppSidebar = () => {
    const { setIsActive } = useWarden()
    const [loading, setLoading] = useState(false)

    return (
        <Sidebar variant="inset" collapsible="icon">
            <SidebarContent className="shadow-2xl">
                <SidebarGroup className="gap-10">
                    <SidebarGroupLabel className="font-pixel text-7xl pt-5 select-none text-green-400">YO</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {itemsSidebar.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton className="justify-start" asChild>
                                        {item.title != "Home" && !item.isBlank ?
                                            (
                                                <Button
                                                    variant="ghost"
                                                    className="cursor-pointer"
                                                    onClick={() => {
                                                        setIsActive(true)

                                                        if (item.title == "Message") {
                                                            return showContactToMe()
                                                        }

                                                        return showProjects()
                                                    }}
                                                >
                                                    <item.icon />
                                                    <span className="font-pixel text-xl">{item.title}</span>
                                                </Button>
                                            ) :
                                            (
                                                <a href={item.url} target={item.isBlank ? "_blank" : ""}>
                                                    <item.icon />
                                                    <span className="font-pixel text-xl">{item.title}</span>
                                                </a>
                                            )}
                                    </SidebarMenuButton>
                                    {item.title == "Home" && (
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton asChild>
                                                    <Button
                                                        variant="ghost"
                                                        className="cursor-pointer"
                                                        onClick={() => {
                                                            setIsActive(true)
                                                            return showAboutMe()
                                                        }}
                                                    >
                                                        <PersonStanding />
                                                        <span className="font-pixel text-xl">About me</span>
                                                    </Button>
                                                </SidebarMenuSubButton>

                                                <SidebarMenuSubButton asChild>
                                                    <Button
                                                        variant="ghost"
                                                        className="cursor-pointer"
                                                        onClick={() => {
                                                            setIsActive(true)
                                                            return showHobbies()
                                                        }}
                                                    >
                                                        <Leaf />
                                                        <span className="font-pixel text-xl">Hobbies</span>
                                                    </Button>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    )}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar