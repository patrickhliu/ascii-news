import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import HtmlRaw from './HtmlRaw';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

interface Args {
    article: any;
}

const ArticleBox: React.FC<Args> = ({ article }) => {
    return (
        <div className="article-box">
            <div className="headline">{article.fields.headline}</div>
            <HtmlRaw htmlString={article.fields.body}></HtmlRaw>
            <span>{article.webPublicationDateStr}</span>
        </div>
    );
};

export default ArticleBox;
