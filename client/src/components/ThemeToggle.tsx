import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

type Theme = 'default' | 'ocean' | 'ruby' | 'terracotta' | 'emerald' | 'newspaper' | 'orchid' | 'bumblebee' | 'oreo' | 'goldust';

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState<Theme>('goldust');

    // Load saved theme on mount
    useEffect(() => {
        if (!theme) return;

        localStorage.removeItem('theme');
        const savedTheme = (localStorage.getItem('theme') as Theme) || 'goldust';
        setTheme(savedTheme);
        document.documentElement.dataset.theme = savedTheme;
    }, []);

    // Function to switch theme
    const changeTheme = (newTheme: Theme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.dataset.theme = newTheme;
    };

    return (
        <ButtonGroup variant="contained" aria-label="Basic button group" sx={{ display: 'none' }}>
            <Button variant="outlined" className="text-black" onClick={() => changeTheme('default')}>
                default
            </Button>
            <Button variant="outlined" className="text-black" onClick={() => changeTheme('ocean')}>
                ocean
            </Button>
            <Button variant="outlined" className="text-black" onClick={() => changeTheme('ruby')}>
                ruby
            </Button>
            <Button variant="outlined" className="text-black" onClick={() => changeTheme('terracotta')}>
                terracotta
            </Button>
            <Button variant="outlined" className="text-black" onClick={() => changeTheme('emerald')}>
                emerald
            </Button>
            <Button variant="outlined" className="text-black" onClick={() => changeTheme('newspaper')}>
                newspaper
            </Button>
            <Button variant="outlined" className="text-black" onClick={() => changeTheme('orchid')}>
                orchid
            </Button>
            <Button variant="outlined" className="text-black" onClick={() => changeTheme('bumblebee')}>
                bumblebee
            </Button>
            <Button variant="outlined" className="text-black" onClick={() => changeTheme('oreo')}>
                oreo
            </Button>
        </ButtonGroup>
    );
};

export default ThemeToggle;
