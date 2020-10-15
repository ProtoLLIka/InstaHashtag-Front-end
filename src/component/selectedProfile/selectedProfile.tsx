import React, { Component } from 'react'
import { Profile } from '../../models/profile'
type SelectedProfileProps = {
    profile: Profile;
    postCount: number;
}

class SelectedProfile extends Component<{}, SelectedProfileProps> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div />
        )
    }

}

export default SelectedProfile
