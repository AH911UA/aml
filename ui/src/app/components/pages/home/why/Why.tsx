/** @format */

import { ImageType } from '@app/types/image.type';
import './Why.scss';
import { useContext } from 'react';
import { AppInfoContext } from '@app/contexts/appInfoContext';

export default function Why() {
    const { contextAppInfo } = useContext(AppInfoContext);

    return (
        <section className="Why_why__DzgnL">
            <div className="wrapper">
                <h2 className="Why_title__b_m8m " data-aos="fade-up">
                    Почему {contextAppInfo.project.fullName}
                </h2>
                <div className="GridRow_row__g6rmh GridRow_row--margin__re0IR">
                    <div className="GridCol_col__Ga6sL GridCol_col--50__uKHI2">
                        <div
                            className="Why_item__geEbD Why_item--1__HPssP "
                            data-aos="fade-up">
                            <h3 className="Why_item__title__ukTFg">
                                Безопасность
                            </h3>
                            <p className="Why_item__description__XTo_5">
                                Персональные данные обрабатываются и хранятся в
                                соответствии с GDPR.
                            </p>
                            <div className="Why_item__image__PMhdK">
                                <img
                                    alt=""
                                    width="344"
                                    height="507"
                                    src={ImageType.WHY_0}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="GridCol_col__Ga6sL GridCol_col--50__uKHI2">
                        <div
                            className="Why_item__geEbD Why_item--2__bzzdB "
                            data-aos="fade-up"
                            data-aos-delay="50">
                            <h3 className="Why_item__title__ukTFg">
                                Надежность
                            </h3>
                            <p className="Why_item__description__XTo_5">
                                У нас имеются соответствующие сертификаты,
                                которые вы можете показать проверяющим органам.
                            </p>
                            <div className="Why_item__image__PMhdK">
                                <img
                                    alt=""
                                    width="778"
                                    height="572"
                                    src={ImageType.WHY_1}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="GridCol_col__Ga6sL GridCol_col--66__1wbT0">
                        <div
                            className="Why_item__geEbD Why_item--3__GficY "
                            data-aos="fade-up">
                            <h3 className="Why_item__title__ukTFg">
                                Поддержка 24/7
                            </h3>
                            <p className="Why_item__description__XTo_5">
                                Мы на связи 24/7, поэтому любой вопрос можем
                                решить быстро и в формате живого общения.
                            </p>
                            <p className="Why_item__description__XTo_5">
                                <small>
                                    Мы живые люди, поэтому ночью можем отвечать
                                    не так оперативно, как днем ✌️
                                </small>
                            </p>
                            <div className="Why_item__image__PMhdK">
                                <img
                                    alt=""
                                    width="786"
                                    height="783"
                                    src={ImageType.WHY_2}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="GridCol_col__Ga6sL GridCol_col--33__Ak0X6">
                        <div
                            className="Why_item__geEbD Why_item--4__EIbdC "
                            data-aos="fade-up"
                            data-aos-delay="50">
                            <h3 className="Why_item__title__ukTFg">Опыт</h3>
                            <p className="Why_item__description__XTo_5">
                                Мы спасли около
                                <b>
                                    <span>$5 359 800</span>
                                </b>
                                от блокировки на биржах и обменниках
                            </p>
                            <div className="Why_item__image__PMhdK">
                                <img
                                    alt=""
                                    width="348"
                                    height="533"
                                    src={ImageType.WHY_3}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
