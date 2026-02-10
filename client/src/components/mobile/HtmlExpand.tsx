import React from 'react';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Args {
    htmlString: string;
}

const HtmlExpand: React.FC<Args> = ({ htmlString }) => {
    const cleanHtml = DOMPurify.sanitize(htmlString);

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="scheme-border-2 scheme-bg-3 scheme-font-2"
                >
                    <Typography component="span">Description</Typography>
                </AccordionSummary>
                <AccordionDetails className="wrap-break-word text-sm scheme-bg-3 scheme-font-2">{parse(cleanHtml)}</AccordionDetails>
            </Accordion>
        </div>
    );
};

export default HtmlExpand;
