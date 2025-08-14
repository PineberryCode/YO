import { Bot, Contact, FileUser, FolderRoot, Leaf, Link as LinkIcon, Mail } from "lucide-react";
import { contentObj } from "../utils/data";
import SoonerDialog from "@/components/show-up";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

function showHobbies() {
    return SoonerDialog({
        id: "unique-toast",
        separatorStyle: "bg-green-600",
        backgroundColor: "oklch(0.262 0.051 172.552)",
        closeButtonStyle: "bg-green-600 text-emerald-950",
        className: "text-green-600",
        title: "Hobbies",
        icon: Leaf,
        description: "I occasionally do these activities.",
        children: (
            <div className="flex justify-center">
                {contentObj
                    .filter((val) => val.id === "hobbies")
                    .map((val, index) => (
                        <Carousel key={`carousel-${index}`} className='max-w-xs'>
                            <CarouselContent>
                                {val.item.map((item, c) => (
                                    <CarouselItem key={`${index}-${c}`}>
                                        <p key={`sub-title-${index}-${c}`} className='font-pixel text-xl font-semibold'>
                                            {item.subTitle}
                                        </p>
                                        <p key={`paragraph-${index}-${c}`} className='font-pixel text-sm text-justify'>
                                            {item.text}
                                        </p>
                                        {item.link && (
                                            <a key={`link-${index}-${c}`} className="flex font-pixel text-sm items-center gap-x-3" target="_blank" href={item.link.link} >
                                                <LinkIcon className="w-4 h-4" /> {item.link.text}: {item.link.link}
                                            </a>
                                        )}
                                    </CarouselItem>
                                )
                                )}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    ))
                }
            </div>
        )
    })
}

function showAboutMe() {
    return SoonerDialog({
        id: "unique-toast",
        separatorStyle: "bg-sky-600",
        backgroundColor: "oklch(0.129 0.042 264.695)",
        closeButtonStyle: "bg-sky-600 text-slate-950",
        className: "text-sky-600",
        title: "About me",
        icon: FileUser,
        description: "",
        children: (
            <div className="flex justify-center">
                {contentObj
                    .filter((val) => val.id === "about-me")
                    .map((val, index) => (
                        <Carousel key={`carousel-${index}`} className='max-w-xs'>
                            <CarouselContent>
                                {val.item.map((item, c) => (
                                    <CarouselItem key={`${index}-${c}`}>
                                        <p key={`sub-title-${index}-${c}`} className='text-wrap font-pixel font-semibold'>
                                            {item.subTitle}
                                        </p>
                                        {item.subTitle == contentObj[0].item[2].subTitle ?
                                            (
                                                <div key={`paragraph-${index}-${c}`} className='ml-4'>
                                                    <ul key={`ul-${index}-${c}`} style={{ listStyleType: "square" }}>
                                                        {item.text.split(',').map((language, e) => (
                                                            <li key={`li-${c}-${e}`} className='font-pixel text-sm'>{language}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ) :
                                            (
                                                <p key={`paragraph-${index}-${c}`} className='font-pixel text-sm text-justify'>
                                                    {item.text}
                                                </p>
                                            )}
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    ))
                }
            </div>
        )
    })
}

function showProjects() {
    return SoonerDialog({
        id: "unique-toast",
        separatorStyle: "bg-amber-600",
        backgroundColor: "oklch(0.266 0.079 36.259)",
        closeButtonStyle: "bg-amber-600 text-orange-950",
        className: "text-amber-600",
        title: "Projects",
        icon: FolderRoot,
        description: "Culminated projects.",
        children: (
            <div className='flex justify-center'>
                {contentObj
                    .filter((val) => val.id === "projects")
                    .map((val, index) => (
                        <Carousel key={`carousel-${index}`} className='max-w-xs'>
                            <CarouselContent>
                                {val.item.map((item, c) => {
                                    // It contains the text and link
                                    const itemSplitted = item.text.split('Link: ')

                                    return (
                                        <CarouselItem key={`${index}-${c}`}>
                                            <p key={`sub-title-${index}-${c}`} className='font-pixel text-xl font-semibold'>
                                                {item.subTitle}
                                            </p>
                                            <p key={`paragraph-${index}-${c}`} className='font-pixel text-sm text-justify'>
                                                {itemSplitted[0]}
                                            </p>
                                            <div key={`dv-link-${index}-${c}`} className="flex justify-start items-center gap-2">
                                                <p key={`p-link-${index}-${c}`} className="font-pixel text-xl font-bold">Redirect to: </p>
                                                <a key={`a-link-${index}-${c}`} target='_blank' href={itemSplitted[1]} className="text-sky-500">
                                                    <LinkIcon size={17} />
                                                </a>
                                            </div>
                                            <br />
                                        </CarouselItem>
                                    )
                                })}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    ))
                }
            </div>
        )
    })
}

function showContactToMe() {
    return SoonerDialog({
        id: "unique-toast",
        separatorStyle: "bg-indigo-600",
        backgroundColor: "oklch(0.145 0 0)",
        closeButtonStyle: "bg-indigo-600 text-fuchsia-950",
        className: "text-indigo-600",
        title: "Get in touch",
        icon: Contact,
        description: "Feel free to reach out to me via email for any inquiries or collaboration.",
        children: (
            <div className="flex justify-center">
                {contentObj
                    .filter((val) => val.id === "contact-to-me")
                    .map((val, index) => (
                        <Carousel key={`carousel-${index}`} className='max-w-xs'>
                            <CarouselContent>
                                {val.item.filter((_, f) => f === 0).map((sub, s) => (
                                    <CarouselItem key={`carousel-item-${index}-${s}`} className="w-full">
                                        <div className="grid grid-cols-1 gap-3 justify-center items-center w-full">
                                            <p className="flex justify-self-center text-3xl font-pixel">
                                                {sub.subTitle}
                                            </p>
                                            <Link
                                                className="flex justify-self-center"
                                                href={sub.subTitle == "Mail me" ? "/email" : "#"}
                                            >
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <Button
                                                                className="flex justify-self-center rounded-xl w-20 h-15"
                                                                variant="outline"
                                                                disabled={sub.subTitle === "AI Bot"}
                                                            >
                                                                {sub.subTitle == "Mail me" ? <Mail /> : <Bot />}
                                                            </Button>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="rounded-xl bg-indigo-600">
                                                            <p className="font-pixel text-md">{sub.text}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </Link>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    ))
                }
            </div>
        )
    })
}

export { showHobbies, showAboutMe, showProjects, showContactToMe }