import { EmailFormFromUser } from '@/models/mail'
import React from 'react'
import { Html, Head, Body, Container, Section, Heading, Text } from '@react-email/components'

const EmailTemplate: React.FC<EmailFormFromUser> = ({ email, subject, message }) => {
    return (
        <Html>
            <Head />
            <Body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', margin: 0, padding: 0 }}>
                <Container style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '8px', overflow: 'hidden' }}>
                    <Section style={{ padding: '20px', textAlign: 'center', backgroundColor: '#510087', color: '#ffffff' }}>
                        <Heading style={{ margin: 0, fontSize: '24px' }}>Hello Mindlunny!</Heading>
                        <Text style={{ margin: 0, fontSize: '14px' }}>You have a message from your portfolio</Text>
                    </Section>
                    <Section style={{ padding: '20px' }}>
                        <Text style={{ margin: 0, fontWeight: 'bold' }}>From: {email}</Text>
                        <Text style={{ margin: 0, fontWeight: 'bold' }}>Subject: {subject}</Text>
                        <Text style={{ margin: 0, fontWeight: 'bold' }}>Message:</Text>
                        <Text style={{ margin: 0, wordWrap: 'break-word' }}>{message}</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    )
}

export default EmailTemplate