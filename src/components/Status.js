

import React, {useState} from 'react';
import { Tab,Box } from '@mui/material';
import {TabContext,TabList,TabPanel} from '@mui/lab';




export const Status =(props) => {
    const [value,setValue]=useState('1');
    const handleChange=(event=React.SyntheticEvent, newValue=String)=>{
        setValue(newValue);
    }
    const allTodo=()=>{
        props.all(props.id);
      };
      const completionTodo=()=>{
        props.completed(props.id);
      }
      const incompletionTodo=()=>{
        props.incomplete(props.id);
      }
  return (
<TabContext value={value}>
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <TabList onChange={handleChange} aria-label="lab API tabs example">
      <Tab label="All" value="1" />
      <Tab label="Completed" value="2" />
      <Tab label="Incomplete" value="3" />
    </TabList>
  </Box>
  <TabPanel value="1"></TabPanel>
  <TabPanel value="2"></TabPanel>
  <TabPanel value="3"></TabPanel>
</TabContext>
  )
}
export default Status;