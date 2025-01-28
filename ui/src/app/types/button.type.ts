/** @format */

export enum ButtonType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    ARROW_PRIMARY = 'arrow_primary',
    ARROW_SECONDARY = 'arrow_secondary',
}

export enum ButtonSize {
    SMALL = 'small',
    PRIMARY = 'primary',
}

export interface ButtonProps {
    disabled?: boolean;
    type?: ButtonType;
    size?: ButtonSize;
    label: string;
    onClick?: Function;
}
