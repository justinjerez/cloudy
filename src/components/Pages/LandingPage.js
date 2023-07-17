import React from 'react';

import Start from '../Sections/Start';
import Devices from '../Sections/Devices';
import Container from '../Layout/Container';
import TryIt from '../Sections/TryIt';
import Footer from '../Sections/Footer';

function LandingPage() {
    return (
        <Container>
            <Start />
            <Devices />
            <TryIt />
            <Footer />
        </Container>
    );
}

export default LandingPage;
