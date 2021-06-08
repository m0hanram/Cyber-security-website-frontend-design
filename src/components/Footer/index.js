import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinkItems, FooterLinksWrapper, FooterLink, FooterLinkTitle, SocialIconLink, SocialIcons, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights} from './FooterElements'
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {
    const toggleHome= () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Our clients</FooterLinkTitle>
                                <FooterLink href="https://upstox.com/">Upstox</FooterLink>
                                <FooterLink href="/">Client2</FooterLink>
                                <FooterLink href="/">Client3</FooterLink>
                                <FooterLink href="/">Client4</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>                    
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo onClick={toggleHome}>
                            thinkgroupy
                        </SocialLogo>
                        <WebsiteRights>THINKGRPY SERVICES PRIVATE LIMITED © {new Date().getFullYear()} All Rights Reseved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>                            
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>                            
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
