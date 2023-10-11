import React, {useEffect, useState} from 'react';

const VerticalTimeline = () => {
    const [participants, setParticipants] = useState(null);
    const [engagement, setEngagement] = useState(null);
    const [currentPercent, setCurrentPercent] = useState(null);

    useEffect(() => {
        // Fetch the current percentage from the API endpoint
        fetch('/.netlify/functions/stats')
            .then((response) => response.json())
            .then((data) => {
                setCurrentPercent(data.percent);
                setParticipants(data.participants);
                setEngagement(formatNumberToMillions(data.totalEngagement));
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // Rest of the component remains the same
    const timelineItems = [];
    for (let percent = 0; percent <= 100; percent += 5) {
        const isMilestoneAchieved = percent <= currentPercent;

        timelineItems.push(
            <div key={percent} className={`timeline-item ${isMilestoneAchieved ? 'achieved' : ''}`}>
                <div className="milestone">
                    {isMilestoneAchieved ? '✅' : ''}
                    {percent}% Milestone
                </div>
            </div>
        );
    }

    return (
        <div>
            <div>
                <p>
                    Participants: {participants}
                    <br/>
                    Social engagement: {engagement}
                </p>
            </div>
            <div className="vertical-timeline">
                {timelineItems}
            </div>
        </div>
    );
};


function formatNumberToMillions(number) {
    if (typeof number === 'number') {
        if (number >= 1000000) {
            return (number / 1000000).toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + 'M';
        } else {
            return number.toLocaleString();
        }
    }
    return number;
}



export default VerticalTimeline;
