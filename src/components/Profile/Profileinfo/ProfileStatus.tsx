import React, {ChangeEvent} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        // режим отображения: переключатель span или input:
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        // поменяли локально статус и когда выйдем из фокуса input - шлем в бизнес просьбу отправить запрос в thunk на сервер и обновить статус - новый статус придет к нам в пропсы и мы его в span отобразим и увидим новый статус, что написали в input:
        this.props.updateStatus(this.state.status)
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
// вызовется когда в пропсах придет новый статус и мы "заапдейтим" новым статусом старый статус":
        if (prevProps.status !== this.props.status)
            this.setState({
                status: this.props.status
            })
    }

    render() {
        return (
            <div>
                {/*покажи span если...*/}
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No_status'}</span>
                    </div>}
                {/*покажи input если...*/}
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>}
            </div>
        );
    }
}

