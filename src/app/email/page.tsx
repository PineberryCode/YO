"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { EmailForm } from "@/components/form-schema"
import { Mailbox } from "lucide-react"

const ContactToMeByEmail = () => {

    return (
        <Card className="lg:mx-80 sm:mx-36 msm:mx-2 my-10">
            <CardHeader>
                <CardTitle className="flex justify-start items-center gap-7 font-pixel text-5xl text-rose-500 select-none">
                    MAIL ME <Mailbox size={40} />
                </CardTitle>
                <CardDescription className="font-pixel text-xl text-rose-500 select-none">
                    Email form
                </CardDescription>
            </CardHeader>
            <CardContent>
                <EmailForm />
            </CardContent>
        </Card>
    )
}

export default ContactToMeByEmail