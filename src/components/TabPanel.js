import React from 'react';
import PropTypes from 'prop-types';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div className="tab-panel" hidden={value !== index} id={`simple-tabpanel-${index}`} {...other}>
        {children}
      </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default TabPanel;