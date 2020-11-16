import styled from 'styled-components'

export const HeaderBg = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    font-family: Space Grotesk;
    line-height: 1.5;
    text-align: left;
    color: white;
`
export const HeaderOverlay = styled.div`
    padding: 100px;
    padding-top: 80px;
    transform: ${({x, y}) => `translate(${x}px, ${y}px)`};
    @media only screen and (max-width: 600px) {
        padding: 40px;
    }
`
export const NameBlock = styled.div`
    color: white;
    font-size: 1.2rem;
`
export const Info = styled.p`
    margin-top: 150px;
    margin-bottom: 100px;
    color: white;
    font-size: 1.7rem;
`
export const Connect = styled.div`
    font-size: 1.4rem;
    font-weight: 700;
`
export const Social = styled.div`
    width: 200px;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
`
export const SocialButton = styled.div`
    font-size: 1.2rem;
`
export const SocialLinkWrapper = styled.a`
    color: inherit;
`
