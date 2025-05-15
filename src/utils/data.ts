import { LineObj } from "@/models/terminal"
import { TextItem } from "@/models/texts"
import { CodeSquareIcon, FolderRoot, Github, Home, Instagram, LucideSquareDashedBottomCode, MessageCircle } from "lucide-react"

const lineObj: LineObj[] = [
    {
        text: "Collecting mindlunny=1.0.0",
        hasLoad: false
    },
    {
        text: "Downloading mindlunny=1.0.0-mn721-mn721-manylinux_2_17_x86_64.manylinux2025_x86_64.whl.metadata (49kB)",
        hasLoad: true,
        progress: {
            size: 49.5,
            velocity: 5.8,
            estimatedTimeOfArrival: "eta 0:00:00"
        }
    },
    {
        text: "Searching dependencies...",
        hasLoad: false
    },
    {
        text: "Downloading mindlunny=1.0.0-about_me.x86_64.whl",
        hasLoad: true,
        progress: {
            size: 7.5,
            velocity: 5.8,
            estimatedTimeOfArrival: "eta 0:00:00"
        }
    },
    {
        text: "Downloading mindlunny=1.0.0-projects.x86_64.whl",
        hasLoad: true,
        progress: {
            size: 14.375,
            velocity: 5.8,
            estimatedTimeOfArrival: "eta 0:00:00"
        }
    },
    {
        text: "Downloading mindlunny=1.0.0-contact_to_me.x86_64.whl",
        hasLoad: true,
        progress: {
            size: 7.20,
            velocity: 5.8,
            estimatedTimeOfArrival: "eta 0:00:00"
        }
    },
    {
        text: "Downloading mindlunny=1.0.0-hoobies.x86_64.whl",
        hasLoad: true,
        progress: {
            size: 21.8,
            velocity: 5.8,
            estimatedTimeOfArrival: "eta 0:00:00"
        }
    },
    {
        text: "Retrieving downloaded packages...",
        hasLoad: false
    },
    {
        text: "Proceed installing packages...",
        hasLoad: false
    },
    {
        text: "Installing [about_me]",
        hasLoad: true,
        progress: {
            size: 7.5,
            velocity: 5.8,
            estimatedTimeOfArrival: "eta 0:00:00"
        }
    },
    {
        text: "Installing [projects]",
        hasLoad: true,
        progress: {
            size: 14.375,
            velocity: 5.8,
            estimatedTimeOfArrival: "eta 0:00:00"
        }
    },
    {
        text: "Installing [contact_to_me]",
        hasLoad: true,
        progress: {
            size: 7.20,
            velocity: 5.8,
            estimatedTimeOfArrival: "eta 0:00:00"
        }
    },
    {
        text: "Installing [hobbies]",
        hasLoad: true,
        progress: {
            size: 21.8,
            velocity: 5.8,
            estimatedTimeOfArrival: "eta 0:00:00"
        }
    },
    {
        text: "Successfully intalled mindlunny",
        hasLoad: false
    }
]

const contentObj: TextItem[] = [
    {
        id: "about-me",
        item: [
            {
                subTitle: "Who are you?",
                text:
                    `
                        I am an engineer system student focused on software development, 
                        including design, processes, performance, and security. Therefore, 
                        I am interested in network communications, I have knowledge of VLAN 
                        setup, subnetting (VLSM), Asterisk (VoIP) implementation, 
                        and creating a local database with permissions via HTTP.
                    `
            },
            {
                subTitle: "When did you start in development area?",
                text:
                    `
                        Initially, I started development in 2020, and I was interested in
                        ethical hacking. I made my first keylogger based in C++ to 
                        understand how it works and how to counteract this threat. 
                        Then, step by step, I dove into programming.
                    `
            },
            {
                subTitle: "Which languages do you speak?",
                text: "Spanish,English,Russian (basic)"
            },
        ]
    },
    {
        id: "projects",
        item: [
            {
                subTitle: "JDNETTING",
                text:
                    `
                        It just shows a table to help you how to 
                        subnet a network with VLSM.
                        Link: https://github.com/PineberryCode/JDNETTING
                    `
            },
            {
                subTitle: "MINDSGGER",
                text:
                    `
                        You can send the captured data from user and 
                        send to your gmail account.
                        Link: https://github.com/PineberryCode/MINDSGGER
                    `
            }
        ]
    },
    {
        id: "hobbies",
        item: [
            {
                subTitle: "Chess",
                text:
                    `
                        Chess is a challenging game for me. 
                        I find it frustrating when I lose matches but I go to play despite having a losing streak (I abhor that).
                    `
            },
            {
                subTitle: "Building things",
                text:
                    `
                        I enjoy coming up with ideas and working on personal projects.
                    `
            },
            {
                subTitle: "Learning Russian",
                text:
                    `
                        I started learning Russian intermittently from 2024.
                    `
            }
        ]
    },
    {
        id: "contact-to-me",
        item: [
            {
                subTitle: "Mail me",
                text:
                    `
                        Email form.
                    `
            },
            {
                subTitle: "AI Bot",
                text:
                    `
                        AI bot - comming soon
                    `
            }
        ]
    }
]

const itemsSidebar = [
    {
        title: "Home",
        url: "/",
        icon: Home,
        isBlank: false
    },
    {
        title: "Message",
        url: "",
        icon: MessageCircle,
        isBlank: false
    },
    {
        title: "Projects",
        url: "",
        icon: FolderRoot,
        isBlank: false
    },
    {
        title: "Github",
        url: "https://github.com/PineberryCode",
        icon: Github,
        isBlank: true
    },
    {
        title: "LeetCode",
        url: "https://leetcode.com/u/MINDLUNNY/",
        icon: LucideSquareDashedBottomCode,
        isBlank: true
    },
    {
        title: "Hackerrank",
        url: "https://www.hackerrank.com/profile/MINDLUNNY",
        icon: CodeSquareIcon,
        isBlank: true
    },
    {
        title: "Instagram",
        url: "https://www.instagram.com/no_root.jdlc/",
        icon: Instagram,
        isBlank: true
    }
]

export { lineObj, contentObj, itemsSidebar }
