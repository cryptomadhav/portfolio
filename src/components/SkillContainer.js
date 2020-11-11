import React from 'react'
import styled from 'styled-components'


const Skills = styled.div`
    position: relative;
    display: flex;
    margin: 10%;
    border: 2px solid black;
    justify-content: space-around;
`
const SkillsBox = styled.div`
    border: 2px solid black;
    width: 45%;
    height: 200px;
    margin: 50px;
`

export default () => {
    return (
        <Skills>
            <SkillsBox>
                Experience Box
            </SkillsBox>
            <SkillsBox>
                Skills Box
            </SkillsBox>
        </Skills>
    )
}