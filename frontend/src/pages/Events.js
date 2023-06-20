import React from 'react';
import { useLoaderData, json } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  return <EventsList events={events} />;
}

export const loader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), { status: 500 });
    return json({ message: 'Could not fetch events.' });
  } else {
    return response;
  }
};

export default EventsPage;
