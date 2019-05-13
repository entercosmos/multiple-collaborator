import React from 'react'
import {css} from 'emotion'
import Collaborator from '../../Collaborator'
import defaultEmptyRenderer from '../../defaultEmptyRenderer';

const OptionList = ({children}) => (
    <div
        className={css`
            padding: 0;
            margin: 0;
            outline: none;
            display: flex;
            flex-wrap: wrap;
            position: relative;
            white-space: normal;
            overflow: visible;
            background-color: transparent;
            width: 100%;
            height: auto;
        `}
    >
        <div
            className={css`
                display: flex;
                flex: 1 1 auto;
                min-width: 0;
                min-height: 0;
            `}
        >
            <div
                className={css`
                    flex: 1 1 auto;
                    min-width: 0;
                    min-height: 0;
                `}
            >
                <div
                    className={css`
                        display: flex;
                        position: relative;
                        overflow: auto;
                        align-content: flex-start;
                        align-items: flex-start;
                        flex-wrap: wrap;
                    `}
                >
                    {children}
                </div>
            </div>
        </div>
    </div>
)

export default class MultipleCollaboratorField extends React.Component {

    render() {

        const {collaboratorIds, collaborators} = this.props

        const collaboratorsById = collaborators.reduce((result, collaborator) => {
            result[collaborator.id] = collaborator
            return result
        }, {})

        if (!collaboratorIds || !collaboratorIds.length) return defaultEmptyRenderer()

        return (
            <OptionList>
                {collaboratorIds.map(id => {

                    const collaborator = collaboratorsById[id]

                    return (
                        <div
                            key={id}
                            className={css`
                                padding-top: 4px;
                                padding-bottom: 4px;
                                padding-right: 8px;
                            `}
                        >
                            <Collaborator
                                id={id}
                                collaborator={collaborator}
                            />
                        </div>
                    )
                })}
            </OptionList>
        )
    }
}