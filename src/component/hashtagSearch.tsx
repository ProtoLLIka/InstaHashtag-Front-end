import React, { Component } from 'react'
import Provider from './provider'
type HashtagSearchState = {
    currentHashtag: string;
}
class HashtagSearch extends Component<{}, HashtagSearchState> {
    constructor(props) {
        super(props)
        this.state = {
            currentHashtag: ''
        }
    }


    updateCurrentHashtag = (value: string) => {
        this.setState({ currentHashtag: value })
    }
    
    render() {
        return (
            <Provider currentHashtag={this.state.currentHashtag} updateCurrentHashtag={this.updateCurrentHashtag} />
        )
    }

}

export default HashtagSearch

