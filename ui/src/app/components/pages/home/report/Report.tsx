/** @format */

import Button from '@app/components/controls/button/Button';
import './Report.scss';
import { ButtonType } from '@app/types/button.type';
import { useContext, useRef } from 'react';
import { InjectorContext } from '@app/contexts/injectorContext';
import validator from 'validator';

export default function Report() {
    const { contextInjector } = useContext(InjectorContext);

    const inputRef = useRef<HTMLInputElement>(null);

    async function handlerSubmit(): Promise<void> {
        const input = inputRef.current;

        if (!input) {
            return;
        }

        console.log(validator.isEmail(input.value));
        
        if (!validator.isEmail(input.value)) {
            return input.parentElement?.classList.add('Email_is-error__xjv_j');
        } else {
            input.parentElement?.classList.remove('Email_is-error__xjv_j');
        }

        const message = `[detailed report]
${input.value}`;

        try {
            await contextInjector.TelegramService.sendMessage(message);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section className="Email_email__wliZa">
            <div className="wrapper">
                <h2 className="Email_title__ofEw9" data-aos="fade-up">
                    Оставляйте почту и мы отправим вам пример детального отчета
                </h2>
                <div className="Email_inner__08D_u" data-aos="fade-up">
                    <div className="Email_form__xw_LK">
                        <input
                            type="email"
                            placeholder="Ваш е-мейл"
                            className="Email_input__DUQGk"
                            required
                            ref={inputRef}
                        />
                        <Button
                            type={ButtonType.PRIMARY}
                            label="Скачать пример"
                            onClick={handlerSubmit}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
