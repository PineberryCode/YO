import React from "react"
import { Separator } from "./ui/separator"
import { CircleX, LucideIcon } from "lucide-react"
import { toast } from "sonner"
import { Button } from "./ui/button"
import useWarden from "@/hooks/use-guard"

interface CoreDialogProps {
    toastId?: string | number
    closeButtonStyle: string
    separatorStyle?: string
    className?: string
    title: string
    icon?: LucideIcon | null
    description: string
}

interface SoonerDialogProps {
    id: string
    backgroundColor: string
    children: React.ReactNode
}

const CoreDialog: React.FC<CoreDialogProps & { children: React.ReactNode }> = (props) => {
    const { setIsActive } = useWarden()
    const { toastId, closeButtonStyle, separatorStyle, className, title, icon: Icon, description, children } = props

    return (
        <div className={`w-96 mx-10 my-4 ${className} cursor-auto`}>
            <div className="flex justify-between">
                <div className="flex justify-start select-none items-center">
                    <p className="font-pixel font-bold text-5xl">
                        {title}{Icon && <Icon size={30} className="ml-5 inline-block" />}
                    </p>
                </div>
                <div className="flex justify-end">
                    <Button
                        variant="destructive"
                        className={`rounded-xl font-bold ${closeButtonStyle}`}
                        onClick={() => {
                            setIsActive(false)
                            toast.dismiss(toastId)
                        }}
                    >
                        <CircleX />
                    </Button>
                </div>
            </div>
            <p className="font-pixel text-md mt-1 select-none">{description}</p>
            <Separator className={`my-3 ${separatorStyle}`} />
            <div className="text-justify">
                {children}
            </div>
        </div>
    )
}

const SoonerDialog: React.FC<SoonerDialogProps & CoreDialogProps> = (props) => {
    const { id, separatorStyle, closeButtonStyle, backgroundColor, className, title, icon: Icon, description, children } = props

    return toast.custom((t) => {
        return (<CoreDialog
            toastId={t}
            closeButtonStyle={closeButtonStyle}
            separatorStyle={separatorStyle}
            className={className}
            title={title}
            icon={Icon}
            description={description}
        >
            {children}
        </CoreDialog>)
    }, {
        id: id,
        duration: Infinity,
        style: {
            backgroundColor: `${backgroundColor}`,
            borderRadius: "20px"
        },
        dismissible: false,
    })
}

export default SoonerDialog