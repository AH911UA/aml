/** @format */

export interface LoginResponse {
    status: LoginStatus;
    token?: string;
}

export enum LoginStatus {
    OK = 'OK',
    ERROR = 'ERROR',
}
