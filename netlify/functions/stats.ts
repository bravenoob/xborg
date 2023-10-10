import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    try {
        const response = await fetch('https://xbg-challenge.xborg.com/api/leaderboard');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const percent = mapParticipants(data.messages.length);
        return {
            statusCode: 200,
            body: JSON.stringify(percent),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
    }
};

function mapParticipants(number) {
    if (number >= 3000) {
        return 80;
    } else if (number >= 2500) {
        return 66;
    } else if (number >= 2000) {
        return 50;
    } else if (number >= 1500) {
        return 33;
    } else if (number >= 1000) {
        return 20;
    } else {
        // Handle other cases as needed
        return 0; // Default value when number is less than 1000
    }
}


export { handler };
