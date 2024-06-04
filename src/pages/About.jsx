import React from 'react';
import '../styles/about.css';

function About(){
  return (
    <div className='about'>
        <div className='intro'>
        <h2>YayIn: Exploring the World One Destination at a Time</h2>
        <p>YayIn is a comprehensive travel resource designed to inspire and inform globetrotters of all kinds. </p>
        <p>Whether you are a seasoned traveler or a curious beginner, YayIn offers a wealth of information to help </p>
        <p>plan your next adventure. Here's a closer look at what you can expect:</p>
    </div> <div className='guide'>
        <h2>1. Destination Guides:</h2>
        <p>Detailed guides on cities, countries, and regions around the world. </p>
        <p>Highlights of top attractions, local cuisine, culture, and hidden gems.</p>
        <p>Practical information such as visa requirements, best times to visit, and local customs.</p>
    </div><div className='tips'>
        <h2>2. Travel Tips and Advice:</h2>
        <p>Essential travel tips covering packing, budgeting, safety, and health.</p>
        <p>Advice on navigating different modes of transportation, from flights to local transit.</p>
        <p>Tips for solo travelers, families, and group travel.</p>
    </div><div className='review'>
        <h2>3. Accomodation Reviews</h2>
        <p>In-depth reviews of hotels, hostels, resorts, and vacation rentals.</p>
        <p>Recommendations based on different budget levels and preferences.</p>
        <p>Information on amenities, service quality, and location convenience.</p>
    </div><div className='plans'>
        <h2>4. Itineraries and Travel Plans:</h2>
        <p>Ready-made itineraries for short and long trips.</p>
        <p>Suggested routes for road trips, backpacking, and luxury vacations.</p>
        <p>Customizable plans to fit specific interests and timeframes.</p>
    </div><div className='visuals'>
        <h2>5. Photo Galleries and Visual Inspiration:</h2>
        <p>Stunning photo galleries showcasing breathtaking landscapes, vibrant cities, and unique cultural moments.</p>
        <p>Visual storytelling that brings destinations to life and sparks wanderlust.</p>
    </div><div className='blogs'>
        <h2>6. Travel Stories and Blogs:</h2>
        <p>Personal travel stories and experiences from travelers around the globe.</p>
        <p>Blogs on niche topics such as eco-tourism, adventure travel, and culinary journeys.</p>
        <p>Engaging narratives that provide deeper insights into different cultures and destinations.</p>
    </div>
    </div>
  )
}

export default About