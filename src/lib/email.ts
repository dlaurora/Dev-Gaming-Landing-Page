import emailjs from '@emailjs/browser';

// Replace these with your actual EmailJS credentials
// For development/demo purposes, we can use placeholders or environment variables
const SERVICE_ID = 'service_placeholder';
const TEMPLATE_ID = 'template_placeholder';
const PUBLIC_KEY = 'public_key_placeholder';

export const sendPreOrderEmail = async (
    email: string,
    name: string,
    gameKey: string,
    edition: string,
    platform: string
) => {
    try {
        // In a real scenario, you would use the actual IDs.
        // For this demo, if the IDs are placeholders, we'll simulate a success
        // to avoid errors if the user hasn't set them up yet.
        if (SERVICE_ID === 'service_placeholder') {
            console.log('EmailJS credentials not set. Simulating email send:', {
                email,
                name,
                gameKey,
                edition,
                platform
            });
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
            return { status: 200, text: 'OK' };
        }

        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                to_email: email,
                to_name: name,
                game_key: gameKey,
                edition: edition,
                platform: platform,
            },
            PUBLIC_KEY
        );
        return response;
    } catch (error) {
        console.error('Failed to send email:', error);
        throw error;
    }
};
