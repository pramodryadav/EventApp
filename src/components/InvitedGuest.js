import * as React from 'react';
import Box from '@mui/material/Box';

import { DataGrid } from '@mui/x-data-grid';




export default function InvitedGuest(props) {
  


  



  const columns = [
    { field: 'id', headerName: 'ID', width: 180 },
    { field: 'name', width: 180, headerName: 'Name' },

    {
      field: 'email',
      headerName: 'Email',
      width: 180
    },
    {
      field: 'contact',
      headerName: 'Contact',
      width: 120
    },
    {
      field: 'address',
      headerName: 'Address',
      width: 200
    }


  ];


  return (

    <div style={{ height: 400, width: '90%', margin: 'auto', marginTop: '20px' }}>

      <Box
        sx={{
          height: 500,
          width: '100%',
          '& .actions': { color: 'text.secondary' },
          '& .textPrimary': {
            color: 'text.primary',
          },
          margin:'auto'
        }}
      >

        

        <DataGrid
          rows={props.isSearch && props.searchTerm.length > 0 ? props.searchedInvitedGuest : props.invitedGuest}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          //onSelectionModelChange={(id) => handleSelect(id)}
        />
      </Box>
    </div>
  );
}