import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './styles/customBoardPanel.css';

class CustomBoardPanel extends Component {
  render() {
    const { history, open, handleCustomBoardClick } = this.props;
    const pathname = history.location.pathname;
    return (
      <div>
        <ExpansionPanel
          classes={{ root: 'custom-expansion-root' }}
          expanded={open || pathname.includes('/custom')}
        >
          <ExpansionPanelSummary
            classes={{ root: 'custom-expansion-summary-root' }}
            onClick={() => handleCustomBoardClick(history)}
            expandIcon={<ExpandMoreIcon color="secondary" />}
          >
            <Typography color="secondary">
              Custom Board with Elvis and Lebron James
            </Typography>
          </ExpansionPanelSummary>
          {open || pathname === '/custom' ? (
            <div style={panelStyle}>
              <iframe
                title="custom board example"
                src="https://codesandbox.io/embed/61l3np87pw?codemirror=1&module=%2Fsrc%2FDemo.js&view=preview"
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
}

export default CustomBoardPanel;

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
