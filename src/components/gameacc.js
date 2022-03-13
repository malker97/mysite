import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'account',
    headerName: 'Account',
    type: 'email',
    width: 150,
    editable: true,
  },
  {
    field: 'passwd',
    headerName: 'Password',
    width: 150,
    editable: true,
  },
  {
    field: 'sec',
    headerName: 'Seacure Answer',
    type: 'text',
    width: 150,
    editable: true,
  },
  {
    field: 'tank',
    headerName: 'Tank SR',
    type: 'number',
    sortable: true,
    width: 100,
  },
  {
    field: 'dps',
    headerName: 'DPS SR',
    type: 'number',
    sortable: true,
    width: 100,
  },
  {
    field: 'support',
    headerName: 'Support SR',
    type: 'number',
    sortable: true,
    width: 100,
  },
  {
    field: 'isplaying',
    headerName: 'Playing',
    type: 'text',
    sortable: true,
    width: 80,
  },
];

const rows = [
  { id: 1, account: 'gfcgm@naver.com', passwd: 'xdr56yhn', sec: 'BMW' , tank: -1, dps: -1, support: -1, isplaying: '✅' },
  { id: 2, account: 'chojps@naver.com', passwd: 'jpc-12480413', sec: 'BMW' , tank: -1, dps: -1, support: -1 },
  { id: 3, account: 'yoogag97@naver.com', passwd: 'qw970710', sec: 'BMW' , tank: -1, dps: -1, support: -1 },
  { id: 4, account: 'reine0097@naver.com', passwd: 'xldp0907', sec: 'BMW' , tank: -1, dps: -1, support: -1 },
];

export default function GameAccounts() {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
      <div align='center'>
        <Button variant="contained" endIcon={<SendIcon />}>
            Send
        </Button>
      </div>
      <br></br>
    </div>
  );
}
