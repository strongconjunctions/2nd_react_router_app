import React from 'react';

import Profiles from './Profiles'

export default class Clients extends React.Component {
    render() {
        return (
            <div className="wrap">
                <h1 className="banner">Clients</h1>
                <Profiles />
            </div>
        )
    }
}
