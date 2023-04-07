import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        // Этот хук говорит закиньте в меня функцию которую я выполню потом когда уже отрисуется страница  --- и когда она отрисуется мы можем взять тут что-то и выполнить, например засинхронизировать наш статус который хранится в стейте  - засинхронизировать теми данными, которые к нам пришли из пропсов:
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>

            {!editMode &&
                <div>
                    <b>Status:</b> <span onDoubleClick={activateEditMode}>{props.status || 'No_status'}хххххххххххх</span>
                </div>}
            {/*покажи input если...*/}
            {editMode &&
                <div>
                    <input value={status} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}/>
                </div>}
        </div>
    );
}

