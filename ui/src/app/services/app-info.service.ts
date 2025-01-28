/** @format */

import sendRequest from '@app/api/baseAPI';
import { iAppInfo, AppInfoDBColumn, iAppTelegramInfo } from '@app/types/app.type';
import { iAppInfoService } from '@app/types/injector.type';
import { Environment } from '../../environments/environment';
import { LoginStatus } from '@app/types/user.type';

const urls = Object.freeze({
    GET: 'get',
    SET: 'set',
});

export default class AppInfoService implements iAppInfoService {
    private config: { protocol: string; host: string };
    private source: string;
    private url: string;

    private id: number = -1;

    constructor() {
        this.config = Environment.admin;
        this.source = 'app_info';
        this.url = `${this.config.host}`;
    }

    async get(): Promise<iAppInfo> {
        try {
            const response = await sendRequest(
                this.url,
                `source=${this.source}&method=${urls.GET}`,
            );

            if (!response) {
                throw 'No info received';
            }

            const {
                id,
                project_fullName,
                project_shortName,
                project_creationYear,
                company_name,
                company_address,
                tgSupportLink,
            } = response[0];

            if (
                !project_fullName ||
                !company_name ||
                !company_address ||
                !tgSupportLink
            ) {
                throw 'Not all data provided';
            }

            this.id = id;

            return {
                project: {
                    fullName: project_fullName,
                    shortName: project_shortName,
                    creationYear: project_creationYear,
                },
                company: {
                    name: company_name,
                    address: company_address,
                },
                tgSupportLink,
            } as iAppInfo;
        } catch (error) {
            throw `AppInfoService get error: ${error}`;
        }
    }

    async getTelegramInfo(): Promise<iAppTelegramInfo> {
        try {
            const response = await sendRequest(
                this.url,
                `source=${this.source}&method=${urls.GET}`,
            );

            if (!response) {
                throw 'No info received';
            }

            const { chatId, botToken } = response[0];

            if (chatId === undefined || botToken === undefined) {
                throw 'Not all data provided';
            }

            return { chatId, botToken };
        } catch (error) {
            throw `AppInfoService get error: ${error}`;
        }
    }

    async set(key: AppInfoDBColumn, value: string): Promise<void> {
        try {
            const formData = new FormData();
            formData.append(
                'data',
                JSON.stringify({ id: this.id, key, value }),
            );

            const response = await sendRequest(
                this.url,
                `source=${this.source}&method=${urls.SET}`,
                formData,
            );

            if (!response || response !== LoginStatus.OK) {
                throw "value didn't edit";
            }
        } catch (error) {
            throw `AppInfoService set error: ${error}`;
        }
    }
}
