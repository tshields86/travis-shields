import React, { Component } from 'react';
import styles from './Layout.css';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }
  sideDrawerToggleHandler = () => {
    this.setState( ( prevState ) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    });
  }

  render () {
    return (
      <>
        <main className={styles.main}>
          {this.props.children}
        </main>
      </>
    );
  }
}

export default Layout;