import SideAdmin from './sideadmin';
import Tables from './table';
import AppAdmin from './app-admin';
import { Stack } from '@mui/material';

function SignupDetails(){
    return(

        <div>
            <AppAdmin/>
            <Stack direction={"row"}>
                <SideAdmin/>
                <Tables/>
            </Stack>
        </div>
    );
}

export default SignupDetails;