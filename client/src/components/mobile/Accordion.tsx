import { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import useRedirect from '../../hooks/useRedirect';

interface Args {
    collections: any;
}

const MenuAccordion: React.FC<Args> = ({ collections }) => {
    const [productTree, setProductTree] = useState<Array<any>>([]);
    //const redirect = useRedirect();
    //const [searchParams] = useSearchParams();
    //const [onProductPage, SetOnProductPage] = useState(false);

    useEffect(() => {
        const obj = { label: 'Collections', items: collections };
        setProductTree(productTree.concat([obj]));
    }, []);

    useEffect(() => {
        //console.log('mobile', productTree);
    }, [productTree]);

    const handleRedirect = (label: string, item: any) => {
        if (label.toLowerCase() == 'collections' && item.vendor_id) {
            window.location.href = '/collections?vendor_id=' + item.vendor_id + '&p=1';
        }
    };

    return (
        <>
            {productTree.map((treeObj: any, treeIndex: number) => (
                <Accordion key={treeIndex} className="scheme-bg-2">
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                        <Typography component="span">
                            <span className="scheme-font-1 font-bold cursor-pointer">{treeObj.label}</span>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {treeObj.items.map((treeItem: any, treeItemIndex: number) => (
                            <div
                                className={
                                    treeItemIndex == treeObj.items.length - 1
                                        ? 'p-2 scheme-font-1 cursor-pointer scheme-border-1'
                                        : 'p-2 scheme-font-1 cursor-pointer scheme-border-1-hat'
                                }
                                key={'accordion-item-' + treeItemIndex}
                                onClick={() => {
                                    handleRedirect(treeObj.label, treeItem);
                                }}
                            >
                                {treeItem.title}
                            </div>
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}
        </>
    );
};

export default MenuAccordion;
