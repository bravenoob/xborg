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
    for (let percent = 5; percent <= 100; percent += 5) {
        const isMilestoneAchieved = percent <= currentPercent;
        const additionalXBG = (percent / 5) * 3.3;
        let top;
        if (percent >= 95) {
            top = 75;
        } else if (percent >= 85) {
            top = 70;
        } else if (percent >= 75) {
            top = 65;
        } else if (percent >= 65) {
            top = 60
        } else if (percent >= 50) {
            top = 55;
        }

        timelineItems.push(
            <div key={percent} className={`timeline-item ${isMilestoneAchieved ? 'achieved' : ''}`}>
                <div className="milestone">
                    {percent}% Milestone
                    {isMilestoneAchieved ? '✅ - ' : ' - '}
                    $XBG {additionalXBG.toFixed(1)}K unlocked
                    {top ? ' + top ' + top: ''}
                </div>
            </div>
        );
    }

    return (
        <div>
            <div>
                <p>
                    Daily participants: <b>{participants}</b>
                    <br/>
                    Social engagement: <b>{engagement}</b>
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
            return (number / 1000000).toLocaleString(undefined, {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1
            }) + 'M';
        } else {
            return number.toLocaleString();
        }
    }
    return number;
}


export default VerticalTimeline;
