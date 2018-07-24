import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { version1 } from '../getProps';
import { version2 } from '../getProps';
import './styles/propsPanel.css';

class PropsPanel extends Component {
  state = { v1Button: false, currentButton: true };

  handleV1ButtonClick = () => {
    this.setState({ v1Button: true, currentButton: false });
  };

  handleV2ButtonClick = () => {
    this.setState({ v1Button: false, currentButton: true });
  };

  getType = prop => {
    const name = `${prop.type.name}`;
    if (prop.type.value) {
      const values = prop.type.value.map(v => {
        if (v.value) {
          return v.value;
        }
        return v.name;
      });
      return <div>{values.join(' | ')}</div>;
    }
    return <div>{name}</div>;
  };

  getProps = () => {
    return this.state.v1Button ? version1 : version2;
  };

  render() {
    const { history, open, handlePropsClick } = this.props;
    const pathname = history.location.pathname;
    return (
      <div>
        <ExpansionPanel
          classes={{ root: 'props-expansion-root' }}
          expanded={open || pathname.includes('/props')}
        >
          <ExpansionPanelSummary
            classes={{
              root: 'props-expansion-summary'
            }}
            onClick={() => handlePropsClick(history)}
            expandIcon={<ExpandMoreIcon color="secondary" />}
          >
            <Typography color="secondary">Props</Typography>
          </ExpansionPanelSummary>
          {open || pathname === '/props' ? (
            <Paper classes={{ root: 'table-root' }}>
              <div
                style={{
                  backgroundColor: '#506072',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 5
                }}
              >
                <Button
                  variant="contained"
                  color={this.state.v1Button ? 'primary' : 'secondary'}
                  onClick={this.handleV1ButtonClick}
                >
                  Version 1.0
                </Button>
                <div style={{ width: 20 }} />
                <Button
                  variant="contained"
                  color={this.state.currentButton ? 'primary' : 'secondary'}
                  onClick={this.handleV2ButtonClick}
                >
                  Current Version
                </Button>
              </div>
              <Table>
                <TableHead>
                  <TableRow style={headerRowStyle}>
                    <TableCell style={headerCellStyle} padding="dense">
                      Name
                    </TableCell>
                    <TableCell style={headerCellStyle} padding="dense">
                      Type
                    </TableCell>
                    <TableCell style={headerCellStyle} padding="dense">
                      Default
                    </TableCell>
                    <TableCell style={headerCellStyle} padding="dense">
                      Description
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.getProps().map((p, i) => {
                    return (
                      p && (
                        <TableRow key={p.name} style={tableRowStyle}>
                          <TableCell style={tableCellStyle} padding="dense">
                            <div>{p.name}</div>
                          </TableCell>
                          <TableCell style={tableCellStyle} padding="dense">
                            {this.getType(p)}
                          </TableCell>
                          <TableCell style={tableCellStyle} padding="dense">
                            <div>{p.default.value}</div>
                          </TableCell>
                          <TableCell style={tableCellStyle} padding="dense">
                            <div>{p.description}</div>
                          </TableCell>
                        </TableRow>
                      )
                    );
                  })}
                </TableBody>
              </Table>
            </Paper>
          ) : null}
        </ExpansionPanel>
      </div>
    );
  }
}

export default PropsPanel;

const tableRowStyle = { backgroundColor: 'white' };
const tableCellStyle = { color: 'black' };
const headerRowStyle = { backgroundColor: '#506072' };
const headerCellStyle = { color: 'white' };
