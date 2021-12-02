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

export default function PopupUpdate(props) {

    const { title, children, openPopup_UpEv, setOpenPopup_UpEv } = props;
    const classes = useStyles();

    return (
        <>
            <Dialog open={openPopup_UpEv} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
                <DialogTitle>
                    <div style={{ display: 'flex' }}>
                        <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                            {title}
                        </Typography>
                        <i className="fas fa-times-circle" onClick={() => { setOpenPopup_UpEv(false) }}></i>
                    </div>
                </DialogTitle>
                <DialogContent dividers>
                    {children}
                </DialogContent>
            </Dialog>
        </>
    );
};
