import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chessboard from 'chessboardjsx';
import rough from 'roughjs';

import wK from '../elvis.png';
import bK from '../lebron.png';
import './styles/customBoardPanel.css';

class CustomBoardPanel extends Component {
  render() {
    const { history, open, handleCustomBoardClick } = this.props;
    const pathname = history.location.pathname;
    return (
      <div>
        <ExpansionPanel expanded={open || pathname.includes('/custom')}>
          <ExpansionPanelSummary
            classes={{ root: 'custom-expansion-root' }}
            onClick={() => handleCustomBoardClick(history)}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Custom Board with Elvis and Lebron</Typography>
          </ExpansionPanelSummary>
          {open || pathname === '/custom' ? (
            <div style={panelStyle}>
              <iframe
                src="https://codesandbox.io/embed/61l3np87pw?codemirror=1&view=preview"
                style={{
                  width: '95%',
                  height: 500,
                  border: 0,
                  borderRadius: 2,
                  overflow: 'hidden'
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
  marginTop: 10
};
