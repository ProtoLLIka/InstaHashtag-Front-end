import React, { Component } from 'react'
import './topProfile.css'
class TopProfile extends Component {

    render() {
        return (
            <div className='container'>
                <span className='topUserIdText'></span>
                <span className='postCountText'></span>
            </div>
        )
    }
}

export default TopProfile