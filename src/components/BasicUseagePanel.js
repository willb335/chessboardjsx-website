import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chessboard from 'chessboardjsx';

import './styles/basicUsagePanel.css';

class BasicUseagePanel extends Component {
  state = {
    emptyBoardPanel: false,
    startPositionPanel: false,
    fenStringPanel: false,
    positionObjectPanel: false,
    multipleBoardsPanel: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.open !== this.props.open) {
      this.setState({
        emptyBoardPanel: false,
        startPositionPanel: false,
        fenStringPanel: false,
        positionObjectPanel: false,
        multipleBoardsPanel: false
      });
    }
  }

  handleEmptyBoardClick = history => {
    const { emptyBoardPanel } = this.state;
    let pathname = history.location.pathname;

    pathname === '/basics/emptyBoard' || emptyBoardPanel
      ? history.push('/basics')
      : history.push('/basics/emptyBoard');

    this.setState(({ emptyBoardPanel }) => ({
      emptyBoardPanel:
        pathname === '/basics/emptyBoard' ? false : !emptyBoardPanel,
      startPositionPanel: false,
      fenStringPanel: false,
      positionObjectPanel: false,
      multipleBoardsPanel: false
    }));
  };

  handleStartPositionClick = history => {
    const { startPositionPanel } = this.state;
    let pathname = history.location.pathname;

    pathname === '/basics/startPosition' || startPositionPanel
      ? history.push('/basics')
      : history.push('/basics/startPosition');

    this.setState(({ startPositionPanel }) => ({
      startPositionPanel:
        pathname === '/basics/startPosition' ? false : !startPositionPanel,
      emptyBoardPanel: false,
      fenStringPanel: false,
      positionObjectPanel: false,
      multipleBoardsPanel: false
    }));
  };

  handleFENStringClick = history => {
    const { fenStringPanel } = this.state;
    let pathname = history.location.pathname;

    pathname === '/basics/fenString' || fenStringPanel
      ? history.push('/basics')
      : history.push('/basics/fenString');

    this.setState(({ fenStringPanel }) => ({
      fenStringPanel:
        pathname === '/basics/fenString' ? false : !fenStringPanel,
      emptyBoardPanel: false,
      startPositionPanel: false,
      positionObjectPanel: false,
      multipleBoardsPanel: false
    }));
  };

  handlePositionObjectClick = history => {
    const { positionObjectPanel } = this.state;
    let pathname = history.location.pathname;

    pathname === '/basics/positionObject' || positionObjectPanel
      ? history.push('/basics')
      : history.push('/basics/positionObject');

    this.setState(({ positionObjectPanel }) => ({
      positionObjectPanel:
        pathname === '/basics/positionObject' ? false : !positionObjectPanel,
      emptyBoardPanel: false,
      startPositionPanel: false,
      fenStringPanel: false,
      multipleBoardsPanel: false
    }));
  };

  handleMultipleBoardsClick = history => {
    const { multipleBoardsPanel } = this.state;
    let pathname = history.location.pathname;

    pathname === '/basics/multipleBoards' || multipleBoardsPanel
      ? history.push('/basics')
      : history.push('/basics/multipleBoards');

    this.setState(({ multipleBoardsPanel }) => ({
      multipleBoardsPanel:
        pathname === '/basics/multipleBoards' ? false : !multipleBoardsPanel,
      emptyBoardPanel: false,
      startPositionPanel: false,
      fenStringPanel: false,
      positionObjectPanel: false
    }));
  };

  render() {
    const { history, open, handleBasicUsageClick } = this.props;
    const {
      emptyBoardPanel,
      startPositionPanel,
      fenStringPanel,
      positionObjectPanel,
      multipleBoardsPanel
    } = this.state;
    const pathname = history.location.pathname;
    return (
      <div>
        <ExpansionPanel expanded={open || pathname.includes('/basics')}>
          <ExpansionPanelSummary
            classes={{ root: 'basic-expansion-root' }}
            onClick={() => handleBasicUsageClick(history)}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Basic Usage</Typography>
          </ExpansionPanelSummary>
          <EmptyBoard
            history={history}
            pathname={pathname}
            open={emptyBoardPanel}
            handleEmptyBoardClick={this.handleEmptyBoardClick}
          />
          <StartPosition
            history={history}
            pathname={pathname}
            open={startPositionPanel}
            handleStartPositionClick={this.handleStartPositionClick}
          />
          <FENString
            history={history}
            pathname={pathname}
            open={fenStringPanel}
            handleFENStringClick={this.handleFENStringClick}
          />
          <PositionObject
            history={history}
            pathname={pathname}
            open={positionObjectPanel}
            handlePositionObjectClick={this.handlePositionObjectClick}
          />
          />
          <MulitpleBoards
            history={history}
            pathname={pathname}
            open={multipleBoardsPanel}
            handleMultipleBoardsClick={this.handleMultipleBoardsClick}
          />
        </ExpansionPanel>
      </div>
    );
  }
}

export default BasicUseagePanel;

const emptyBoardCode = '<Chessboard />';

function EmptyBoard({ history, pathname, handleEmptyBoardClick, open }) {
  return (
    <div>
      <ExpansionPanel
        expanded={open || pathname.includes('/basics/emptyBoard')}
      >
        <ExpansionPanelSummary
          classes={{ root: 'emptyBoard-expansion-root' }}
          onClick={() => handleEmptyBoardClick(history)}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography align="left">Empty Board</Typography>
        </ExpansionPanelSummary>
        <div style={panelStyle}>
          <Typography>Initializing an empty board</Typography>
          <pre style={{ ...highlight, ...{ justifyContent: 'center' } }}>
            <code>{emptyBoardCode}</code>
          </pre>
          {open || pathname === '/basics/emptyBoard' ? (
            <Chessboard calcWidth={calcWidth} id="empty" />
          ) : null}
        </div>
      </ExpansionPanel>
    </div>
  );
}

const startPositionCode = '<Chessboard position="start"/>';

function StartPosition({ history, pathname, handleStartPositionClick, open }) {
  return (
    <div>
      <ExpansionPanel
        expanded={open || pathname.includes('/basics/startPosition')}
      >
        <ExpansionPanelSummary
          classes={{ root: 'startPosition-expansion-root' }}
          onClick={() => handleStartPositionClick(history)}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Start Position</Typography>
        </ExpansionPanelSummary>
        <div style={panelStyle}>
          <Typography align="left">
            Initialize the board to the start position
          </Typography>
          <pre style={{ ...highlight, ...{ justifyContent: 'center' } }}>
            <code>{startPositionCode}</code>
          </pre>
          {open || pathname === '/basics/startPosition' ? (
            <Chessboard calcWidth={calcWidth} position="start" id="start" />
          ) : null}
        </div>
      </ExpansionPanel>
    </div>
  );
}

const FENStringCode =
  '<Chessboard position="2R5/4bppk/1p1p3Q/5R1P/4P3/5P2/r4q1P/7K b - - 6 50"/>';

function FENString({ history, pathname, open, handleFENStringClick }) {
  return (
    <div>
      <ExpansionPanel expanded={open || pathname.includes('/basics/fenString')}>
        <ExpansionPanelSummary
          classes={{ root: 'fenString-expansion-root' }}
          onClick={() => handleFENStringClick(history)}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>FEN String</Typography>
        </ExpansionPanelSummary>
        <div style={panelStyle}>
          <Typography align="left">
            Initialize the board using a FEN string
          </Typography>
          <pre style={highlight}>
            <code>{FENStringCode}</code>
          </pre>
          {open || pathname === '/basics/fenString' ? (
            <Chessboard
              calcWidth={calcWidth}
              position="2rq1rk1/pb1n1ppN/4p3/1pb5/3P1Pn1/P1NB4/1PQ3PP/R1B2RK1 w - - 1 16"
              id="fenString"
            />
          ) : null}
        </div>
      </ExpansionPanel>
    </div>
  );
}

const positionObjectCode = `<Chessboard
    position={{
      e5: 'wK',
      e4: 'wP',
      e7: 'bK'
    }}
    sparePieces={true}
  />`;

function PositionObject({
  history,
  pathname,
  open,
  handlePositionObjectClick
}) {
  return (
    <div>
      <ExpansionPanel
        expanded={open || pathname.includes('/basics/positionObject')}
      >
        <ExpansionPanelSummary
          classes={{ root: 'positionObject-expansion-root' }}
          onClick={() => handlePositionObjectClick(history)}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Position Object with Spare Pieces</Typography>
        </ExpansionPanelSummary>
        <div style={panelStyle}>
          <Typography align="left">
            Initialize the board using a position object
          </Typography>
          <pre style={highlight}>
            <code>{positionObjectCode}</code>
          </pre>
          {open || pathname === '/basics/positionObject' ? (
            <Chessboard
              calcWidth={calcWidth}
              position={{
                e5: 'wK',
                e4: 'wP',
                e7: 'bK'
              }}
              id="posObject"
              sparePieces={true}
            />
          ) : null}
        </div>
      </ExpansionPanel>
    </div>
  );
}

const multipleBoardsCode = `<React.Fragment>
  <Chessboard id="positionObject" position={{ e5: "wK", e4: "wP", e7: "bK" }} />
  <Chessboard id="startPos" position="start" />
  <Chessboard id="ruyLopez" position="r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R" />
</React.Fragment>`;

function MulitpleBoards({
  history,
  pathname,
  open,
  handleMultipleBoardsClick
}) {
  return (
    <div>
      <ExpansionPanel
        expanded={open || pathname.includes('/basics/multipleBoards')}
      >
        <ExpansionPanelSummary
          classes={{ root: 'multipleBoards-expansion-root' }}
          onClick={() => handleMultipleBoardsClick(history)}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Multiple Boards</Typography>
        </ExpansionPanelSummary>
        <div style={panelStyle}>
          <Typography align="left">
            Initialize multiple boards by setting the id prop
          </Typography>
          <pre style={highlight}>
            <code>{multipleBoardsCode}</code>
          </pre>
          {open || pathname === '/basics/multipleBoards' ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                height: 1000,
                flexDirection: 'column'
              }}
            >
              <Chessboard
                calcWidth={calcWidth}
                id="positionObject"
                position={{ e5: 'wK', e4: 'wP', e7: 'bK' }}
              />
              <Chessboard
                calcWidth={calcWidth}
                id="startPos"
                position="start"
              />
              <Chessboard
                calcWidth={calcWidth}
                id="ruyLopez"
                position="r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R"
              />
            </div>
          ) : null}
        </div>
      </ExpansionPanel>
    </div>
  );
}

const calcWidth = (screenWidth, screenHeight) =>
  (screenWidth || screenHeight) < 550 ? 300 : 500;

const panelStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  paddingTop: 10,
  paddingBottom: 20,
  backgroundColor: '#7d8da1'
};

const highlight = {
  backgroundColor: '#ACB6C3',
  border: `2px solid #39526f`,
  borderRadius: 2,
  padding: 10,
  height: 'auto',
  maxWidth: `90%`,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  overflow: 'scroll'
};
