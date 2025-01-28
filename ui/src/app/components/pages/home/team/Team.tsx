/** @format */

import { ImageType } from '@app/types/image.type';
import './Team.scss';
import LinkedIn from '../../../../../assets/images/footer/linkedin.svg';
import Twitter from '../../../../../assets/images/footer/twitter.svg';
import { ReactElement, useContext, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { AppInfoContext } from '@app/contexts/appInfoContext';

interface iMemberCard {
    name: string;
    position: string;
    image: any;
    twitter?: string;
    linkedIn?: string;
}

export default function Team() {
    const { contextAppInfo } = useContext(AppInfoContext);

    const sliderRef = useRef<HTMLDivElement | null>(null);

    const team: iMemberCard[] = [
        {
            name: 'Slava Demchuk',
            position: 'Co-Founder',
            image: ImageType.PERSON_SLAVA_DEMCHUK,
            linkedIn: 'https://www.linkedin.com/in/demchukvm/',
            twitter: 'https://twitter.com/demchukvm',
        },
        {
            name: 'Vasily Vidmanov',
            position: 'Chief Operating Officer',
            image: ImageType.PERSON_VASILY_VIDMANOV,
            linkedIn: 'https://www.linkedin.com/in/vasily-vidmanov-596620126/',
        },
        {
            name: 'Andrew Aleksandrov',
            position: 'Chief Commercial Officer',
            image: ImageType.PERSON_ANDREW_ALEKSANDROV,
            linkedIn: 'https://www.linkedin.com/in/asaleksandrov/',
        },
        {
            name: 'Sid Panda',
            position: 'Blockchain Analyst',
            image: ImageType.PERSON_SID_PANDA,
            linkedIn: 'https://www.linkedin.com/in/sidhartha-panda-24862115/',
        },
        {
            name: 'Niko Demchuk',
            position: `Lawyer / Certified ${contextAppInfo.project.shortName} Specialist`,
            image: ImageType.PERSON_MYKOLA_DEMCHUK,
            linkedIn: 'https://www.linkedin.com/in/mykdem/',
        },
        {
            name: 'Ganna Voievodina',
            position: 'Legal Advisor',
            image: ImageType.PERSON_ANNA_VOEVODINA,
            linkedIn: 'https://www.linkedin.com/in/ganna-voievodina-97613544/',
        },
        {
            name: 'Vlad Raskosov',
            position: 'Business development manager',
            image: ImageType.PERSON_VLAD_RASKOSOV,
            linkedIn: 'https://www.linkedin.com/in/amlbotvladyslav-raskosov/',
        },
        {
            name: 'Denys Shestak',
            position: 'Business development manager',
            image: ImageType.PERSON_DENYS_SHESTAK,
            linkedIn: 'https://www.linkedin.com/in/denys-shestak-667735213/',
        },
        {
            name: 'Nikita Raskosov',
            position: 'Customer support manager',
            image: ImageType.PERSON_NIKITA_RASKOSOV,
            linkedIn: 'https://www.linkedin.com/in/nikita-raskosov-827281238/',
        },
    ];
    const sliderSettings = {
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    useEffect(() => {
        setTimeout(() => {
            if (!sliderRef.current) {
                return;
            }

            const content = sliderRef.current.children[0].children[0]
                .children[0] as HTMLDivElement;

            const max = Array.from(content.children).reduce((acc, curr) => {
                const height = curr.scrollHeight;
                if (height > acc) {
                    acc = height;
                }
                return acc;
            }, 0);

            content.style.height = max + 'px';
        }, 0);
    }, []);

    function getMemberCard(member: iMemberCard, i: number): ReactElement {
        return (
            <div className="member_card" key={`team member ${i}`}>
                <div className="column">
                    <img
                        alt={member.name}
                        width="469"
                        height="366"
                        src={member.image}
                    />

                    <div className="member_info">
                        <h3 className="member_info_name">{member.name}</h3>

                        <div className="member_info_position">
                            {member.position}
                        </div>

                        <nav className="member_info_social">
                            {member.linkedIn ? (
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={member.linkedIn}>
                                    <img
                                        src={LinkedIn}
                                        className="icon"
                                        alt={`${member.name} telegram`}
                                    />
                                </a>
                            ) : (
                                ''
                            )}
                            {member.twitter ? (
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={member.twitter}>
                                    <img
                                        src={Twitter}
                                        className="icon"
                                        alt={`${member.name} twitter`}
                                    />
                                </a>
                            ) : (
                                ''
                            )}
                        </nav>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <section className="team">
            <div className="wrapper">
                <h2 className="team_title" data-aos="fade-up">
                    Наша команда
                </h2>
                <p className="team_text" data-aos="fade-up">
                    {contextAppInfo.project.shortName} специалисты помогают
                    решить сложные ситуации и уберечь вас от штрафов и
                    блокировок. Профессиональные специалисты будут представлять
                    ваши интересы вплоть до суда, если понадобится.
                </p>
                <div className="desktopView slider">
                    {team.map((member, i) => getMemberCard(member, i))}
                </div>
                <div className="mobileView slider" ref={sliderRef}>
                    <Slider {...sliderSettings}>
                        {team.map((member, i) => getMemberCard(member, i))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}
