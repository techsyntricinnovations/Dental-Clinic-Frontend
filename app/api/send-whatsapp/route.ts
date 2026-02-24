import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { name, subject, message } = await req.json();

        // Read credentials from environment variables
        const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
        const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
        const recipientNumber = process.env.WHATSAPP_RECIPIENT_NUMBER; // e.g. "919263066822"

        if (!accessToken || !phoneNumberId || !recipientNumber) {
            return NextResponse.json(
                { error: "WhatsApp API credentials are not configured." },
                { status: 500 }
            );
        }

        const messageBody =
            `*New Contact Form Message*\n\n` +
            `*Name:* ${name}\n` +
            `*Subject:* ${subject}\n` +
            `*Message:* ${message}`;

        const response = await fetch(
            `https://graph.facebook.com/v19.0/${phoneNumberId}/messages`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messaging_product: "whatsapp",
                    to: recipientNumber,
                    type: "text",
                    text: { body: messageBody },
                }),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            console.error("WhatsApp API error:", data);
            return NextResponse.json(
                { error: "Failed to send message.", details: data },
                { status: response.status }
            );
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Server error:", err);
        return NextResponse.json(
            { error: "Internal server error." },
            { status: 500 }
        );
    }
}
