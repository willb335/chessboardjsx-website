import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './styles/header.css';
import Github from './Github';

class Header extends Component {
  render() {
    return (
      <header>
        <Paper
          className="header"
          classes={{ root: 'header-root' }}
          elevation={1}
          square={true}
        >
          <div style={headerItemStyle}>
            <h2 className="title">Chessboard.jsx</h2>

            <div className="description">
              A chessboard for React inspired by chessboard.js
            </div>
          </div>
          <div style={headerItemStyle}>
            <Button
              target="_blank"
              href="https://github.com/willb335/chessboardjsx"
              classes={{ root: 'github-button-root' }}
              variant="outlined"
              color="secondary"
              fullWidth={true}
            >
              View on Github&nbsp;&nbsp;
              <Github />
            </Button>
          </div>
        </Paper>
      </header>
    );
  }
}

const headerItemStyle = {
  marginBottom: 10,
  marginTop: 10,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'column'
};

export default Header;
