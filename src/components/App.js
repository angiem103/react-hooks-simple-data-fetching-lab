// create your App component here

import { useEffect, useState} from "react";

function App() {

    const [image, setImage] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((image) => setImage(image.message))
        

    }, [])

    if (!image){
        return <div>Loading...</div>
    }

    return <img src={image} alt="A Random Dog"/>
}



export default App;