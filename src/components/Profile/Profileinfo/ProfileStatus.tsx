import React from 'react';

type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        // режим отображения: переключатель span или input:
        editMode: false
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
        // this.state.editMode = true
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {/*покажи span если...*/}
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>}
                {/*покажи input если...*/}
                {this.state.editMode &&
                    <div>
                        <input autoFocus onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                    </div>}

            </div>
        );
    }
}

