import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './styles/integrationPanel.css';

class IntegrationsPanel extends Component {
  state = {
    randomVsRandomPanel: false,
    withMoveValidationPanel: false,
    stockfishPanel: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.open !== this.props.open) {
      this.setState({
        randomVsRandomPanel: false,
        withMoveValidationPanel: false,
        stockfishPanel: false
      });
    }
  }

  handleStockfishClick = history => {
    const { stockfishPanel } = this.state;
    let pathname = history.location.pathname;

    pathname === '/integrations/stockfish' || stockfishPanel
      ? history.push('/integrations')
      : history.push('/integrations/stockfish');

    this.setState(({ stockfishPanel }) => ({
      stockfishPanel:
        pathname === '/integrations/stockfish' ? false : !stockfishPanel,
      randomVsRandomPanel: false,
      withMoveValidationPanel: false
    }));
  };

  handleWithMoveValidationClick = history => {
    const { withMoveValidationPanel } = this.state;
    let pathname = history.location.pathname;

    pathname === '/integrations/move-validation' || withMoveValidationPanel
      ? history.push('/integrations')
      : history.push('/integrations/move-validation');

    this.setState(({ withMoveValidationPanel }) => ({
      withMoveValidationPanel:
        pathname === '/integrations/move-validation'
          ? false
          : !withMoveValidationPanel,
      randomVsRandomPanel: false,
      stockfishPanel: false
    }));
  };

  handleRandomVsRandomClick = history => {
    const { randomVsRandomPanel } = this.state;
    let pathname = history.location.pathname;

    pathname === '/integrations/random' || randomVsRandomPanel
      ? history.push('/integrations')
      : history.push('/integrations/random');

    this.setState(({ randomVsRandomPanel }) => ({
      randomVsRandomPanel:
        pathname === '/integrations/random' ? false : !randomVsRandomPanel,
      withMoveValidationPanel: false,
      stockfishPanel: false
    }));
  };

  render() {
    const { history, open, handleIntegrationsClick } = this.props;
    const {
      stockfishPanel,
      randomVsRandomPanel,
      withMoveValidationPanel
    } = this.state;
    const pathname = history.location.pathname;
    return (
      <div>
        <ExpansionPanel expanded={open || pathname.includes('/integrations')}>
          <ExpansionPanelSummary
            classes={{ root: 'integrations-expansion-root' }}
            onClick={() => handleIntegrationsClick(history)}
            expandIcon={<ExpandMoreIcon color="secondary" />}
          >
            <Typography color="secondary">Integrations</Typography>
          </ExpansionPanelSummary>
          <RandomVsRandom
            history={history}
            pathname={pathname}
            open={randomVsRandomPanel}
            handleRandomVsRandomClick={this.handleRandomVsRandomClick}
          />
          <WithMoveValidation
            history={history}
            pathname={pathname}
            open={withMoveValidationPanel}
            handleWithMoveValidationClick={this.handleWithMoveValidationClick}
          />
          <Stockfish
            history={history}
            pathname={pathname}
            open={stockfishPanel}
            handleStockfishClick={this.handleStockfishClick}
          />
        </ExpansionPanel>
      </div>
    );
  }
}

export default IntegrationsPanel;

function WithMoveValidation({
  history,
  pathname,
  open,
  handleWithMoveValidationClick
}) {
  return (
    <div>
      <ExpansionPanel expanded={open || pathname.includes('/move-validation')}>
        <ExpansionPanelSummary
          classes={{ root: 'moveValidation-expansion-root' }}
          onClick={() => handleWithMoveValidationClick(history)}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>With Move Validation</Typography>
        </ExpansionPanelSummary>
        {open || pathname === '/integrations/move-validation' ? (
          <div style={panelStyle}>
            <iframe
              title="move validation example"
              src="https://codesandbox.io/embed/lp32ojqzqm?codemirror=1&module=%2Fsrc%2FDemo.js&view=preview"
              style={{
                width: '95%',
                height: 500,
                border: 0,
                borderRadius: 2,
                overflow: 'scroll'
              }}
              sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
            />
          </div>
        ) : null}
      </ExpansionPanel>
    </div>
  );
}

function RandomVsRandom({
  history,
  pathname,
  open,
  handleRandomVsRandomClick
}) {
  return (
    <div>
      <ExpansionPanel expanded={open || pathname.includes('/random')}>
        <ExpansionPanelSummary
          classes={{ root: 'randomVsRandom-expansion-root' }}
          onClick={() => handleRandomVsRandomClick(history)}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Random Vs Random</Typography>
        </ExpansionPanelSummary>
        {open || pathname === '/integrations/random' ? (
          <div style={panelStyle}>
            <iframe
              title="random vs random example"
              src="https://codesandbox.io/embed/oqkq2yqkwq?codemirror=1&module=%2Fsrc%2FDemo.js&view=preview"
              style={{
                width: '95%',
                height: 500,
                border: 0,
                borderRadius: 2,
                overflow: 'scroll'
              }}
              sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
            />
          </div>
        ) : null}
      </ExpansionPanel>
    </div>
  );
}

function Stockfish({ history, pathname, open, handleStockfishClick }) {
  return (
    <div>
      <ExpansionPanel expanded={open || pathname.includes('/stockfish')}>
        <ExpansionPanelSummary
          classes={{ root: 'stockfish-expansion-root' }}
          onClick={() => handleStockfishClick(history)}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Play Stockfish Engine</Typography>
        </ExpansionPanelSummary>
        {open || pathname === '/integrations/stockfish' ? (
          <div style={panelStyle}>
            <iframe
              title="stockfish engine example"
              src="https://codesandbox.io/embed/432vylv590?codemirror=1&module=%2Fsrc%2FDemo.js&view=preview"
              style={{
                width: '95%',
                height: 500,
                border: 0,
                borderRadius: 2,
                overflow: 'scroll'
              }}
              sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
            />
          </div>
        ) : null}
      </ExpansionPanel>
    </div>
  );
}

const panelStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  paddingTop: 10,
  paddingBottom: 10,
  backgroundColor: '#adbdd2'
};
