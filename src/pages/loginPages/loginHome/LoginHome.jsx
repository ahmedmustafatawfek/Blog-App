import  React,{useState} from 'react';
import "./loginhome.css"
import "../../../components/news/news.css"
import Footer from "../../../components/footer/Footer"
import News from "../../../components/news/News"

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
    >
        {value === index && (
        <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
        </Box>
        )}
    </div>
    );
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
    };
}


const LoginHome = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

return (
    <>
    <Box>    
        <Box className="title">
            <Tabs value={value} onChange={handleChange} >
                <Tab className="tab" label="Your Feed" {...a11yProps(0)} />
                <Tab className="tab" label="Global Feed" {...a11yProps(1)} />
                {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <h2>No articles are here... yet.</h2>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <News/>
        </TabPanel>

        {/* <TabPanel value={value} index={2}> */}
            {/* Item Three */}
        {/* </TabPanel> */}

    </Box>
    <Footer /> 
    </>
    )
}

export default LoginHome