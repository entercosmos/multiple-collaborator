# ![MultipleCollaboratorField](https://user-images.githubusercontent.com/44801418/48134212-ec918b80-e2cb-11e8-9dcc-da88a8e2ae37.png) MultipleCollaboratorField

[![npm package][npm-badge]][npm]

Used for selecting multiple collaborators.

## Getting started

````
npm install @cmds/multiple-collaborator-field --save
````
	
### Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| id | String | ✓ | Unique id for the instance of this field |
| contextId | Context | ✓ | The appearance will change depending on context in which the field is displayed. Valid options include: `recordDetail` or `recordGridRow` or `recordGalleryCard` or `recordListItem` |
| roleId | Role | ✓ | The behaviour changes based on the role. Valid options include `editor` or `readOnly` |
| collaborators | Array | ✓ | List of collaborators that can be selected |
| collaboratorIds | Array |  | List of selected collaborators |
| onLink | Function |  | Callback invoked whenever a collaborator get's added to the selection: `({id: string, collaboratorId: string}): void` |
| onUnlink | Function |  | Callback invoked whenever a collaborator get's removed from the selection: `({id: string, collaboratorId: string}): void` |
| onClear | Function |  | Callback invoked whenever the selected collaborators get cleared: `({id: string}): void` |
| onSort | Function |  | Callback invoked whenever one of the selected options get's sorted: `({id: string, collaboratorId: string, targetIndex: number}): void` |

````jsx harmony
import MultipleCollaboratorField from '@cmds/multiple-collaborator-field'

<MultipleCollaboratorField
    id={'fld1'}
    contextId={'recordGalleryCard'}
    roleId={'readOnly'}
    collaborators={[{
        id: 'col1',
        name: 'Luke Skywalker'
    }, {
        id: 'col2',
        name: 'Leia Organa'
    }]}
    collaboratorIds={['col1']}
    onLink={({id, collaboratorId}) => {
        // do something
    }}
    onUnlink={({id, collaboratorId}) => {
        // do something
    }}
    onClear={({id}) => {
        // do something
    }}
    onSort={({id, collaboratorId, targetIndex}) => {
        // do something
    }}
/>
````

### More information

This component is designed and developed as part of [Cosmos Design System][cmds]. 

[cmds]: https://github.com/entercosmos/cosmos
[npm-badge]: https://img.shields.io/npm/v/@cmds/multiple-collaborator-field.svg
[npm]: https://www.npmjs.org/package/@cmds/multiple-collaborator-field
