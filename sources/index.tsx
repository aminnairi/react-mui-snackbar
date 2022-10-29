import React, { Fragment, createContext, ReactNode, useContext, useMemo, useState, useCallback } from "react"
import { Snackbar, Alert, AlertColor } from "@mui/material"

export const SnackbarContext = createContext({
    openSnackbar: () => {},
    closeSnackbar: () => {},
    setSnackbarSeverity: (severity?: AlertColor) => {},
    setSnackbarMessage: (message: string) => {}
})

export const useSnackbarContext = () => useContext(SnackbarContext)

export interface SnackbarContextProviderProps {
    children: ReactNode
}

export const SnackbarContextProvider = ({children}: SnackbarContextProviderProps) => {
    const [opened, setOpened] = useState(false)
    const [snackbarSeverity, setSnackbarSeverity] = useState<AlertColor | undefined>(undefined)
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const openSnackbar = useCallback(() => {
        setOpened(true)
    }, [setOpened])

    const closeSnackbar = useCallback(() => {
        setOpened(false)
    }, [setOpened])

    const value = useMemo(() => ({
        openSnackbar,
        closeSnackbar,
        setSnackbarSeverity,
        setSnackbarMessage
    }), [openSnackbar, closeSnackbar, setSnackbarSeverity, setSnackbarMessage])

    return (
        <Fragment>
            <Snackbar open={opened} onClose={closeSnackbar}>
                <Alert severity={snackbarSeverity}>{snackbarMessage}</Alert>
            </Snackbar>
            <SnackbarContext.Provider value={value}>
                {children}
            </SnackbarContext.Provider>
        </Fragment>
    )
}