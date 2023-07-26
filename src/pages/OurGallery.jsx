import React from 'react'; // Import the 'React' object from 'react' module
import { DynamicLabel } from '../components/Label'; // Import the 'DynamicLabel' component from '../components/Label' file
import { ImageCard } from '../components/Card'; // Import the 'ImageCard' component from '../components/Card' file

const OurGallery = () => {
    // Define the 'OurGallery' functional component

    // List of hotel data with image URLs, titles, and rates
    const ListHotel = [
        {
            imageUrl: 'https://th.bing.com/th/id/OIG.s1hgKB50Cm9Q_5MFGgej?w=270&h=270&c=6&r=0&o=5&dpr=1.2&pid=ImgGn',
            title: 'Connecting Room',
            rate: 4
        },
        {
            imageUrl: 'https://content.r9cdn.net/rimg/himg/8f/92/27/leonardo-2084991-cjbfi-guestroom-0015-hor-clsc_O-816010.jpg?width=452&height=400&xhint=1620&yhint=1000&crop=true&watermarkheight=28&watermarkpadding=10',
            title: 'The Residency Towers Coimbatore',
            rate: 3
        },
        {
            imageUrl: 'https://content.r9cdn.net/rimg/himg/9e/8e/a5/expediav2-719856-938f37-862279.jpg?width=452&height=400&xhint=540&yhint=332&crop=true&watermarkheight=28&watermarkpadding=10',
            title: 'Vivanta Coimbatore',
            rate: 4
        },
        {
            imageUrl: 'https://th.bing.com/th/id/OIG.aVfTPkyH93eg9J4fTumH?w=270&h=270&c=6&r=0&o=5&dpr=1.2&pid=ImgGn',
            title: 'Le Merdian Coimbatore',
            rate: 5
        },
        {
            imageUrl: 'https://content.r9cdn.net/rimg/himg/df/bc/6f/expediav2-163656-cc49c9-987456.jpg?width=452&height=400&xhint=500&yhint=359&crop=true&watermarkheight=28&watermarkpadding=10',
            title: 'Standard Room',
            rate: 5
        },
        {
            imageUrl: 'https://content.r9cdn.net/rimg/himg/a2/65/fd/leonardo-1254029-cjbmd-presidential-suite-4811-hor-clsc_O-429554.jpg?width=452&height=400&xhint=1440&yhint=1000&crop=true&watermarkheight=28&watermarkpadding=10',
            title: 'Family Room',
            rate: 3
        },
        {
            imageUrl: 'https://th.bing.com/th/id/OIG.Pk5A.nxhBQZqT98x6m3f?w=270&h=270&c=6&r=0&o=5&dpr=1.2&pid=ImgGn',
            title: 'Deluxe Room',
            rate: 4
        },
        {
            imageUrl: 'https://th.bing.com/th/id/OIG.4LyWDtY1LqMtEv.ViMa_?w=270&h=270&c=6&r=0&o=5&dpr=1.2&pid=ImgGn',
            title: 'Double Room',
            rate: 5
        },
    ];

    return (
        // JSX code for the 'OurGallery' component
        <div>
            <div id='our-room'>
                {/* Render the 'DynamicLabel' component with text "Our Gallery" */}
                <DynamicLabel text="Our Gallery" />

                {/* Loop through the 'ListHotel' array and render 'ImageCard' components */}
                {ListHotel.map((data, index) => (
                    <ImageCard
                        key={index}
                        imageUrl={data.imageUrl}
                        title={data.title}
                        rate={data.rate}
                    />
                ))}
            </div>
        </div>
    );
};

export default OurGallery; // Export the 'OurGallery' component
