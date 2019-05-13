import React from 'react'
import Button from '@pndr/button'
import {css} from 'emotion'
import OptionList from '@pndr/select/lib/OptionList'
import Collaborator from '../../Collaborator'

const EmptyState = ({children}) => (
    <div
        className={css`
            background: #f9f9f9;
            border-radius: 6px;
            padding: 30px;
            text-align: center;
            @media (min-width: 720px) {
                padding-top: 50px;
                padding-bottom: 50px;
            }
        `}
    >
        <div
            className={css`
                color: #000;
                font-size: 16px;
            `}
        >
            {children}
        </div>
    </div>
)

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
                        <Button
                            type={'button'}
                            onClick={() => this.setState({open: true})}
                        >
                            Add a collaborator
                        </Button>
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
                    <EmptyState>
                        There are no collaborators selected for this field
                    </EmptyState>
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