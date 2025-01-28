/** @format */

import { ImageType } from '@app/types/image.type';
import './Reviews.scss';
import Slider from 'react-slick';
import { useContext, useRef } from 'react';
import { AppInfoContext } from '@app/contexts/appInfoContext';

export default function Reviews() {
    const { contextAppInfo } = useContext(AppInfoContext);

    const sliderRef = useRef<Slider>(null);

    const reviews: {
        img: any;
        text: string;
        link: { url: string; label: string };
    }[] = [
        {
            img: ImageType.REVIEW_0,
            text: `“ Мы очень довольны ${contextAppInfo.project.fullName}, благодаря интеграции с нашей платформой нам удалось предотвратить большое количество транзакций, связанных с незаконными средствами. Уверены, что будем и дальше развивать наше сотрудничество. ”`,
            link: { url: 'https://alltrust.me', label: 'AllTrust' },
        },
        {
            img: ImageType.REVIEW_1,
            text: `“ ${contextAppInfo.project.fullName} уже довольно давно является для нас замечательным партнером. Он невероятно прост в использовании, надежен и, самое главное, обеспечивает дополнительное спокойствие для наших пользователей. Мы в Guarda с нетерпением ждем возможности продолжить нашу совместную работу. ”`,
            link: { url: 'https://guarda.com', label: 'Guarda' },
        },
        {
            img: ImageType.REVIEW_2,
            text: `“ Мы используем ${contextAppInfo.project.fullName} уже почти два года и благодаря им успешно выявили и остановили сотни угроз. Обязательно продолжу пользоваться их услугами. ”`,
            link: { url: 'https://csgo500.com', label: 'Den • CSGO500' },
        },
        {
            img: ImageType.REVIEW_3,
            text: `“ Криптосообщество сталкивалось с трудностями в выявлении источников подозрительных средств, но после появления ${contextAppInfo.project.fullName} все трудности исчезли. Всем советую пользоваться этим сервисом, пока ваша деятельность не станет полностью законной. ”`,
            link: { url: 'https://uniochange.com', label: 'CEO • Uniochange' },
        },
    ];
    const sliderSettings = {
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const nextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const prevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    return (
        <section className="Reviews_reviews__6pixx">
            <div id="reviews" className="wrapper Reviews_wrapper__vhmGT">
                <div className="Reviews_heading__nk0_J " data-aos="fade-up">
                    <h2 className="Reviews_title__0A2Wb">
                        Вот что говорят наши клиенты
                    </h2>
                    <p className="Reviews_description___VAp0">
                        Исследуйте наш сервис с людьми, которым мы уже помогли.
                    </p>
                </div>
                <div
                    className="Reviews_actions__rfn7L "
                    data-aos="fade-up"
                    data-aos-delay="100">
                    <button
                        className="swiper-prev Reviews_prev__9_mgk"
                        onClick={prevSlide}>
                        <svg
                            id="icon-arrow-left-long"
                            className="icon icon-arrow-left-long"
                            viewBox="0 0 20 11">
                            <path d="M0.153482779,4.37823078 L0.229825153,4.2900022 L4.31202515,0.227502195 C4.61792515,-0.0768378048 5.11252515,-0.0757078048 5.41692515,0.230152195 C5.72132515,0.535972195 5.72012515,1.0306222 5.41432515,1.3350022 L2.67352515,4.0625022 L19.2187752,4.0625022 C19.6502592,4.0625022 20.0000252,4.4122522 20.0000252,4.8437522 C20.0000252,5.2752522 19.6502592,5.6249522 19.2187752,5.6249522 L2.67362515,5.6249522 L5.41432515,8.3524522 C5.72012515,8.6568522 5.72122515,9.1515522 5.41692515,9.4573522 C5.11252515,9.7632522 4.61782515,9.7642522 4.31202515,9.4599522 L0.229125153,5.3967522 C-0.0490566647,5.11911583 -0.0735194747,4.68379352 0.153482779,4.37823078 Z"></path>
                        </svg>
                    </button>
                    <button
                        className="swiper-next Reviews_next__XvYTV"
                        onClick={nextSlide}>
                        <svg
                            id="icon-arrow-right-long"
                            className="icon icon-arrow-right-long"
                            viewBox="0 0 20 11">
                            <path d="M19.7709,4.2907422 C19.7706,4.2905122 19.7704,4.2902322 19.7702,4.2900022 L15.688,0.227502195 C15.3821,-0.0768378048 14.8875,-0.0757078048 14.5831,0.230152195 C14.2787,0.535972195 14.2799,1.0306222 14.5857,1.3350022 L17.3265,4.0625022 L0.78125,4.0625022 C0.349766,4.0625022 0,4.4122522 0,4.8437522 C0,5.2752522 0.349766,5.6249522 0.78125,5.6249522 L17.3264,5.6249522 L14.5857,8.3524522 C14.2799,8.6568522 14.2788,9.1515522 14.5831,9.4573522 C14.8875,9.7632522 15.3822,9.7642522 15.688,9.4599522 L19.7702,5.3974522 C19.7704,5.3972522 19.7706,5.3969522 19.7709,5.3967522 C20.0769,5.0913522 20.0759,4.5951522 19.7709,4.2907422 Z"></path>
                        </svg>
                    </button>
                </div>
                <div data-aos="fade-up" className="">
                    <Slider {...sliderSettings} ref={sliderRef}>
                        {reviews.map((review, i) => (
                            <div key={`review #${i}`}>
                                <div className="Reviews_item__mqz47">
                                    <div className="Reviews_image__cLaZN">
                                        <img
                                            alt=""
                                            width="942"
                                            height="816"
                                            src={review.img}
                                        />
                                    </div>
                                    <div className="Reviews_text__DuWOu">
                                        <p>{review.text}</p>
                                        <p>
                                            <small>
                                                <a href={review.link.url}>
                                                    {review.link.label}
                                                </a>
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}
