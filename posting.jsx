import SideAdmin from './sideadmin';
import Post from "./post-cycle";
import AppAdmin from './app-admin';
import { Stack } from '@mui/material';

function SignupDetails(){
    return(

        <div>
            <AppAdmin/>
            <Stack direction={"row"}>
                <SideAdmin/>
                <Post/>
            </Stack>
        </div>
    );
}

export default SignupDetails;