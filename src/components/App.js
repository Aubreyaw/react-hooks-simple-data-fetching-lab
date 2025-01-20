import React, { useState, useEffect} from "react";

const dogApi = "https://dog.ceo/api/breeds/image/random";

function App() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        fetch(dogApi)
            .then(response => response.json())
            .then(data => {
                console.log('Fetched image URL:', data.message); 
                setImage(data.message);
            })
            .catch(error => console.error('Error fetching the image:', error));
    }, []);

    if (!image) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <img src={image} alt="A Random Dog"></img>
        </div>
    );
}
export default App

// useEffect(() => {
    //     fetch(dogApi)
    //     .then(r => r.json())
    //     .then(data => setImage(data.image))
    // }, [])