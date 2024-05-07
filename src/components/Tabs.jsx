import React, { useState } from "react";

function Tabs({ tabs }) {
    const [activeTab, setActiveTab] = useState(0);

    function handleClick(index) {
        setActiveTab(index)
    }

    return (
        <div>
            {tabs.map((tab, index) => (
                <ul>
                    <li
                        key={index}
                        onClick={() => handleClick(index)}>{tab.title}</li>
                </ul>
            ))
            }
            <div>
                {tabs[activeTab].content}
            </div>
        </div>

    )
}

export default Tabs;