import React, { Component } from 'react'
class SearchField extends Component {

    render() {
        return (

            <div className='noteListContainer' >
                <div className='searchContainer'>
                    <input type='text' placeholder='Поиск...' />
                </div>
            </div>
        )
    }
}

export default SearchField