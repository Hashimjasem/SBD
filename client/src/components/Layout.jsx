import React from 'react';

function Layout({ children }) {
  return (
    <div className="layout">
      <header>Header Content</header>
      <main>{children}</main>
      <footer>Footer Content</footer>
    </div>
  );
}

export default Layout;