import React, { useState } from "react";

import "./style.scss";

const SwitchTabs = ({ data, onTabChange }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [left, setLeft] = useState(0);
    const activeTab = (tab, index) => {
        setLeft(index * 100); //? Update the left position for background animation
        setTimeout(() => {
            setSelectedTab(index); //? Set the selected tab index after the animation delay
        }, 300);
        onTabChange(tab, index); //? Call the onTabChange callback function provided as prop
    };
    return (
        <div className="switchingTabs">
            <div className="tabItems">
                {data.map((tab, index) => (
                    <span key={index} className={`tabItem ${ selectedTab === index ? "active" : "" }`}
                        onClick={() => activeTab(tab, index)}>{tab}</span>
                ))}
                <span className="movingBg" style={{ left }} />{/* Background animation */}
            </div>
        </div>
    );
};

export default SwitchTabs;

