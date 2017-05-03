import React from 'react'

class Book extends React.Component {

    constructor () {
      super()
      this.state = {
      }
    }

    render() {
        return(
            <div className="col-xs-6 col-sm-3" key={ this.props.book.title }>
              <div className="thumbnail">
                <img className="img-responsive" src={ this.props.book.cover }/>
              </div>
            </div>
            )
    }
}

export default Book