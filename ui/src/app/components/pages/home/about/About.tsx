/** @format */

import './About.scss';
import About_0 from '../../../../../assets/images/about_0.svg';
import About_1 from '../../../../../assets/images/about_1.svg';
import { ButtonType } from '@app/types/button.type';
import Button from '@app/components/controls/button/Button';
import Pdf from '../../../../../assets/report_example.pdf';
import { useContext } from 'react';
import { ModalContext } from '@app/contexts/modalContext';

export default function About() {
    const { setContextModal } = useContext(ModalContext);

    return (
        <section id="about" className="Doing_doing__QWoWW">
            <div className="wrapper">
                <div className="GridRow_row__g6rmh GridRow_row--margin__re0IR">
                    <div className="GridCol_col__Ga6sL GridCol_col--100__qq4KC">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="Doing_item__tf22j Doing_item--1__Ok4oz is-hovered "
                            data-aos="fade-up"
                            href={Pdf}>
                            <div className="Doing_item__text__g5N1G">
                                <h2 className="Doing_item__title__KMCVX">
                                    Что мы делаем?
                                </h2>
                                <p className="Doing_item__description__NXCCm">
                                    Мы проверяем криптокошельки и транзакции на
                                    наличие там грязных денег и выдаем детальный
                                    отчет. Это нужно, чтобы у вас не было
                                    проблем с проверяющими органами и чтобы
                                    уберечь вас от мошенников.
                                </p>
                                <div className="Doing_item__action__r_YNi">
                                    <Button
                                        type={ButtonType.ARROW_SECONDARY}
                                        label="Пример PDF отчета"
                                    />
                                </div>
                            </div>
                            <div className="Doing_item__image__2hQ9P">
                                <img
                                    alt="Что мы делаем?"
                                    width="972"
                                    height="586"
                                    src={About_0}
                                />
                            </div>
                        </a>
                    </div>
                    <div className="GridCol_col__Ga6sL GridCol_col--50__uKHI2">
                        <div
                            className="Doing_item__tf22j Doing_item--2__2YR6j "
                            data-aos="fade-up">
                            <div className="Doing_item__text__g5N1G">
                                <h3 className="Doing_item__title2__sH_fD">
                                    Зачем это вам ?
                                </h3>
                                <p className="Doing_item__description__NXCCm">
                                    Если вам зайдут грязные деньги — вы рискуете
                                    получить запрос от проверяющих органов и
                                    потерять свои средства из-за блокировок.
                                </p>
                                <p className="Doing_item__description__NXCCm">
                                    Этого может не случится, но ваш кошелек
                                    будет помечен.
                                </p>
                                <p className="Doing_item__description__NXCCm">
                                    Рекомендуем делать проверки, и быть
                                    уверенным в своих активах.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="GridCol_col__Ga6sL GridCol_col--50__uKHI2">
                        <div
                            rel="nofollow"
                            className="Doing_item__tf22j Doing_item--3__0CcMn is-hovered "
                            data-aos="fade-up"
                            data-aos-delay="100"
                            // href="#"
                        >
                            <div className="Doing_item__text__g5N1G">
                                <h3 className="Doing_item__title2__sH_fD">
                                    Первая проверка бесплатно
                                </h3>
                            </div>
                            <div className="Doing_item__image__2hQ9P">
                                <img
                                    alt="Первая проверка бесплатно"
                                    width="706"
                                    height="639"
                                    src={About_1}
                                />
                            </div>
                            <div className="Doing_item__action__r_YNi">
                                <Button
                                    type={ButtonType.ARROW_PRIMARY}
                                    label="Проверить"
                                    // onClick={() =>
                                    //     setContextModal({ isOpen: true })
                                    // }
                                    onClick={() => modal_show()}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
