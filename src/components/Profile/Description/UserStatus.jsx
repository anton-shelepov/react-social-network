import React, { useState, useEffect } from 'react'


const UserStatus = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.userStatus)

    useEffect(() => {
        setStatus(props.userStatus)
    }, [props.userStatus])

    let enableEditMode = () => {
        setEditMode(true)
    }

    let disableEditMode = () => {
        setEditMode(false)
        props.putUserStatusThunk(status)
    }

    let onStatusChanged = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {!editMode &&
                <div>
                    <span onDoubleClick={enableEditMode}>{props.userStatus === "" ? "no status" : props.userStatus}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChanged} autoFocus={true} onBlur={disableEditMode} value={status} />
                </div>
            }
        </>
    )
}

export default UserStatus