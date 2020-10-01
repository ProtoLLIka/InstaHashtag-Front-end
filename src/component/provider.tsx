import React, { Component } from 'react'
import { serverURL } from '../App'
import { Profile } from '../models/profile'
import './topProfile.css'
import axios from 'axios';
interface ProviderState {
    profileTop: Profile[]
    hashtag: string;
}

class Provider extends Component<{}, ProviderState> {
    constructor(props) {
        super(props)
        this.setState({
            profileTop: [],
            hashtag: ''
        })
    }
    render() {
        return (
            <div />
        )
    }
    setHashtag = (value: string) => {
        this.setState({ hashtag: value })
    }
    async getProfiles(hashtag: string) {
        let res = await axios.get(`${serverURL}/inst/media?hashtag=${hashtag}`)
            .then(o => {
                this.setState({ profileTop: o.data as Profile[] })
            })
        // 
        console.log(res)
    }

}

export default Provider