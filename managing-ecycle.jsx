import SideAdmin from './sideadmin';
import Manage from "./manage";
import AppAdmin from './app-admin';
import { Stack } from '@mui/material';

function ManagingDetails(){
    return(

        <div>
            <AppAdmin/>
            <Stack direction={"row"}>
                <SideAdmin/>
                <Manage/>
            </Stack>
        </div>
    );
}

export default ManagingDetails;