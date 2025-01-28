/** @format */

import { iUserService } from '@app/types/injector.type';
import { LoginResponse, LoginStatus } from '@app/types/user.type';
import { Environment } from '../../environments/environment';
import sendRequest from '@app/api/baseAPI';

const urls = Object.freeze({
    LOGIN: 'login',
    CHECK: 'check',
});

export default class UserService implements iUserService {
    private config: { protocol: string; host: string };
    private source: string;
    private url: string;

    constructor() {
        this.config = Environment.admin;
        this.source = 'users';
        this.url = `${this.config.host}`;
    }

    async login(login: string, password: string): Promise<LoginResponse> {
        try {
            const formData = new FormData();
            formData.append('data', JSON.stringify({ login, password }));

            const response = await sendRequest(
                this.url,
                `source=${this.source}&method=${urls.LOGIN}`,
                formData,
            );

            if (!response || response === LoginStatus.ERROR) {
                throw '[401]: Not Authorized';
            }

            return {
                status: LoginStatus.OK,
                token: response,
            };
        } catch (error) {
            throw `UserService login error: ${error}`;
        }
    }

    async checkToken(login: string, token: string): Promise<LoginStatus> {
        try {
            const formData = new FormData();
            formData.append('data', JSON.stringify({ login, token }));

            const response = await sendRequest(
                this.url,
                `source=${this.source}&method=${urls.CHECK}`,
                formData,
            );
            
            if (!response || response === LoginStatus.ERROR) {
                throw '[401]: Not Authorized';
            }

            return LoginStatus.OK;
        } catch (error) {
            throw `UserService checkToken error: ${error}`;
        }
    }
}
