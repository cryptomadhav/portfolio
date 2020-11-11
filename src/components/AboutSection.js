import React from 'react'
import styled from 'styled-components'
import SkillContainer from "./SkillContainer";

const About = styled.div`
    margin: 0;
    width: 100vw;
    height: 100vh;
    background: aquamarine;
`

const AboutTitle = styled.div`
    color: white;
    font-size: 30px;
`

export default () => {
    return (
        <About>
            <AboutTitle>About</AboutTitle>
            <SkillContainer />
        </About>
    )
}