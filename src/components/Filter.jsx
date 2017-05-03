import React from 'react'

class Filter extends React.Component {

    constructor () {
      super()
      this.state = {
      }
    }

    render() {

        return(
          <li className={ this.props.filter.selected? 'active': '' } key={ this.props.filter.category } onClick={ this.props.selectTab.bind(null, this.props.filter.category) }>
            <a href="#0">{ this.props.filter.category }</a>
          </li>
            )
    }
}

export default Filter