/** @format */

import { useContext, useEffect, useMemo, useState } from 'react';
import Nav from '../nav/Nav';
import './TelegramSettings.scss';
import { InjectorContext } from '@app/contexts/injectorContext';
import { AppInfoContext } from '@app/contexts/appInfoContext';
import Button from '@app/components/controls/button/Button';
import { ButtonSize, ButtonType } from '@app/types/button.type';
import { AppFieldPaths, AppInfoDBColumn } from '@app/types/app.type';

interface iInput {
    name: AppInfoDBColumn;
    placeholder: string;
    defaultValue: string;
    value: string;
}

export default function TelegramSettings() {
    const { contextInjector } = useContext(InjectorContext);
    const { contextAppInfo, setContextAppInfo } = useContext(AppInfoContext);

    const [inputs, setInputs] = useState<iInput[]>([]);

    const timeoutTime = 2;

    const isSaveDisabled = useMemo(() => {
        if (!inputs.length) {
            return true;
        }

        return inputs.every(input => input.defaultValue === input.value);
    }, [inputs, contextAppInfo]);

    useEffect(() => {
        getData();
    }, []);

    async function getData(): Promise<void> {
        try {
            const { chatId, botToken } =
                await contextInjector.AppInfoService.getTelegramInfo();

            setInputs([
                {
                    name: AppInfoDBColumn.CHATID,
                    placeholder: 'Telegram chat id',
                    defaultValue: chatId,
                    value: chatId,
                },
                {
                    name: AppInfoDBColumn.BOTTOKEN,
                    placeholder: 'Telegram bot token',
                    defaultValue: botToken,
                    value: botToken,
                },
            ]);
        } catch (error) {
            console.error(error);
        }
    }

    async function handlerSubmit(): Promise<void> {
        inputs.forEach(async input => {
            if (input.defaultValue === input.value) {
                return;
            }

            sendData(input.name, input.value);
        });
    }

    async function sendData(
        key: AppInfoDBColumn,
        value: string,
    ): Promise<void> {
        try {
            await contextInjector.AppInfoService.set(key, value);

            const updatedInputs = inputs.map(input =>
                input.name === key ? { ...input, defaultValue: value } : input,
            );

            setInputs(updatedInputs);
        } catch (error) {
            console.error(error);
        }
    }

    function setValueByPath(obj: any, path: string, value: string) {
        const keys = path.split('.');
        const lastKey = keys.pop();
        const deepObj = keys.reduce((o, key) => (o[key] = o[key] || {}), obj);

        if (!lastKey) {
            return;
        }

        deepObj[lastKey] = value;
    }

    return (
        <div className="telegramSettings">
            <Nav />

            <div className="wrapper">
                <form>
                    {inputs.map((input, i) => (
                        <input
                            type="text"
                            name={input.name}
                            defaultValue={input.defaultValue}
                            placeholder={input.placeholder}
                            title={input.placeholder}
                            onChange={({ target }) => {
                                input.value = target.value;
                                setInputs([...inputs]);
                            }}
                            key={`telegramSettings input #${i}`}
                        />
                    ))}

                    <Button
                        disabled={isSaveDisabled}
                        type={ButtonType.PRIMARY}
                        size={ButtonSize.SMALL}
                        label="Update"
                        onClick={handlerSubmit}
                    />
                </form>
            </div>
        </div>
    );
}
