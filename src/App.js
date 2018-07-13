import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Chessboard from 'chessboardjsx';
import { rough } from './roughjs/dist/rough';
import MediaQuery from 'react-responsive';

import Header from './components/Header';
import BasicUseagePanel from './components/BasicUseagePanel';
import PropsPanel from './components/PropsPanel';
import IntegrationsPanel from './components/IntegrationsPanel';
import CustomBoardPanel from './components/CustomBoardPanel';

class App extends Component {
  state = {
    propsPanel: false,
    basicUseagePanel: false,
    integrationPanel: false,
    customBoardPanel: false
  };

  handlePropsClick = history => {
    const { propsPanel } = this.state;
    let pathname = history.location.pathname;

    pathname === '/props' || propsPanel
      ? history.push('/')
      : history.push('/props');

    this.setState(({ propsPanel }) => ({
      propsPanel: pathname === '/props' ? false : !propsPanel,
      basicUseagePanel: false,
      integrationPanel: false,
      customBoardPanel: false
    }));
  };

  handleBasicUsageClick = history => {
    const { basicUseagePanel } = this.state;
    let pathname = history.location.pathname;

    pathname === '/basics' || basicUseagePanel
      ? history.push('/')
      : history.push('/basics');

    this.setState(({ basicUseagePanel }) => ({
      basicUseagePanel: pathname === '/basics' ? false : !basicUseagePanel,
      propsPanel: false,
      integrationPanel: false,
      customBoardPanel: false
    }));
  };

  handleIntegrationsClick = history => {
    const { integrationPanel } = this.state;
    let pathname = history.location.pathname;

    pathname === '/integrations' || integrationPanel
      ? history.push('/')
      : history.push('/integrations');

    this.setState(({ integrationPanel }) => ({
      integrationPanel:
        pathname === '/integrations' ? false : !integrationPanel,
      propsPanel: false,
      basicUseagePanel: false,
      customBoardPanel: false
    }));
  };

  handleCustomBoardClick = history => {
    const { customBoardPanel } = this.state;
    let pathname = history.location.pathname;

    pathname === '/custom' || customBoardPanel
      ? history.push('/')
      : history.push('/custom');

    this.setState(({ customBoardPanel }) => ({
      customBoardPanel: pathname === '/custom' ? false : !customBoardPanel,
      propsPanel: false,
      basicUseagePanel: false,
      integrationPanel: false
    }));
  };

  render() {
    return (
      <Fragment>
        <CssBaseline>
          <MuiThemeProvider theme={theme}>
            <Router>
              <div>
                <Header />
                <Route
                  path="/"
                  render={({ history }) => (
                    <MediaQuery minDeviceWidth={1024}>
                      {matches =>
                        matches ? (
                          <div style={wideScreenGrid}>
                            <div />
                            <FrontPage
                              matches={matches}
                              state={this.state}
                              history={history}
                              handlePropsClick={this.handlePropsClick}
                              handleBasicUsageClick={this.handleBasicUsageClick}
                              handleIntegrationsClick={
                                this.handleIntegrationsClick
                              }
                              handleCustomBoardClick={
                                this.handleCustomBoardClick
                              }
                            />
                            <div />
                          </div>
                        ) : (
                          <FrontPage
                            matches={matches}
                            state={this.state}
                            history={history}
                            handlePropsClick={this.handlePropsClick}
                            handleBasicUsageClick={this.handleBasicUsageClick}
                            handleIntegrationsClick={
                              this.handleIntegrationsClick
                            }
                            handleCustomBoardClick={this.handleCustomBoardClick}
                          />
                        )
                      }
                    </MediaQuery>
                  )}
                />
              </div>
            </Router>
          </MuiThemeProvider>
        </CssBaseline>
      </Fragment>
    );
  }
}

export default App;

function FrontPage({
  state,
  history,
  handlePropsClick,
  handleBasicUsageClick,
  handleIntegrationsClick,
  handleCustomBoardClick,
  matches
}) {
  return (
    <div>
      <PropsPanel
        history={history}
        open={state.propsPanel}
        handlePropsClick={handlePropsClick}
        matches={matches}
      />
      <BasicUseagePanel
        history={history}
        open={state.basicUseagePanel}
        handleBasicUsageClick={handleBasicUsageClick}
      />
      <IntegrationsPanel
        history={history}
        open={state.integrationPanel}
        handleIntegrationsClick={handleIntegrationsClick}
      />
      <CustomBoardPanel
        history={history}
        open={state.customBoardPanel}
        handleCustomBoardClick={handleCustomBoardClick}
      />

      <div style={mainContainer}>
        <p style={{ paddingLeft: 15, paddingRight: 15 }}>
          <b>Chessboard.jsx</b> is a customizable chessboard component that
          works as a standalone drag and drop chessboard on standard and touch
          devices. It integrates easily with&nbsp;
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/jhlywa/chess.js/blob/master/README.md"
          >
            chess.js
          </a>, allowing for move validation, engine integrations, and more.
        </p>
        <pre style={highlight}>
          <code>npm install --save chessboardjsx</code>
        </pre>
        <Chessboard
          calcWidth={calcWidth}
          boardStyle={boardStyle}
          position={'2R5/4bppk/1p1p3Q/5R1P/4P3/5P2/r4q1P/7K b - - 6 50'}
          roughSquare={roughSquare}
        />
      </div>
    </div>
  );
}

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Open Sans', 'sans-serif', '-apple-system'].join(',')
  },
  palette: {
    primary: {
      light: '8f4661',
      main: '#5f1a37',
      dark: '#320011'
    },
    secondary: {
      light: '#ffffff',
      main: '#eeeeee',
      dark: '#bcbcbc'
    }
  }
});

const mainContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  color: 'black',
  paddingBottom: 50,
  backgroundColor: 'white',
  height: '100%',
  borderBottomLeftRadius: 3,
  borderBottomRightRadius: 3
};

const calcWidth = (screenWidth, screenHeight) =>
  (screenWidth || screenHeight) < 550 ? 300 : 500;

const boardStyle = {
  borderRadius: '5px',
  boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`
};

const highlight = {
  backgroundColor: '#ACB6C3',
  border: `2px solid #39526f`,
  padding: 5,
  height: 40,
  fontSize: 15,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 0,
  borderRadius: 3
};

const wideScreenGrid = {
  backgroundColor: '#7D8DA1',
  display: 'grid',
  gridTemplateColumns: `1fr 3fr 1fr`
};

export const roughSquare = (element, squareWidth) => {
  let rc = rough.svg(element);
  const chessSquare = rc.rectangle(0, 0, squareWidth, squareWidth, {
    roughness: 0.8,
    fill: '#aa874f',
    bowing: 2
  });
  element.appendChild(chessSquare);
};
