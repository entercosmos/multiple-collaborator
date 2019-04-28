import React, {Component} from 'react'
import {render} from 'react-dom'
import {css, injectGlobal} from 'emotion'
import MultipleCollaboratorField from '../../src'
import {Canvas, Heading, Paragraph, Box} from '@cmds/demo-utils'


injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        margin: 0;
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
        return <Canvas>
            <Heading>
                Record Detail Context
            </Heading>
            <Paragraph>
                Without options selected and editor role
            </Paragraph>
            <Box>
                <MultipleCollaboratorField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'editor'}
                    collaboratorIds={this.state.collaboratorIds}
                    collaborators={COLLABORATORS}
                    onCollaboratorLink={this.handleCollaboratorLink}
                    onCollaboratorUnlink={this.handleCollaboratorUnlink}
                />
            </Box>
            <Paragraph>
                Without options selected and read only role
            </Paragraph>
            <Box>
                <MultipleCollaboratorField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    collaboratorIds={this.state.collaboratorIds}
                    collaborators={COLLABORATORS}
                />
            </Box>
            <Paragraph>
                With options selected and read only role
            </Paragraph>
            <Box>
                <MultipleCollaboratorField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    collaboratorIds={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6', 'opt7', 'opt8', 'opt9', 'opt10']}
                    collaborators={COLLABORATORS}
                />
            </Box>
            <Heading>
                Record Gallery Card Context
            </Heading>
            <Paragraph>
                Without options selected and read only role
            </Paragraph>
            <Box>
                <MultipleCollaboratorField
                    id={'fld1'}
                    contextId={'recordGalleryCard'}
                    roleId={'readOnly'}
                    collaboratorIds={this.state.collaboratorIds}
                    collaborators={COLLABORATORS}
                />
            </Box>
            <Paragraph>
                With options selected and read only role
            </Paragraph>
            <Box>
                <MultipleCollaboratorField
                    id={'fld1'}
                    contextId={'recordGalleryCard'}
                    roleId={'readOnly'}
                    collaboratorIds={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    collaborators={COLLABORATORS}
                />
            </Box>
            <Heading>
                Record List Item Context
            </Heading>
            <Paragraph>
                Without options selected and read only role
            </Paragraph>
            <Box>
                <MultipleCollaboratorField
                    id={'fld1'}
                    contextId={'recordListItem'}
                    roleId={'readOnly'}
                    collaboratorIds={this.state.collaboratorIds}
                    collaborators={COLLABORATORS}
                />
            </Box>
            <Paragraph>
                With options selected and read only role
            </Paragraph>
            <Box>
                <MultipleCollaboratorField
                    id={'fld1'}
                    contextId={'recordListItem'}
                    roleId={'readOnly'}
                    collaboratorIds={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    collaborators={COLLABORATORS}
                />
            </Box>
        </Canvas>
    }
}

render(<Demo/>, document.querySelector('#demo'))
