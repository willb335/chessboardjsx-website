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

import docgen from '../getProps';
import './styles/propsPanel.css';

class PropsPanel extends Component {
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

  render() {
    const { history, open, handlePropsClick } = this.props;
    const pathname = history.location.pathname;
    return (
      <div>
        <ExpansionPanel expanded={open || pathname.includes('/props')}>
          <ExpansionPanelSummary
            classes={{ root: 'props-expansion-root' }}
            onClick={() => handlePropsClick(history)}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Props</Typography>
          </ExpansionPanelSummary>
          {open || pathname === '/props' ? (
            <Paper classes={{ root: 'table-root' }}>
              <Table>
                <TableHead>
                  <TableRow>
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
                  {docgen.map((p, i) => {
                    return (
                      p && (
                        <TableRow key={p.name} style={tableRowStyle(i)}>
                          <TableCell style={tableCellStyle(i)} padding="dense">
                            <div>{p.name}</div>
                          </TableCell>
                          <TableCell style={tableCellStyle(i)} padding="dense">
                            {this.getType(p)}
                          </TableCell>
                          <TableCell style={tableCellStyle(i)} padding="dense">
                            <div>{p.default.value}</div>
                          </TableCell>
                          <TableCell style={tableCellStyle(i)} padding="dense">
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

const tableRowStyle = index => ({
  backgroundColor: index % 2 ? '#adbdd2' : '#506072'
});

const tableCellStyle = index => ({
  color: index % 2 ? 'black' : 'white'
});

const headerCellStyle = { color: 'black', fontWeight: 600 };
