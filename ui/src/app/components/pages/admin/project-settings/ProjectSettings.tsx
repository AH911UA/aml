/** @format */

import { useContext, useEffect, useMemo, useState } from 'react';
import Nav from '../nav/Nav';
import './ProjectSettings.scss';
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

export default function ProjectSettings() {
    const { contextInjector } = useContext(InjectorContext);
    const { contextAppInfo, setContextAppInfo } = useContext(AppInfoContext);

    const [inputs, setInputs] = useState<iInput[]>([]);

    const isSaveDisabled = useMemo(() => {
        if (!inputs.length) {
            return true;
        }

        return inputs.every(input => input.defaultValue === input.value);
    }, [inputs, contextAppInfo]);

    useEffect(() => {
        setInputs([
            {
                name: AppInfoDBColumn.PROJECT_FULLNAME,
                placeholder: 'Project full name',
                defaultValue: contextAppInfo.project.fullName,
                value: contextAppInfo.project.fullName,
            },
            {
                name: AppInfoDBColumn.PROJECT_SHORTNAME,
                placeholder: 'Project short name',
                defaultValue: contextAppInfo.project.shortName,
                value: contextAppInfo.project.shortName,
            },
            {
                name: AppInfoDBColumn.PROJECT_CREATIONYEAR,
                placeholder: 'Project creation year (optional)',
                defaultValue: contextAppInfo.project.creationYear,
                value: contextAppInfo.project.creationYear,
            },
            {
                name: AppInfoDBColumn.COMPANY_NAME,
                placeholder: 'Company name',
                defaultValue: contextAppInfo.company.name,
                value: contextAppInfo.company.name,
            },
            {
                name: AppInfoDBColumn.COMPANY_ADDRESS,
                placeholder: 'Company address',
                defaultValue: contextAppInfo.company.address,
                value: contextAppInfo.company.address,
            },
            {
                name: AppInfoDBColumn.TG_SUPPORTLINK,
                placeholder: 'Telegram link to support account',
                defaultValue: contextAppInfo.tgSupportLink,
                value: contextAppInfo.tgSupportLink,
            },
        ]);
    }, [contextAppInfo]);

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

            const newContextAppInfo = { ...contextAppInfo };

            if (AppFieldPaths[key]) {
                setValueByPath(newContextAppInfo, AppFieldPaths[key], value);
            }

            setContextAppInfo({ ...newContextAppInfo });
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
        <div className="projectSettings">
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
                            key={`projectSettings input #${i}`}
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
