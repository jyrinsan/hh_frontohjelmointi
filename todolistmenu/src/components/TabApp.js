import React from'react';
import { Tabs, Tab } from '@mui/material';

function TabApp({setValue, value}) {

    const handleChange= (event, value2) => {
        setValue(value2);
    };

    return(
        <div className="TabApp">
            <Tabs value={value} onChange={handleChange}>
                <Tab className="Tab" value="one" label="HOME" />
                <Tab className="Tab" value="two" label="MY TODOS" />
            </Tabs>
        </div>
    );
}

export default TabApp;