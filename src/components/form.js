import '../css/form.css';
import React, { useState, useEffect } from 'react';



const Form = () => {
    const [allMeme, setAllMeme] = useState({});
    let url;
    let name;

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
    }, []);
    
    const [meme, setMeme] = useState({
        topText: "",
        bodyText: "",
        randomImage: "https://i.imgflip.com/1bhf.jpg",
        imageName: "First World Problems"
    });
    function MemeImage() {
        const random = Math.floor(Math.random() * allMeme.length);
        url = allMeme[random].url;
        name = allMeme[random].name;

        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: url,
                imageName: name,
            }
        });
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(preData => {
            return {
                ...preData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="body_container">
            <div className="form" onSubmit={handleSubmit}>
                <input type="text" className="form_text_input" placeholder="Top Text" value={meme.topText} onChange={handleChange} name="topText" />
                <input type="text" className="form_text_input" placeholder="Bottom Text" value={meme.bodyText} onChange={handleChange} name="bodyText" />
                <button onClick={MemeImage} className="form_submit_input" >Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt={meme.imageName} className="api_image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bodyText}</h2>
            </div>
        </div >
    )
}

export default Form;