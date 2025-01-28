/** @format */

import Nav from '@app/components/common/nav/Nav';
import './Home.scss';
import Footer from '@app/components/common/footer/Footer';
import Header from '@app/components/common/header/Header';
import Report from './report/Report';
import Why from './why/Why';
import Partners from './partners/Partners';
import Reviews from './reviews/Reviews';
import Stats from './stats/Stats';
import Team from './team/Team';
import WhatElse from './what-else/WhatElse';
import HowMuch from './how-much/HowMuch';
import AllStats from './all-stats/AllStats';
import HowWorks from './how-works/HowWorks';
import About from './about/About';
import Faq from './faq/Faq';

export default function Home() {
    return (
        <div className={`home`}>
            <Nav />

            <div>
                <Nav />

                <Header />

                <About />

                <HowWorks />

                <AllStats />

                <HowMuch />

                <WhatElse />

                <Stats />

                <Team />

                <Reviews />

                <Partners />

                <Why />

                <Faq />

                <Report />

                <Footer />
            </div>
        </div>
    );
}
