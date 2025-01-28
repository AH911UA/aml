/** @format */

export interface iAppInfo {
    project: {
        fullName: string;
        shortName: string;
        creationYear: string;
    };
    company: {
        name: string;
        address: string;
    };
    tgSupportLink: string;
}

export const AppInfoInitialData: iAppInfo = Object.freeze({
    project: {
        fullName: '',
        shortName: '',
        creationYear: '',
    },
    company: {
        name: '',
        address: '',
    },
    tgSupportLink: '',
});

export interface iAppTelegramInfo {
    chatId: string;
    botToken: string;
}

export enum AppInfoDBColumn {
    PROJECT_FULLNAME = 'project_fullName',
    PROJECT_SHORTNAME = 'project_shortName',
    PROJECT_CREATIONYEAR = 'project_creationYear',
    COMPANY_NAME = 'company_name',
    COMPANY_ADDRESS = 'company_address',
    TG_SUPPORTLINK = 'tgSupportLink',
    CHATID = 'chatId',
    BOTTOKEN = 'botToken'
}

export const AppFieldPaths = Object.freeze({
    [AppInfoDBColumn.PROJECT_FULLNAME]: 'project.fullName',
    [AppInfoDBColumn.PROJECT_SHORTNAME]: 'project.shortName',
    [AppInfoDBColumn.PROJECT_CREATIONYEAR]: 'project.creationYear',
    [AppInfoDBColumn.COMPANY_NAME]: 'company.name',
    [AppInfoDBColumn.COMPANY_ADDRESS]: 'company.address',
    [AppInfoDBColumn.TG_SUPPORTLINK]: 'tgSupportLink',
    [AppInfoDBColumn.CHATID]: 'chatId',
    [AppInfoDBColumn.BOTTOKEN]: 'botToken',
});
