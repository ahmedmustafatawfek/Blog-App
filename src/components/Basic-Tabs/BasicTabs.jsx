import React ,{useState}from 'react'
import { Box ,Tab } from "@mui/material"
import { TabContext , TabList , TabPanel } from "@mui/lab"
import "../../pages/loginPages/loginHome/loginhome.css"
import MyFeed from '../../pages/loginPages/loginHome/MyFeed'
import Post from '../content/Post'


const BasicTabs = () => {
    const [value, setValue] = useState('1');

    const handleChange=(event , newValue)=>{
        setValue(newValue);
    }

return (
    <Box >
        <TabContext value={value} >
            <Box sx={{ borderBottom:1 ,borderColor:"divider"}} className="title">
                <TabList aria-label="Tabs example" onChange={handleChange}  >
                    <Tab className="tab" label="Your Feed" value="1"/>
                    <Tab className="tab" label="Global Feed" value="2"/>
                </TabList>
            </Box>
            <TabPanel value="1" ><MyFeed/></TabPanel>
            <TabPanel value="2" ><Post/></TabPanel>
        </TabContext>
    </Box>
    )
}

export default BasicTabs
