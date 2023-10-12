import type {Handler, HandlerContext, HandlerEvent} from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    try {
        const participants = await fetch('https://xbg-challenge.xborg.com/api/history');
        if (!participants.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await participants.json();
        const numberOfParticipants = data.message.length;

        const authToken = 'aw6y9lspqtszz2jlnks3o05yiigsay';
        const engagement = await fetch('https://lunarcrush.com/api3/coins/144480/change?interval=3m',
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${authToken}` // Include the authorization header
                }
            });
        if (!engagement.ok) {
            throw new Error('Network response was not ok');
        }
        const dataEngagement = await engagement.json();
        const totalEngagement = dataEngagement.data.social_score_3m;
        const percent = mapParticipants(numberOfParticipants) + mapImpressions(totalEngagement);

        return {
            statusCode: 200,
            body: JSON.stringify({
                participants: numberOfParticipants,
                totalEngagement: totalEngagement,
                percent: percent
            }),
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({error: 'Internal Server Error'}),
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

function mapImpressions(number) {
    if (number > 20000000) {
        return 20;
    } else if (number >= 15000000) {
        return 15;
    } else if (number >= 10000000) {
        return 10;
    } else {
        // Handle other cases as needed
        return 5; // Default value when number is less than 10000000
    }
}

function numberOfDays() {
    const today = new Date();
    const targetDate = new Date('2023-10-01');
    const timeDifference = targetDate - today;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
}


export {handler};
