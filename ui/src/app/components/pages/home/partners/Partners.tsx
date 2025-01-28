/** @format */

import { ImageType } from '@app/types/image.type';
import './Partners.scss';
import Slider from 'react-slick';

interface iSlide {
    width: number;
    height: number;
    url: any;
}

export default function Partners() {
    const partnersTopSlider: iSlide[] = [
        { width: 1782, height: 588, url: ImageType.PARTNER_0 },
        { width: 396, height: 140, url: ImageType.PARTNER_1 },
        { width: 424, height: 140, url: ImageType.PARTNER_2 },
        { width: 424, height: 140, url: ImageType.PARTNER_3 },
        { width: 424, height: 140, url: ImageType.PARTNER_4 },
        { width: 424, height: 140, url: ImageType.PARTNER_5 },
        { width: 424, height: 140, url: ImageType.PARTNER_6 },
        { width: 424, height: 140, url: ImageType.PARTNER_7 },
    ];
    const partnersBottomSlider: iSlide[] = [
        { width: 416, height: 168, url: ImageType.PARTNER_8 },
        { width: 636, height: 210, url: ImageType.PARTNER_9 },
        { width: 424, height: 140, url: ImageType.PARTNER_10 },
        { width: 424, height: 140, url: ImageType.PARTNER_11 },
        { width: 424, height: 140, url: ImageType.PARTNER_12 },
        { width: 954, height: 315, url: ImageType.PARTNER_13 },
        { width: 954, height: 315, url: ImageType.PARTNER_14 },
    ];
    const sliderSettings = {
        infinite: true,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'linear',
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <section className="Partners_partners__9ZcJo">
            <div className="wrapper">
                <h2 className="Partners_title__o1OV4" data-aos="fade-up">
                    Нам доверяют
                </h2>
            </div>
            <div data-aos="fade-up">
                <div className="slider">
                    <Slider {...sliderSettings}>
                        {partnersTopSlider.map((partner, i) => (
                            <div key={`topSlider partner #${i}`}>
                                <div className="Partners_item__lJUod">
                                    <img
                                        alt=""
                                        width={partner.width}
                                        height={partner.height}
                                        src={partner.url}
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="slider">
                    <Slider {...{ ...sliderSettings, rtl: true }}>
                        {partnersBottomSlider.map((partner, i) => (
                            <div key={`topSlider partner #${i}`}>
                                <div className="Partners_item__lJUod">
                                    <img
                                        alt=""
                                        width={partner.width}
                                        height={partner.height}
                                        src={partner.url}
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}
