import React from 'react'

import Menu from './Navigations/Menu'
import Header from './Header'
import Book from './Book'
import Filter from './Filter'
import Footer from './Footer'

import filters from '../mocks/filters'
import books from '../mocks/books'

class App extends React.Component {
  constructor () {
    super()
    this.selectTab = this.selectTab.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.state = {
      books,
      filters,
      menu: { open : false }
    }
  }

  toggleMenu () {
    this.setState({ menu : { open: !this.state.menu.open } })
  }

  selectTab ( category ) {
    this.setState({
      filters: filters.map(filter => {
        filter.selected = filter.category === category
        return filter
      }),
      books: category === 'All'? books : books.filter( book => (book.category === category) ),
    })
  }

  render() {
    const { books, filters, menu } = this.state

    return (
      <div id="page-wrap">

        <Menu
          pageWrapId="page-wrap"
          isOpen={ menu.open }
          toggleMenu={ this.toggleMenu }
        />

        <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#page-top">ReactJS Academy</a>
                </div>
                <ul className="nav navbar-nav pull-right">
                    <li className="hidden-xs">
                        <a href="#about">About the library</a>
                    </li>
                    <li>
                      <button onClick={ this.toggleMenu } className="btn btn-lg btn-outline">
                        <i className="fa fa-graduation-cap"></i> <span>Training</span>
                      </button>
                    </li>
                </ul>
            </div>
        </nav>

        <Header title="ReactJS Library" />

        <section id="books">
          <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>Books</h2>
                    <hr className="star-primary" />
                </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="nav nav-pills text-center">
                {filters.map(filter => (
                  <Filter filter={filter} selectTab={this.selectTab}/>
                  ))}
                </ul>
              </div>
            </div>
            <div className="row book-list">
              { books.map( book => (
                <Book book={book}/>
              )) }
            </div>
          </div>
        </section>

        <section id="about" className="success">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>About The Library</h2>
                        <hr className="star-light" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-lg-offset-2">
                        <p>ReactJS is a library for building UI in a <strong style={{textDecoration: 'underline'}}>declarative way</strong>. This web site will help you understand the fundamental piece of ReactJS, components. You'll learn how to break an app in components (AKA componentization) and flow data accross them.</p>
                    </div>
                    <div className="col-lg-4">
                        <p>This ReactJS web site works, but it's not well implemented. The problem, the developer didn't think in React and there aren't many components. We challenge you to fork the repo an componentizise the app to unleash the power of ReactJS.</p>
                    </div>
                    <div className="col-lg-8 col-lg-offset-2 text-center">
                        <a target="_blank" href="https://github.com/reactjs-academy/library" className="btn btn-lg btn-outline">
                            <i className="fa fa-code-fork"></i> Fork me on Github
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <Footer title="ReactJS Academy" />
      </div>
    )
  }
}

export default App
