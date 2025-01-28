/** @format */

import './Faq.scss';
import Telegram from '../../../../../assets/images/footer/telegram.svg';
import { useContext, useRef, useState } from 'react';
import { AppInfoContext } from '@app/contexts/appInfoContext';

export default function Faq() {
    const { contextAppInfo } = useContext(AppInfoContext);

    const [openedAccordion, setOpenedAccordion] = useState<number | null>(null);
    const openedRef = useRef<HTMLDivElement | null>(null);

    const questions: { question: string; answer: string }[] = [
        {
            question: 'Что показывает проверка адреса?',
            answer: 'Общий риск (в процентах) – вероятность того, что адрес связан с нелегальной деятельностью. Источники риска – известные типы сервисов, с которыми адрес взаимодействовал, и процент средств принятых с / отданных на эти сервисы, по которым рассчитывается общий риск.',
        },
        {
            question: 'Что означают параметры в результатах проверки?',
            answer: `${contextAppInfo.project.fullName} проводит проверку указанного адреса кошелька на наличие связей с известными сервисами в блокчейне. Такие сервисы ${contextAppInfo.project.fullName} условно объединяет в группы с разным уровнем риска незаконной деятельности. В результате проверки показаны связи проверяемого адреса с этими группами в процентном соотношении. На основании всех связей выдается усредненная оценка риска, которая помогает пользователю принимать дальнейшее решение по активам.`,
        },
        {
            question: 'Как понимать оценку риска?',
            answer: 'Каждый клиент сам для себя определяет, какой процент риска для него приемлемый. Условно значения риска можно разделить так: <br /> - 0-25% — это чистый кошелек/транзакция; <br /> - 25-75% — это средний уровень риска; <br /> - 75%+ — такой кошелек/транзакция считаются рискованной. <br /> Также стоит обратить внимание на красные источники риска в подробном анализе, описанные на <a href="#what-do-we-analyze">странице</a> .',
        },
        {
            question: 'Как быстро пополняется баланс?',
            answer: 'После подтверждения транзакции баланс пополняется: <br /> • до 10 минут, если оплата прошла в течение суток после выставления счета, <br />• до 25 минут, если оплата прошла после 24 часов с момента выставления счета. В целом BTC, ETH, USDT и фиат обрабатываются быстрее, чем другие монеты.',
        },
        {
            question: 'Что значит оценка риска в процентах?',
            answer: `${contextAppInfo.project.fullName} находит связи проверяемого адреса с различными пользователями в блокчейне, у каждого из которых — свой условный риск. Общая оценка риска — это среднее значение по всем найденным составляющим. Например, если из 2 BTC на проверяемом кошельке 1 BTC пришел от майнинга (0% риска) и еще 1 BTC из Даркнета (100% риска), то оценка риска составит 50%.`,
        },
        {
            question: `Как ${contextAppInfo.project.fullName} помогает защититься от блокировок?`,
            answer: 'Проверяя кошельки контрагентов перед сделкой, вы можете отказаться от их активов, если оценка риска будет высокой. Также перед переводом средств на другие сервисы вы можете проверить адрес своего кошелька и сохранить результат (сделать скриншот). <br /> <br /> Если проверка показала, что у ваших активов не было связи с нелегальной деятельностью, а сервис вас заблокировал, то вы можете предоставить сохраненный результат для подтверждения чистоты своих активов.',
        },
        {
            question:
                'Риск больше 50%, но я уверен, что адрес надежный. Как быть?',
            answer: 'Результаты проверки основаны на международных базах, которые постоянно обновляются. Поэтому адрес, который имел 0% риска вчера, сегодня мог получить или отдать актив рисковому контрагенту. В этом случае оценка риска изменится. Если вы хотите убедиться в результате и определить, в чем причина высокого риска, мы можем провести для вас детальную проверку. Для этого напишите нам на <a href="mailto:bdo@amIbot.ink">info@amIbot.ink</a> .',
        },
        {
            question: 'В чем отличие между проверкой адреса и транзакции TxID?',
            answer: 'Проверка адреса (кошелька) — это анализ всех когда-либо связанных с ним адресов, с которых принимались средства и на которые средства отправлялись. Проверка транзакции (нужно указать TxID) и затем вы выбираете: <br /> <br /> — Принимал средства (Получатель) и адрес, на который были получены средства (Deposit). В этом случае проверяются связи адресов, с которых средства поступили. Если смотреть на транзакцию в блокчейн эксплорере, то это адреса, которые стоят слева, и все, с кем они взаимодействовали до этой транзакции. <br /> <br />— Отдавал средства (Отправитель) и адрес, на который были отправлены средства (Withdrawal). Здесь проверяется кошелек (в блокчейн эксплорере он стоит справа), который получил средства, а также все его связи до этой транзакции. Таким образом при проверке TxID оцениваются риски для получателя, если выбрать приём средств, и риски для отправителя, если выбрать отправителя.',
        },
        {
            question:
                'Что произойдёт, если я не успею использовать все чеки за месяц?',
            answer: 'Они остаются на вашем счету, и вы можете использовать их в любое время.',
        },
        {
            question: 'Как часто рекомендуется проводить проверки?',
            answer: `Ответ на этот вопрос зависит от вашей уникальной модели риска. Общая рекомендация заключается в том, чтобы проводить проверку ${contextAppInfo.project.shortName} каждый раз, когда вы взаимодействуете с неизвестным кошельком или смарт-контрактом.`,
        },
        {
            question: `Какие криптовалюты анализирует ${contextAppInfo.project.fullName}?`,
            answer: `${contextAppInfo.project.fullName} поддерживает все основные блокчейны и токены на них. Мы постоянно добавляем поддержку дополнительных криптовалют. Вы всегда можете проверить актуальный список поддерживаемых криптовалют в <a href="http://web.amlbot.com" target="_blank">Web Dashboard</a> или в <a href="https://docs.amlbot.com/" target="_blank">API Документации</a> .`,
        },
        {
            question: 'Что если мне нужны еще проверки?',
            answer: 'Bы можете докупать проверки по мере необходимости. Количество проверок всегда отображается в вашей пользовательской информации.',
        },
    ];

    function handlerOpen(accordionNumber: number): void {
        if (openedRef?.current) {
            const content = openedRef.current as HTMLElement;
            content.style.height = 0 + 'px';
        }

        if (accordionNumber === openedAccordion) {
            return setOpenedAccordion(null);
        }

        setTimeout(() => {
            if (!openedRef?.current) {
                return;
            }

            const content = openedRef.current as HTMLElement;
            content.style.height = content.scrollHeight + 'px';
        }, 0);

        return setOpenedAccordion(accordionNumber);
    }

    return (
        <section className="Faq_faq__DLJVu" id="faq">
            <div className="wrapper">
                <h2 className="Faq_title__TVfDt " data-aos="fade-up">
                    Популярные вопросы
                </h2>
                <div className="Faq_container__FPShi">
                    <div
                        className="NotFindQuestion_info__IFB0c "
                        data-aos="fade-up">
                        <h3 className="NotFindQuestion_title__xyrig">
                            Не нашли свой вопрос?
                        </h3>
                        <p className="NotFindQuestion_description__Nnj59">
                            Пишите нам в телеграм. Отвечаем быстро и по делу,
                            ведь у нас все схвачено 👌
                        </p>
                        <a
                            href={contextAppInfo.tgSupportLink}
                            target="blank"
                            rel="noreferrer nofollow"
                            className="NotFindQuestion_link__Xs9AX">
                            <div className="NotFindQuestion_link__icon__EiiAx">
                                <img src={Telegram} alt="Telegram icon" />
                            </div>
                            <div className="NotFindQuestion_link__body__fMjGV">
                                <h4>Мы в Telegram</h4>
                                <p>Ответим в течение 30 сек</p>
                            </div>
                        </a>
                        <p className="NotFindQuestion_note__ww2TO">
                            <small>
                                Мы на связи <b>24/7</b>, однако ночью не всегда
                                можем отвечать быстро
                            </small>
                        </p>
                    </div>
                    <div
                        className="Faq_list__XgjmC "
                        data-aos="fade-up"
                        data-aos-delay="50">
                        <div>
                            {questions.map((question, i) => (
                                <div
                                    className={`Accordion_item__9HEV9 ${openedAccordion === i ? 'Accordion_is-active___uvCa' : ''}`}
                                    onClick={() => handlerOpen(i)}
                                    key={`faq question #${i}`}>
                                    <div className="Accordion_heading__7NIJC">
                                        {question.question}
                                    </div>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: question.answer,
                                        }}
                                        className="SlideToggle_container__c7nrF Accordion_content___rI3t"
                                        ref={
                                            openedAccordion === i
                                                ? openedRef
                                                : null
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
