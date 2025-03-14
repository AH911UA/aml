/** @format */

import { ImageType } from '@app/types/image.type';
import './WhatElse.scss';
import WHAT_ELSE_0 from '../../../../../assets/images/whatElse_0.svg';
import WHAT_ELSE_2 from '../../../../../assets/images/whatElse_2.svg';
import Button from '@app/components/controls/button/Button';
import { ButtonType } from '@app/types/button.type';
import { useContext } from 'react';
import { ModalContext } from '@app/contexts/modalContext';
import { AppInfoContext } from '@app/contexts/appInfoContext';

export default function WhatElse() {
    const { setContextModal } = useContext(ModalContext);
    const { contextAppInfo } = useContext(AppInfoContext);

    return (
        <section className="WhatElse_whatelse__gyBuY" id="whatelse">
            <div className="wrapper">
                <h2 className="WhatElse_title__VA0si " data-aos="fade-up">
                    Что еще?
                </h2>
                <div>
                    <span
                        className="WhatElse_item__oyesk WhatElse_item--1__N7Xgt is-hovered "
                        data-aos="fade-up">
                        <div className="WhatElse_item__body__uvF8y">
                            <div>
                                <h3 className="WhatElse_item__title__TnaTb">
                                    Проверяем санкционные списки
                                </h3>
                                <p className="WhatElse_item__description__BqcJ3">
                                    Покажем находится ли адрес в санкционных
                                    списках. Любое взаимодействие с такими
                                    адресами может обернуться штрафами,
                                    блокировкой или отзывом лицензии.
                                </p>
                            </div>
                            <div className="WhatElse_item__actions__0AdBn">
                                <Button
                                    type={ButtonType.ARROW_SECONDARY}
                                    label="Проверить адрес"
                                    onClick={() =>
                                        setContextModal({ isOpen: true })
                                    }
                                // onClick={() => modal_show()}
                                />
                            </div>
                        </div>
                        <div className="WhatElse_item__image__9tjBb">
                            <img
                                alt=""
                                width="476"
                                height="467"
                                src={WHAT_ELSE_0}
                            />
                        </div>
                    </span>
                </div>
                <a
                    href={contextAppInfo.tgSupportLink}
                    target="_blank"
                    rel="noreferrer"
                    className="WhatElse_item__oyesk WhatElse_item--2__fgvT4 is-hovered "
                    id="investigation"
                    data-aos="fade-up">
                    <div className="WhatElse_item__body__uvF8y">
                        <div>
                            <h3 className="WhatElse_item__title__TnaTb">
                                Помогаем спасти украденную крипту
                            </h3>
                            <p className="WhatElse_item__description__BqcJ3">
                                Мы помогаем вернуть деньги, которые были
                                украдены мошенниками с вашего кошелька.
                                Специалист проанализирует ситуацию, и предложит
                                решение.
                            </p>
                        </div>
                        <div className="WhatElse_item__actions__0AdBn">
                            <Button
                                type={ButtonType.ARROW_PRIMARY}
                                label="Бесплатная консультация"
                            />

                            <div className="InfoGuard_box__RZoQl WhatElse_note__HjhVn">
                                <div className="InfoGuard_inner__6nn8W">
                                    Вы платите только за результат. Если не
                                    сможем помочь — прямо об этом скажем
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="WhatElse_item__image__9tjBb">
                        <img
                            alt=""
                            width="918"
                            height="899"
                            src={ImageType.WHAT_ELSE_1}
                        />
                    </div>
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    id="api-integration"
                    className="WhatElse_item__oyesk undefined is-hovered "
                    data-aos="fade-up"
                    href={contextAppInfo.tgSupportLink}>
                    <div className="WhatElse_item__body__uvF8y">
                        <div>
                            <h3 className="WhatElse_item__title__TnaTb">
                                Интеграция с API
                            </h3>
                            <p className="WhatElse_item__description__BqcJ3">
                                Мы поможем вам настроить автоматическую проверку
                                всех входящих транзакций. Выделяем программиста,
                                который поможет быстро интегрировать наш API в
                                ваш сервис.
                            </p>
                            <p className="WhatElse_item__description__BqcJ3">
                                Вам больше не нужно переживать и освободится
                                время для других дел.
                            </p>
                        </div>
                        <div className="WhatElse_item__actions__0AdBn">
                            <Button
                                type={ButtonType.ARROW_PRIMARY}
                                label="Посмотреть документацию"
                            />
                        </div>
                    </div>
                    <div className="WhatElse_item__image__9tjBb">
                        <img
                            alt=""
                            width="400"
                            height="333"
                            src={WHAT_ELSE_2}
                        />
                    </div>
                </a>
            </div>
        </section>
    );
}
