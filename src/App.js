import React from 'react';
import './App.css';
import List from './components/List';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './components/TabPanel';

function App() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newVal) => {
    setValue(newVal);
  }

  return (
    <div className="App">
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="Tab1" />
          <Tab label="Tab2" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <List />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </div>
  );
}

export default App;
