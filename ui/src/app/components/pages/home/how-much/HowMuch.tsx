/** @format */

import Button from '@app/components/controls/button/Button';
import './HowMuch.scss';
import { ButtonType } from '@app/types/button.type';
import { useContext } from 'react';
import { ModalContext } from '@app/contexts/modalContext';

export default function HowMuch() {
    const { setContextModal } = useContext(ModalContext);

    return (
        <section className="HowMatch_howmatch__sPUEA" id="pricing">
            <div className="wrapper">
                <div
                    rel="nofollow"
                    className="HowMatch_box__2JayG is-hovered "
                    data-aos="fade-up">
                    <h2 className="HowMatch_box__title__Cf1KM">
                        Сколько стоит ваше спокойствие?
                    </h2>
                    <div className="HowMatch_box__label___xWnm">
                        Первая проверка — бесплатно
                    </div>
                    <h3 className="HowMatch_box__from__A66l7">От</h3>
                    <div className="HowMatch_price__IZLQy">
                        <div className="HowMatch_price__value__AHgdB">
                            <span>$0.2</span>
                        </div>
                        <div className="HowMatch_price__text__zd918">
                            / за дополнительную проверку
                        </div>
                    </div>
                    <Button
                        type={ButtonType.ARROW_PRIMARY}
                        label="Проверить кошелек"
                        onClick={() => modal_show()}
                        // onClick={() => setContextModal({ isOpen: true })}
                    />
                </div>
                <div className="HowMatch_text__ZNwKt " data-aos="fade-up">
                    По нашей статистике,{' '}
                    <b>каждый четвертый кошелек — подозрительный</b>
                    .<br />
                    Потратив пару долларов на проверку, вы можете уберечь себя
                    от потерь на несколько тысяч долларов.
                </div>
            </div>
        </section>
    );
}
