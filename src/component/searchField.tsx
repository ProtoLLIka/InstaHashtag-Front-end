import { copyFileSync } from 'fs';
import React, { Component } from 'react'
import './searchField.less';
type SearchFieldProps = {
    setHashtag(hashtag: string);
}
type SearchFieldState = {
    hashtag: string;
}
class SearchField extends Component<SearchFieldProps, SearchFieldState> {
    constructor(props) {
        super(props)
        this.state = {
            hashtag: ''
        }
    }

    render() {
        console.log(this.state.hashtag)
        return (
            <div className='noteListContainer animate__animated animate__slideInUp' >
                <input type='text' placeholder='хештег' id='search' autoComplete='off' onChange={(o) => this.setCurrentHashtag(o.target.value)} />
                <label htmlFor='search'>#</label>
                <button onClick={(o) => this.setHashtag(this.state.hashtag)}>Поиск</button>
            </div>
        )
    }

    setCurrentHashtag = (value: string) => {
        this.setState({ hashtag: value });
    }

    setHashtag = (hashtag: string) => {
        this.props.setHashtag(hashtag);
    }
}

export default SearchField