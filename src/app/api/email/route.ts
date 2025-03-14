import { EmailFormFromUser } from "@/models/mail"
import { NextRequest, NextResponse } from "next/server"
import { render as renderFromRE } from '@react-email/render'
import EmailTemplate from '@/templates/email'
import React from "react"
const nodemailer = require("nodemailer")

const email = process.env.EMAIL_FROM
const password = process.env.PASSWORD

export async function POST(req: NextRequest) {
    try {
        const body: EmailFormFromUser = await req.json()

        if (!body.email || !body.subject || !body.message) {
            return NextResponse.json({ message: "Bad request" }, { status: 400 })
        }

        const html = await renderFromRE(
            React.createElement(EmailTemplate, { email: body.email, subject: body.subject, message: body.message })
        )

        const message = {
            from: `Portfolio <${email}>`,
            to: `${process.env.EMAIL_TO}`,
            subject: body.subject,
            html: html,
            headers: {
                "X-Entity-Ref-ID": "newemail"
            }
        }

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: email,
                pass: password
            },
            tls: { rejectUnauthorized: process.env.NODE_ENV === "production" }
        })

        await transporter.sendMail(message)

        return NextResponse.json({ message: "Email sent!" }, { status: 200 })
    } catch (err: any) {
        return NextResponse.json({ message: err.message }, { status: 500 })
    }
}