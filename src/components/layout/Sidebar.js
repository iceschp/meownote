import React from "react";
import { 
    FaChevronDown, 
    FaInbox,
    FaRegCalendarAlt,
    FaRegCalendar,
} from "react-icons/fa";

export const Sidebar = () => (
<div className="sidebar" data-testid="sidebar">
    <ul className="sidebar_generic">
        <li>Inbox</li>
        <li>Today</li>
        <li>Next 7 days</li>
    </ul>
</div>
);