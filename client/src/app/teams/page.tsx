"use client";

import { useGetTeamsQuery } from '@/state/api'
import React from 'react'
import { useAppSelector } from '../redux';
import Header from '@/components/Header';
import { DataGrid, GridColDef, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton } from '@mui/x-data-grid';
import { dataGridClassNames, dataGridSxStyles } from '@/lib/utils';

const CustomToolbar = () => (
    <GridToolbarContainer className='toolbar flex gap-2'>
        <GridToolbarFilterButton></GridToolbarFilterButton>
        <GridToolbarExport></GridToolbarExport>
    </GridToolbarContainer>
)
const columns: GridColDef[] = [
    {field: "id", headerName: "Team ID", width: 100},
    {field: "teamName", headerName: "Team Name", width: 200},
    {field: "productOwnerUsername", headerName: "Product Owner", width: 200},
    {field: "projectManagerUsername", headerName: "Project Manager", width: 200},
    

]
const Teams = () => {
    const {data: teams, isLoading, isError} = useGetTeamsQuery();
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode)

    if (isLoading) return <div>Loading...</div>
    if (isError) {
    console.error('Task fetch error:', isError);
    return <div>An error occurred while fetching teams: {JSON.stringify(isError, null, 2)}</div>;
    }
  return (
    <div className='flex w-full flex-col p-8'>
        <Header name='Teams'/>
        <div style={{ height: 650, width: "100%"}}>
            <DataGrid
                rows={ teams || []}
                columns={ columns }
                pagination
                className={dataGridClassNames}
                slots={{
                    toolbar: CustomToolbar
                }}
                sx={dataGridSxStyles(isDarkMode)}
                />
        </div>
    </div>
  )
}

export default Teams