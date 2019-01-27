import React from 'react'
import PropTypes from 'prop-types'
import RecordDetailEditor from './contexts/recordDetail/editor'
import RecordDetailReadOnly from './contexts/recordDetail/readOnly'
import RecordGalleryCard from './contexts/recordGalleryCard'
import RecordListItem from './contexts/recordListItem'

export default class MultipleCollaboratorField extends React.Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        contextId: PropTypes.oneOf(['recordDetail', 'recordGridRow', 'recordGalleryCard', 'recordListItem']),
        roleId: PropTypes.oneOf(['editor', 'readOnly']),
        optionIds: PropTypes.arrayOf(PropTypes.string.isRequired),
        collaborator: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired
            })
        ),
        onCollaboratorLink: PropTypes.func,
        onCollaboratorUnlink: PropTypes.func
    }

    render() {

        const {contextId, roleId} = this.props

        if (contextId === 'recordDetail' && roleId === 'editor') {

            return (
                <RecordDetailEditor
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordDetail' && roleId === 'readOnly') {

            return (
                <RecordDetailReadOnly
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordGalleryCard') {

            return (
                <RecordGalleryCard
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordListItem') {

            return (
                <RecordListItem
                    {...this.props}
                />
            )
        }

        return (
            <div>
                Not supported
            </div>
        )
    }
}