import SideAdmin from './sideadmin';
import Editing from './update';
import AppAdmin from './app-admin';
import { Stack } from '@mui/material';

function ManagingDetails(){
    return(

        <div>
            <AppAdmin/>
            <Stack direction={"row"}>
                <SideAdmin/>
                <Editing/>
            </Stack>
        </div>
    );
}

export default ManagingDetails;