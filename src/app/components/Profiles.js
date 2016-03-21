import React from 'react';

import Client from './Client'

export default class Profiles extends React.Component {
    render() {
        return (
            <div className="row profile">
                <Client />
                <Client />
                <Client />
                <Client />
                <Client />
                <Client />
            </div>
        )
    }
}