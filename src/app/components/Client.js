import React from 'react'

export default class Client extends React.Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-4 client">
                <div className="thumb">
                  <img className="bill" src="https://www.fillmurray.com/g/200/200" alt="..." />
                  <div className="caption">
                    <h3>Thumbnail label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nulla delectus, accusantium ipsam sunt omnis beatae porro, sint a dicta consequatur dolor esse, nesciunt qui harum tempora corrupti enim fugit. Mollitia expedita nobis nulla tempore similique aliquid adipisci consequuntur.</p>
                  </div>
                </div>
              </div>
        )
    }
}