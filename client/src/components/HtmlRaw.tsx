import React from 'react';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

interface Args {
    htmlString: string;
}

const HtmlRaw: React.FC<Args> = ({ htmlString }) => {
    const cleanHtml = DOMPurify.sanitize(htmlString);
    return <>{parse(cleanHtml)}</>;
};

export default HtmlRaw;
