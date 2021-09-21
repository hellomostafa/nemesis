import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react';
import './UserTable.css'

const UserTable = () => {

    
    const [columns, setColumns] = useState([
        { title: 'Name', field: 'name' },
        { title: 'Username', field: 'username' },
        { title: 'Email', field: 'email' },
        { title: 'Phone', field: 'phone' },
        { title: 'Website', field: 'email' }
    ]);

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(result => setUsers(result))
    }, [])

  



    return (

        <MaterialTable title="Nemesis Project"   columns={columns} data={users}
        editable={{
            onRowAdd: newData =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                setUsers([...users, newData]);
                
                resolve();
                }, 1000)
            }),
            onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                const dataUpdate = [...users];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setUsers([...dataUpdate]);

                resolve();
                }, 1000)
            }),
            onRowDelete: oldData =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                const dataDelete = [...users];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setUsers([...dataDelete]);
                
                resolve()
                }, 1000)
            }),
        }}

        
        />
        
    );
};

export default UserTable;