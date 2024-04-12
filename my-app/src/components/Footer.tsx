import React from 'react';
import {Logo} from "./Logo";
import {FooterSocialIcon} from "./FooterSocialIcon";


export const Footer = () => {
    return <footer className="footer p-10 bg-base-200 text-base-content">
        <Logo/>
        <nav>
            <h6 className="footer-title">About Me</h6>
            <a className="link link-hover">Stack</a>
            <a className="link link-hover">Contact</a>
        </nav>
        <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
            <FooterSocialIcon link="https://www.facebook.com/" icon={"facebook"}></FooterSocialIcon>
            <FooterSocialIcon link="https://www.instagram.com/" icon={"instagram"}></FooterSocialIcon>
            <FooterSocialIcon link="https://github.com/GregorySVD" icon={"github"}></FooterSocialIcon>
            <FooterSocialIcon link="https://www.linkedin.com/in/grzegorz-terenda/" icon={"linkedin"}></FooterSocialIcon>
        </nav>
    </footer>
}
