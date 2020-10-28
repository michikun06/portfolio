import PropTypes from 'prop-types'
import React from 'react'

import About from './article/About'
import Skils from './article/Skils'
import Work from './article/Work'
import Contact from './article/Contact'

class Main extends React.Component {
  render() {
    const close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <About
          close={close}
          articleTimeout={this.props.articleTimeout}
          article={this.props.article}
        />
        <Skils
          close={close}
          articleTimeout={this.props.articleTimeout}
          article={this.props.article}
        />
        <Work
          close={close}
          articleTimeout={this.props.articleTimeout}
          article={this.props.article}
        />
        <Contact
          close={close}
          articleTimeout={this.props.articleTimeout}
          article={this.props.article}
        />
      </div >
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
