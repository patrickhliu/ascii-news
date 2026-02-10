import React from 'react';
//import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import HtmlRaw from './HtmlRaw';
import Divider from '@mui/material/Divider';
import StackSocialMedia from './StackSocialMedia';

interface Args {
    article: any;
}

const ArticleBox: React.FC<Args> = ({ article }) => {
    return (
        <div className="article-box">
            <div className="headline">{article.fields.headline}</div>
            <p className="byline mt-0">{article.webPublicationDateStr}</p>
            <HtmlRaw classString="byline mt-2 mb-5" htmlString={article.fields.bylineHtml}></HtmlRaw>
            <Divider variant="middle" />
            <HtmlRaw classString="byline text-ellipsis my-5" htmlString={article.fields.standfirst}></HtmlRaw>
            <Paper elevation={1} sx={{ p: 2, m: 0, '& > *': { m: 0 } }}>
                <StackSocialMedia article={article}></StackSocialMedia>
            </Paper>
        </div>
    );
};

export default ArticleBox;
