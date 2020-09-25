import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import TabPanel from './TabPanel';
import List from './List';
import Form from './Form';

const Home = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newVal) => {
        setValue(newVal);
    }
    return (
      <>
        <AppBar position="static">
            <Tabs value={value} onChange={handleChange} variant="fullWidth">
            <Tab label="All Books" />
            <Tab label="Add a Book" />
            </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            <List />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Form /> 
        </TabPanel>
      </>
    );
}

export default Home;