# react-mui-snackbar

React Material UI's Snackbar provider & utilities written in TypeScript.

## Requirements

- [Node](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [React](https://www.npmjs.com/package/react)
- [ReactDOM](https://www.npmjs.com/package/react-dom)
- [Material UI](https://www.npmjs.com/package/@mui/material)

## Installation

```bash
npm install @aminnairi/react-mui-snackbar
```

## Usage

```tsx
// ./src/index.jsx

import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { SnackbarContextProvider } from "@aminnairi/react-mui-snackbar"
import { App } from "./components/app"

const rootElement = document.getElementById("root")

if (!rootElement) {
    throw new Error("Root element not found")
}

const root = createRoot()

root.render(
    <StrictMode>
        <SnackbarContextProvider>
            <App />
        </SnackbarContextProvider>
    </StrictMode>
)
```

```tsx
// ./src/components/app.jsx

import React, { Fragment, useEffect } from "react"
import { useSnackbarContext } from "@aminnairi/react-mui-snackbar"
import { Button } from "@mui/material"

export const App = () => {
    const {
        openSnackbar,
        closeSnackbar,
        setSnackbarSeverity,
        setSnackbarMessage
    } = useSnackbarContext()

    useEffect(() => {
        setSnackbarSeverity("success")
        setSnackbarMessage("Hello, world!")
    }, [])

    return (
        <Fragment>
            <Button onClick={openSnackbar}>Open Snackbar</Button>
            <Button onClick={closeSnackbark}>Close Snackbar</Button>
        </Fragment>
    )
}
```