/** @format */

import AppInfoService from '@app/services/app-info.service';
import UserService from '@app/services/user.service';
import { LoginResponse, LoginStatus } from './user.type';
import { AppInfoDBColumn, iAppInfo, iAppTelegramInfo } from './app.type';
import TelegramService from '@app/services/telegram.service';
import { SendMessageStatus } from './telegram.type';

export const InjectorServiceProvider: iInjectorServiceProvider = {
    AppInfoService: new AppInfoService(),
    UserService: new UserService(),
    TelegramService: new TelegramService(),
};

export interface iInjectorServiceProvider {
    AppInfoService: iAppInfoService;
    UserService: iUserService;
    TelegramService: iTelegramService;
}

export interface Inectable {
    injector: iInjectorServiceProvider;
}

export interface iAppInfoService {
    get(): Promise<iAppInfo>;
    getTelegramInfo(): Promise<iAppTelegramInfo>;
    set(key: AppInfoDBColumn, value: string): Promise<void>;
}

export interface iUserService {
    login(login: string, password: string): Promise<LoginResponse>;
    checkToken(login: string, token: string): Promise<LoginStatus>;
}

export interface iTelegramService {
    sendMessage(message: string): Promise<SendMessageStatus>;
}
