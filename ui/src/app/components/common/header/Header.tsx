/** @format */

import { ImageType } from '@app/types/image.type';
import './Header.scss';
import Button from '@app/components/controls/button/Button';
import { ButtonType } from '@app/types/button.type';
import { useContext } from 'react';
import { ModalContext } from '@app/contexts/modalContext';

export default function Header() {
    const { setContextModal } = useContext(ModalContext);

    return (
        <header className="Prime_prime__K8ylJ" id="prime">
            <div className="wrapper Prime_wrapper__nmUkY">
                <div className="Prime_text__fvhhu">
                    <h1 className="Prime_title__PLqGZ">
                        Проверяем криптокошельки на грязные деньги
                    </h1>
                    <p className="Prime_description__YcQnM">
                        Проверяя кошельки, вы защищаете себя от мошенников и
                        ворованных монет.
                    </p>
                    <div className="Prime_actions__cmJx0">
                        <Button
                            label="Проверить кошелек"
                            onClick={() => setContextModal({ isOpen: true })}
                        />

                        <Button
                            type={ButtonType.ARROW_PRIMARY}
                            label="Личный кабинет"
                            onClick={() => setContextModal({ isOpen: true })}
                        />
                    </div>
                </div>
                <div className="Prime_image__VeMYH">
                    <img
                        alt="Проверяем криптокошельки на грязные деньги"
                        loading="eager"
                        width="1244"
                        height="1140"
                        src={ImageType.HEADER as any}
                    />
                </div>
            </div>
        </header>
    );
}
