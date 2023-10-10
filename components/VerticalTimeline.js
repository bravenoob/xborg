import React from 'react';

const VerticalTimeline = ({ currentPercent }) => {
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
        <div className="vertical-timeline">
            {timelineItems}
        </div>
    );
};

export default VerticalTimeline;
