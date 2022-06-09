import './share.css'
import { FaPhotoVideo } from "react-icons/fa";

const Share = () =>{
    return(
        <div className="share">
            <div className='shareWrapper'>
                <div className='top'>
                    <img src="https://i.imgur.com/ON62Y4U.jpg" alt="Me"/>
                    <input type="text" className='shareInput' placeholder="What's on your mind, firstName?"/>
                </div>
                <hr className='shareHr'/>
                <div className="bottom">
                    <div className='shareOptions'>
                        <div className="shareOption">
                            <FaPhotoVideo className ="shareIcon"/>
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share