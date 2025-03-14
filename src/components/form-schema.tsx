"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { LoaderCircle, Send } from "lucide-react"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { toast } from "sonner"
import { useState } from "react"

const emailSchema = z.object({
    email: z.string().min(5, {
        message: "Email must be at least 5 characters."
    }).max(50, {
        message: "Email must be less than 51 characters."
    }).email("This is not a valid email."),
    subject: z.string().min(10, {
        message: "Subject must be at least 10 characters."
    }).max(40, {
        message: "Subject must be less than 41 characters."
    }),
    message: z.string().min(10, {
        message: "The message must be at least 10 characters."
    }).max(500, {
        message: "It's too much!"
    })
})

const AIBotSchema = z.object({
    message: z.string().min(5, {
        message: "The message must be at least 5 characters."
    }).max(100, {
        message: "The message must be less than 101 characters."
    })
})

const EmailForm = () => {
    const [loading, setLoading] = useState(false)

    const form = useForm<z.infer<typeof emailSchema>>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            email: "",
            subject: "",
            message: ""
        }
    })

    async function onSubmit(values: z.infer<typeof emailSchema>) {
        setLoading(true)
        const response = await fetch("/api/email", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
        })

        const data: { message: string } = await response.json()

        if (!response.ok) {
            setLoading(false)
            toast.error(data.message, {
                duration: 3000
            })
        } else {
            setLoading(false)
            toast.success(data.message, {
                duration: 3000
            })
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-pixel font-bold msm:text-3xl text-xl text-rose-200">Email</FormLabel>
                            <FormControl>
                                <Input className="rounded-xl border-none font-ubuntuMono text-2xl text-rose-100" placeholder="Email:" {...field} />
                            </FormControl>
                            <FormMessage className="font-pixel text-lg" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-pixel font-bold msm:text-3xl text-xl text-rose-200">Subject</FormLabel>
                            <FormControl>
                                <Input className="rounded-xl border-none font-ubuntuMono text-2xl text-rose-100" placeholder="Subject:" {...field} />
                            </FormControl>
                            <FormMessage className="font-pixel text-lg" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-pixel msm:text-3xl text-xl text-rose-200">Message</FormLabel>
                            <FormControl>
                                <Textarea className="rounded-xl border-none font-ubuntuMono text-2xl min-h-32 max-h-32 text-rose-100" placeholder="Type a message..." {...field} />
                            </FormControl>
                            <FormMessage className="font-pixel text-lg" />
                        </FormItem>
                    )}
                />
                <div className="flex mx-20">
                    <Button className="bg-rose-500 rounded-2xl w-full" type="submit" disabled={loading}>
                        {loading ? (
                            <>
                                <LoaderCircle className="animate-spin" />
                                Sending...
                            </>
                        ) :
                            <Send />
                        }
                    </Button>
                </div>
            </form>
        </Form>
    )
}

const AIBotForm = () => {
    const form = useForm<z.infer<typeof AIBotSchema>>({
        resolver: zodResolver(AIBotSchema),
        defaultValues: {
            message: ""
        }
    })

    function onSubmit(values: z.infer<typeof AIBotSchema>) {
        console.log('AI input: ', values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-pixel font-bold text-xl">Message</FormLabel>
                            <FormControl>
                                <Input className="rounded-xl border-none font-ubuntuMono text-xl" placeholder="Type anything" {...field} />
                            </FormControl>
                            <FormDescription className="font-pixel text-md">
                                Be cordial
                            </FormDescription>
                            <FormMessage className="font-pixel text-md" />
                        </FormItem>
                    )}
                />
                <div className="flex mx-20">
                    <Button className="bg-indigo-600 rounded-2xl w-full" type="submit"> <Send /> </Button>
                </div>
            </form>
        </Form>
    )
}

export { EmailForm, AIBotForm }