import React, { useState } from 'react'
import styled from 'styled-components'

const Header = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    font-family: Space Grotesk;
    line-height: 1.5;
    text-align: left;
    color: white;
`

const NameBlock = styled.div`
    color: white;
    font-size: 1.2rem;
`

const Info = styled.p`
    margin-top: 150px;
    margin-bottom: 100px;
    color: white;
    font-size: 1.7rem;
`

const Connect = styled.div`
    font-size: 1.4rem;
    font-weight: 700;
`

const Social = styled.div`
    width: 200px;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
`

const SocialButton = styled.div`
    font-size: 1.2rem;
`
const SocialLinkWrapper = styled.a`
    color: inherit;
`

export default () => {
    const[x, setX] = useState(0)
    const[y, setY] = useState(0)
    const currentIndex = (e) => {
        return {x: e.clientX , y: e.clientY }
    }
    return (
        <Header onMouseMove={event => {
                    const data = currentIndex(event);
                    setX(data.x / 60);
                    setY(data.y / 30);
                }}
        >
            <div style={{'transform': `translate(${-x}px, ${-y}px)`, margin: '100px'}}>
                <NameBlock>
                    <div style={{
                        fontWeight: '700',
                    }}>
                        Madhav Mehta &nbsp;&nbsp;&nbsp; x: {x} &nbsp; y: {y}
                    </div>
                    <div>
                        Full Stack Developer
                    </div>
                </NameBlock>
                <Info>
                    I'm a software engineer based in India,
                    <br/>
                    currently working full-time with OYO.
                    {/* <br/>
                    Stick around till the end for a short game. */}
                </Info>
                <div>
                    <Connect>Let's Connect</Connect>
                    <Social>
                        <SocialLinkWrapper href ="mailto: madhav.mehta896@gmail.com" target="_blank">
                            <SocialButton>Email</SocialButton>
                        </SocialLinkWrapper>
                        
                        <SocialLinkWrapper href ="https://bit.ly/madhav-linkedin" target="_blank">
                            <SocialButton>Linkedin</SocialButton>
                        </SocialLinkWrapper>
                        
                        <SocialLinkWrapper href ="https://bit.ly/madhav-github" target="_blank">
                            <SocialButton>Github</SocialButton>
                        </SocialLinkWrapper>
                    </Social>
                </div>
            </div>
        </Header>
    )
}