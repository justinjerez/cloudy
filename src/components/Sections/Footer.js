import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <FooterSection>
            <p>© Copyright 2021 | Made by Justin Jerez</p>
        </FooterSection>
    );
}

export default Footer;

const FooterSection = styled.footer`
    text-align: center;
    padding-bottom: 4rem;

    > p {
        font-size: 2rem;
        font-weight: 500;
        letter-spacing: 0.2rem;
        color: var(--color-light-gray);
    }
`;
