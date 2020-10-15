import React, { Component } from 'react'
import { Cube } from 'react-preloaders';
import './preloader.less'
class Preloader extends Component {

    render() {
        return (
            <div className={'loaderContainer'} >
                <Cube background="#fffafaad" color="#3fa0da" />
            </div>
        )
    }

}

export default Preloader

