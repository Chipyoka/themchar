import {React} from 'react';
import Navbar from './Navbar';

const Home = () => {
    return(
        <>
            <Navbar />
            <div className="home flex">
                <div>
                    <h1>
                        Your wellbeing
                        <br />
                        <b>Companion</b><span>.</span>
                    </h1>
                    <p className="mt-1">Ai-powered stress and depression detection chatbot for university students.</p>
                    <button className="start-chat"> Start Chat</button>
                </div>
            </div>
        </>
    )
}

export default Home;