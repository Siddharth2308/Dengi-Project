import React from 'react';
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        background: 'linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);',
        padding: theme.spacing(2),
        width: '60%',
        color: '#fff',
        position: 'absolute',
        top: theme.spacing(2)

    }
}));

export default function PopupDel(props) {

    const { title, children, openPopup_delEv, setOpenPopup_delEv } = props;
    const classes = useStyles();

    return (
        <>
            <Dialog open={openPopup_delEv} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
                <DialogTitle>
                    <div style={{ display: 'flex' }}>
                        <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                            {title}
                        </Typography>
                        <i className="fas fa-times-circle" onClick={() => { setOpenPopup_delEv(false) }}></i>
                    </div>
                </DialogTitle>
                <DialogContent dividers>
                    {children}
                </DialogContent>
            </Dialog>
        </>
    );
};
