import React from 'react';
import ThemeContext from './ThemeContext';

function HeaderButton() {
  const themeContext = React.useContext(ThemeContext);

  return (
    <div>
      <button style={{color: themeContext.color, backgroundColor: themeContext.backgroundColor}}>Press me</button>
    </div>
  );
}

export default HeaderButton;
