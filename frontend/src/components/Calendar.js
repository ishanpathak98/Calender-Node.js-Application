import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Calendar.css'; // Optional for styling

const Calendar = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('/api/events');
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        fetchEvents();
    }, []);

    return (
        <div className="calendar-container">
            <h1>Calendar Events</h1>
            <ul>
                {events.map((event) => (
                    <li key={event._id}>
                        <h2>{event.title}</h2>
                        <p>{new Date(event.date).toLocaleDateString()}</p>
                        <p>{event.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Calendar;

