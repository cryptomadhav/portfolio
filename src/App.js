import React, {useState} from 'react'
import HeaderSection from "./components/HeaderSection";
import AboutSection from "./components/AboutSection";
import Game from "./components/Game";

function App() {
    const [activeTab, setActiveTab] = useState(1)
    const handleTabSwitch = (key) => {
        setActiveTab(key)
    }
    return (
        <>
            <HeaderSection/>
            <Game/>

            <AboutSection/>
        </>
    );
}

export default App;
