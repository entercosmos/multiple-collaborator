import React from 'react'
import {css} from 'emotion'
import OptionList from '@cmds/select/es/OptionList'
import Collaborator from '../../Collaborator'

export default class MultipleCollaboratorField extends React.Component {

    state = {
        open: false
    }

    render() {

        const collaboratorsById = this.props.collaborators.reduce((result, collaborator) => {
            result[collaborator.id] = collaborator
            return result
        }, {})

        const collaborators = this.props.collaborators.filter(collaborator => {
            return this.props.collaboratorIds.includes(collaborator.id) === false
        })

        return (
            <div>
                <div
                    className={css`
                        margin-bottom: 24px;
                    `}
                >
                    <div
                        className={css`
                            position: relative;
                        `}
                    >
                        <button
                            type={'button'}
                            className={css`
                                padding-top: 4px;
                                padding-bottom: 4px;
                                padding-left: 16px;
                                padding-right: 16px;
                                border-radius: 3px;
                                background-color: hsla(0,0%,0%,0.05);
                                font-weight: 500;
                                color: #111;
                                border: none;
                            `}
                            onClick={() => this.setState({open: true})}
                        >
                            Add a collaborator
                        </button>
                        {this.state.open ? (
                            <OptionList
                                className={css`
                                margin-top: -21px;
                            `}
                                alignLeft={true}
                                options={collaborators}
                                onOptionClick={this.handleCollaboratorLink}
                                onClickOutside={() => this.setState({open: false})}
                            />
                        ) : null}
                    </div>
                </div>
                {this.props.collaboratorIds && this.props.collaboratorIds.length ? this.props.collaboratorIds.map(id => {

                    const collaborator = collaboratorsById[id]

                    return (
                        <div
                            key={collaborator.id}
                            className={css`
                                max-width: 100%;
                                cursor: pointer;
                                align-items: center;
                                display: inline-flex;
                                flex: none;
                                margin-top: 4px;
                                margin-bottom: 4px;
                                margin-right: 4px;
                            `}
                        >
                            <Collaborator
                                collaborator={collaborator}
                                onRemove={this.handleCollaboratorUnlink}
                            />
                        </div>

                    )
                }) : (
                    <div className={css`opacity: 0.7;`}>
                        No collaborators
                    </div>
                )}
            </div>
        )
    }

    handleCollaboratorLink = ({id}) => {

        this.setState({open: false})

        if (this.props.onCollaboratorLink) {
            this.props.onCollaboratorLink({
                id: this.props.id,
                collaboratorId: id
            })
        }
    }

    handleCollaboratorUnlink = ({id}) => {

        if (this.props.onCollaboratorUnlink) {
            this.props.onCollaboratorUnlink({
                id: this.props.id,
                collaboratorId: id
            })
        }
    }
}