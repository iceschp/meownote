import React from "react";

export const HomeContent = () => {
    const test = 1;
    
    return (
        <div>
        <div className="content__box">
            <div>
                <h1>Easy Note</h1>
                <h1>Easy Post</h1>
                <p>Remember everything and tackle any project with your notes, tasks, and schedule all in one place. Regain clarity and calmness by getting all those tasks out of your head and onto your to-do list.</p>
            </div>
            <div>
                <img src="/images/thinking.png" alt="people thinking" />
            </div>
        </div>

        <div className="bottom__box">
            <button onClick="#">Start for free</button>
            <p>🐱 Meow Note is free to use.</p>
        </div>
        </div>
    )
};