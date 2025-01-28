/** @format */

import { iTelegramService } from '@app/types/injector.type';
import { Environment } from '../../environments/environment';
import sendRequest from '@app/api/baseAPI';
import { SendMessageStatus } from '@app/types/telegram.type';

const urls = Object.freeze({
    SEND: 'sendMessage',
});

export default class TelegramService implements iTelegramService {
    private config: { protocol: string; host: string };
    private source: string;
    private url: string;

    constructor() {
        this.config = Environment.admin;
        this.source = 'bot';
        this.url = `${this.config.host}`;
    }
    async sendMessage(message: string): Promise<SendMessageStatus> {
        try {
            message = encodeURIComponent(message);

            const formData = new FormData();
            formData.append('data', JSON.stringify({ message }));

            const response = await sendRequest(
                this.url,
                `source=${this.source}&method=${urls.SEND}`,
                formData,
            );

            if (!response || response !== SendMessageStatus.OK) {
                throw '[500]: Internal server error';
            }

            return SendMessageStatus.OK;
        } catch (error) {
            throw `TelegramService sendMessage error: ${error}`;
        }
    }
}
