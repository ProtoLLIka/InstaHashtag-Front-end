import React, { Component } from 'react'
import { Profile } from '../models/profile'
import SearchField from './searchField';
import ProfileList from './profileList';
import { get } from '../mock/server';
import Preloader from './simple/preloader';
type ProviderState = {
    profiles: Profile[];
    hashtag: string;
    isDowloading: boolean;
    selcetedProfile: Profile;
}

type ProviderProps = {
    currentHashtag: string;
    updateCurrentHashtag(value: string);
}

class Provider extends Component<ProviderProps, ProviderState> {
    constructor(props) {
        super(props)
        this.state = {
            profiles: [],
            hashtag: '',
            isDowloading: false,
            selcetedProfile: new Profile()
        }
    }

    setHashtag = (value: string) => {
        this.props.updateCurrentHashtag(value)
    }

    async componentDidUpdate() {
        if (this.props.currentHashtag === this.state.hashtag) return;
        this.getProfiles(this.props.currentHashtag)
        this.setState({ hashtag: this.props.currentHashtag, isDowloading: true })
    }

    getProfiles = async (hashtag: string): Promise<Profile[]> => {
        if (!hashtag) return;
        await get(`${process.env.REACT_APP_API_URL}/inst/media?hashtag=${hashtag}`).then((o) => {
            this.setState({ profiles: o.data as Profile[], isDowloading: false })
        });
    }

    getProfileInfo = async (profile: Profile): Promise<Profile> => {
        if (!profile) return;
        await get(`https://i.instagram.com/api/v1/users/${profile.userId}/info/`).then((o) => {
            let prof = new Profile();
            prof.username = o.data.user.username;
            prof.icoUrl = o.data.user.profile_pic_url;
            prof.userId = o.data.user.pk
            this.setState({ selcetedProfile: prof })
        })
        return;
    }

    render() {

        return (
            <div>
                {this.state.isDowloading && <Preloader />}
                <SearchField setHashtag={this.setHashtag} />
                <ProfileList profiles={this.state.profiles} />
            </div>
        )
    }

}

export default Provider