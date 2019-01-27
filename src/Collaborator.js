import React from 'react'
import {css, cx} from 'emotion'
import icons from './icons'

export default ({className, collaborator, onRemove}) => (
    <div
        className={css`
            display: inline-flex;
            align-items: center;
        `}
    >
        <div
            className={css`
                border: 1px solid rgb(238, 238, 238);
                background-color: #000;
                color: #fff;
                width: 26px;
                height: 26px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
            `}
        >
            {icons.collaborator({
                width: 12,
                className: css`
                    display: flex;
                `
            })}
        </div>
        <div
            className={cx(
                css`
                margin-left: -12px;
            background: hsla(0,0%,0%,0.05);
            padding-left: 16px;
            padding-right: 8px;
            height: 22px;
            min-width: 18px;
            font-size: 13px;
            font-weight: 400;
            border-radius: 9999px;
            line-height: 1.5;
            -webkit-flex: 1 1 auto;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            min-width: 0;
            min-height: 0;
            display: inline-flex;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            -webkit-print-color-adjust: exact;
        `, className
            )}
        >
            <div
                className={css`
                display: flex;
                align-items: center;
            `}
            >
                {collaborator.name}
                {onRemove ?
                    icons.close({
                        height: 12,
                        className: css`
                        cursor: pointer;
                        margin-left: 4px;
                        display: flex;
                        &:active {
                            opacity: 0.75;
                        }
                    `,
                        onClick: () => onRemove({id: collaborator.id})
                    })
                    : null
                }
            </div>
        </div>
    </div>

)