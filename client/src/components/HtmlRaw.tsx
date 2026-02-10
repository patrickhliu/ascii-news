import React from 'react';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

interface Args {
    htmlString: string;
    classString: string;
}

const HtmlRaw: React.FC<Args> = ({ htmlString, classString }) => {
    const cleanHtml = DOMPurify.sanitize(htmlString);
    return <div className={classString}>{parse(cleanHtml)}</div>;
};

export default HtmlRaw;
