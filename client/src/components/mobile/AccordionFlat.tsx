import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { RedirectToSlug } from '../../lib/utils';

const MenuAccordion = () => {
    const [productTree] = useState<Array<any>>([
        {
            label: 'Home',
            items: [],
            slug: '/',
        },
        {
            label: 'Our Team',
            items: [],
            slug: '/our-team',
        },
        {
            label: 'FAQ',
            items: [],
            slug: '/faq',
        },
        {
            label: 'Privacy Policy',
            items: [],
            slug: '/privacy-policy',
        },
        {
            label: 'Terms & Conditions',
            items: [],
            slug: '/terms-conditions',
        },
    ]);

    useEffect(() => {}, []);

    const handleClick = (slug: string) => {
        RedirectToSlug(slug);
    };

    return (
        <>
            {productTree.map((treeObj: any, treeIndex: number) => (
                <Paper
                    square
                    sx={{ p: 2, mb: 0 }}
                    key={treeIndex}
                    className="scheme-bg-1 scheme-font-2 font-bold cursor-pointer"
                    onClick={() => {
                        handleClick(treeObj.slug);
                    }}
                >
                    {treeObj.label}
                </Paper>
            ))}
        </>
    );
};

export default MenuAccordion;
