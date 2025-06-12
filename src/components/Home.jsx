import {React} from 'react';
import Navbar from './Navbar';

const Home = () => {
    return(
        <>
            <Navbar />
            <div className="home">
                <h1>Welcome to Themchar AI</h1>
                <p>Ai-powered stress and depression detection chatbot for university students.</p>
                <code> By Jhalogix Solutions X Blackgeek</code>
            </div>
        </>
    )
}

export default Home;