import './share.css'
import { FaPhotoVideo, FaSmile, FaMapMarkerAlt, FaTag } from "react-icons/fa";
import { useState } from 'react';


const Share = (props) =>{

    const[newForm, setNewForm] = useState({
        content:''
    })

    const handleChange = (e) => {
        setNewForm({...newForm, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.createPost(newForm)
        setNewForm({
            content:''
        })

    }

    return(
        <div className="share">
            <div className='shareWrapper'>
                <div className='top'>
                    <img src="https://i.imgur.com/ON62Y4U.jpg" alt="Me"/>
                    <form>
                        <input id="postText" type="text" className='shareInput input' name="content"  placeholder="What's on your mind?"/>
                        <hr className='shareHr'/>
                        <div className="bottom">
                            <div className='shareOptions'>
                                <div className="shareOption">
                                    <FaPhotoVideo className ="shareIcon photo"/>
                                    <span className='shareOptionText'>Photo or Video</span>
                                </div>
                                <div className="shareOption">
                                    <FaTag className ="shareIcon tagged"/>
                                    <span className='shareOptionText'>Tag</span>
                                </div>
                                <div className="shareOption">
                                    <FaMapMarkerAlt className ="shareIcon marker"/>
                                    <span className='shareOptionText'>Location</span>
                                </div>
                                <div className="shareOption">
                                    <FaSmile className ="shareIcon emoji"/>
                                    <span className='shareOptionText'>Feelings</span>
                                </div>
                            </div>
                            <button className='shareButton button is-success'>Share</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Share