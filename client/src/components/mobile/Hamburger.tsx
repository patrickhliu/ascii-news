import * as React from 'react';
import { AppBar, Toolbar, IconButton, Drawer, Box } from '@mui/material';
//import MenuIcon from '@mui/icons-material/Menu';
import MenuAccordionFlat from './AccordionFlat';
import styles from '../../index.module.css';

const MenuHamburger = () => {
    const [open, setOpen] = React.useState(false);

    const handleClose = (event: React.ChangeEvent<unknown>, reason: any) => {
        if (!event || !reason) return;

        // reason will be 'backdropClick' or 'escapeKeyDown' for outside interactions
        if (reason === 'backdropClick') {
            setOpen(false);
        } else {
            // do nothing...
        }
    };

    return (
        <AppBar sx={{ height: '120px' }} className={styles.customAppBar}>
            <Toolbar>
                <IconButton
                    edge="start"
                    aria-label="open drawer"
                    className="scheme-font-2"
                    onClick={() => {
                        setOpen(true);
                    }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>

            <Drawer
                anchor="left"
                open={open}
                onClose={handleClose}
                variant="temporary" // Slides in and out
            >
                <Box sx={{ width: 250 }} role="presentation">
                    <MenuAccordionFlat></MenuAccordionFlat>
                </Box>
            </Drawer>
        </AppBar>
    );
};

export default MenuHamburger;
