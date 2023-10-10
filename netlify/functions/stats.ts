import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    try {
        const response = await fetch('https://xbg-challenge.xborg.com/api/leaderboard');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
    }
};

export { handler };
