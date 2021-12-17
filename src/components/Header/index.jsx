import React, { useState } from 'react'
import { isMobile } from '../../utils/miscUtils'
import { HeaderBg, HeaderOverlay, NameBlock, Info, Connect, Social, SocialLinkWrapper, SocialButton } from './styles'

const Header = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const handleMouseMove = event => {
        if (isMobile()) {
            return;
        }
        setX(-event.clientX / 60);
        setY(-event.clientY / 30);
    }
    return (
        <HeaderBg onMouseMove={handleMouseMove}>
            <HeaderOverlay x={x} y={y}>
                <NameBlock>
                    <div style={{
                        fontWeight: '700',
                    }}>
                        Madhav Mehta
                    </div>
                    <div>
                        Full Stack Developer
                    </div>
                </NameBlock>
                <Info>
                    I'm a software engineer based in India,
                    <br />
                    currently working full-time with Amazon.
                    {/* <br/>
                    Stick around till the end for a short game. */}
                </Info>
                <div>
                    <Connect>Let's Connect</Connect>
                    <Social>
                        <SocialLinkWrapper href="mailto: madhav.mehta896@gmail.com" target="_blank">
                            <SocialButton>Email</SocialButton>
                        </SocialLinkWrapper>

                        <SocialLinkWrapper href="https://bit.ly/madhav-linkedin" target="_blank">
                            <SocialButton>Linkedin</SocialButton>
                        </SocialLinkWrapper>

                        <SocialLinkWrapper href="https://bit.ly/madhav-github" target="_blank">
                            <SocialButton>Github</SocialButton>
                        </SocialLinkWrapper>
                    </Social>
                </div>
            </HeaderOverlay>
        </HeaderBg>
    )
}

export default Header;