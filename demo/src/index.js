import React, {Component} from 'react'
import {render} from 'react-dom'
import {css, injectGlobal} from 'emotion'
import MultipleCollaboratorField from '../../src'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

const Context = ({contextId, roleId}) => (
    <div
        className={css`
            margin-top: 32px;
            margin-bottom: 24px;
        `}
    >
        <strong>Context:</strong> {contextId}, <strong>Role:</strong> {roleId}
    </div>
)

const COLLABORATORS = [
    {
        id: 'opt1',
        name: 'Luke Skywalker'
    },
    {
        id: 'opt2',
        name: 'C-3PO'
    },
    {
        id: 'opt3',
        name: 'R2-D2'
    },
    {
        id: 'opt4',
        name: 'Darth Vader'
    },
    {
        id: 'opt5',
        name: 'Leia Organa'
    },
    {
        id: 'opt6',
        name: 'Owen Lars'
    },
    {
        id: 'opt7',
        name: 'Beru Whitesun lars'
    },
    {
        id: 'opt8',
        name: 'R5-D4'
    },
    {
        id: 'opt9',
        name: 'Biggs Darklighter'
    },
    {
        id: 'opt10',
        name: 'Obi-Wan Kenobi'
    }
]

class Demo extends Component {

    state = {
        collaboratorIds: []
    }

    handleCollaboratorLink = ({collaboratorId}) => {

        const collaboratorIds = [].concat(this.state.collaboratorIds)

        collaboratorIds.push(collaboratorId)

        this.setState({
            collaboratorIds
        })
    }

    handleCollaboratorUnlink = ({collaboratorId}) => {

        const collaboratorIds = this.state.collaboratorIds.filter(id => {
            return collaboratorId !== id
        })

        this.setState({
            collaboratorIds
        })
    }

    render() {
        return <div>
            <h1>MultipleCollaboratorField Demo</h1>
            <p>Used for selecting multiple collaborators.</p>
            <h2>
                Without options selected
            </h2>
            <Context contextId={'recordDetail'} roleId={'editor'}/>
            <div>
                <MultipleCollaboratorField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'editor'}
                    collaboratorIds={this.state.collaboratorIds}
                    collaborators={COLLABORATORS}
                    onCollaboratorLink={this.handleCollaboratorLink}
                    onCollaboratorUnlink={this.handleCollaboratorUnlink}
                />
            </div>
            <Context contextId={'recordDetail'} roleId={'readOnly'}/>
            <div>
                <MultipleCollaboratorField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    collaboratorIds={this.state.collaboratorIds}
                    collaborators={COLLABORATORS}
                />
            </div>
            <Context contextId={'recordGalleryCard'} roleId={'readOnly'}/>
            <div
                className={css`
                        width: 240px;
                        height: 22px;
                    `}
            >
                <MultipleCollaboratorField
                    id={'fld1'}
                    contextId={'recordGalleryCard'}
                    roleId={'readOnly'}
                    collaboratorIds={this.state.collaboratorIds}
                    collaborators={COLLABORATORS}
                />
            </div>
            <Context contextId={'recordListItem'} roleId={'readOnly'}/>
            <div
                className={css`
                    width: 240px;
                    height: 22px;
                `}
            >
                <MultipleCollaboratorField
                    id={'fld1'}
                    contextId={'recordListItem'}
                    roleId={'readOnly'}
                    collaboratorIds={this.state.collaboratorIds}
                    collaborators={COLLABORATORS}
                />
            </div>
            <h2>
                With options selected
            </h2>
            <Context contextId={'recordDetail'} roleId={'readOnly'}/>
            <div
                className={css`
                    width: 460px;
                    min-height: 18px;
                    position: relative;
                    overflow: visible;
                    display: block;
                `}
            >
                <MultipleCollaboratorField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    collaboratorIds={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6', 'opt7', 'opt8', 'opt9', 'opt10']}
                    collaborators={COLLABORATORS}
                />
            </div>
            <Context contextId={'recordGalleryCard'} roleId={'readOnly'}/>
            <div
                className={css`
                    width: 240px;
                    height: 22px;
                `}
            >
                <MultipleCollaboratorField
                    id={'fld1'}
                    contextId={'recordGalleryCard'}
                    roleId={'readOnly'}
                    collaboratorIds={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    collaborators={COLLABORATORS}
                />
            </div>
            <Context contextId={'recordListItem'} roleId={'readOnly'}/>
            <div
                className={css`
                        width: 240px;
                        height: 22px;
                    `}
            >
                <MultipleCollaboratorField
                    id={'fld1'}
                    contextId={'recordListItem'}
                    roleId={'readOnly'}
                    collaboratorIds={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    collaborators={COLLABORATORS}
                />
            </div>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
