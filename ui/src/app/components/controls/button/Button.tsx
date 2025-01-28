/** @format */

import { ButtonProps, ButtonSize, ButtonType } from '@app/types/button.type';
import './Button.scss';

export default function Button({
    disabled = false,
    type = ButtonType.PRIMARY,
    size = ButtonSize.PRIMARY,
    label,
    onClick,
}: ButtonProps) {
    function handlerClick(): void {
        if (disabled) {
            return;
        }

        if (onClick) {
            onClick();
        }
    }

    return (
        <div
            className={`button ${type}_type ${size}_size ${disabled ? 'disabled' : ''}`}
            onClick={handlerClick}>
            <button
                onClick={event => {
                    event.preventDefault();
                }}>
                {label}
                {type === ButtonType.ARROW_PRIMARY ||
                type === ButtonType.ARROW_SECONDARY ? (
                    <span className="arrow">→</span>
                ) : (
                    ''
                )}
            </button>
        </div>
    );
}
