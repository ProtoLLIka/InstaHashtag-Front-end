import React, { Component } from 'react'
import { Profile } from '../models/profile';
import './profileBlock.less'
type ProfileBlockProps = {
    profile: Profile;
}
class ProfileBlock extends Component<ProfileBlockProps, {}> {

    render() {
        let profile = this.props.profile
        return (
            <div className='container'>
                <span className='userIdText'>{profile.userId}</span>
                <span className='postCountText'>{`${profile.postCount} постов`}</span>
            </div>
        )
    }
}

export default ProfileBlock