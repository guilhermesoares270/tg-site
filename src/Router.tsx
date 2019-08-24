import React from "react";
import CreateContract from './pages/CreateContract/CreateContract';

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  {
    path: "/",
    exact: true,
    // sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/bubblegum",
    // sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    // sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  },
  {
    path: '/login',
    // sidebar: () => null,
    main: () => <CreateContract />
  }
];

export default routes;