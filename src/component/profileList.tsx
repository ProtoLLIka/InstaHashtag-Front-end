import { profile } from 'console'
import React, { Component } from 'react'
import { Profile } from '../models/profile'
import ProfileBlock from './profileBlock'
import './profileList.less'
type ProfileListProps = {
    profiles: Profile[];
}
class ProfileList extends Component<ProfileListProps, {}> {

    render() {
        console.log('current profiles', this.props.profiles)
        if (!this.props.profiles) return;
        let profileBlocks: JSX.Element[]
        profileBlocks = this.props.profiles.slice(0, 5).map((o, i) => {
            return (<ProfileBlock profile={o} key={i} />)
        });
        return (
            <div className='listContainer'>
                {profileBlocks}
            </div>
        )
    }
}

export default ProfileList


