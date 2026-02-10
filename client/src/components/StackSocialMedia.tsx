import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import { IsMobileBrowser } from '../lib/utils';
import { toast } from 'react-toastify';
import { Drawer, Box, IconButton } from '@mui/material';
import { IoClose } from 'react-icons/io5';
import Paper from '@mui/material/Paper';
import HtmlRaw from './HtmlRaw';
/* import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaXTwitter, FaInstagram, FaSnapchat, FaPinterestP, FaRegClipboard } from 'react-icons/fa6';
import { LuFacebook } from 'react-icons/lu';
import { TbBrandBluesky, TbBrandTiktok, TbBrandYoutube } from 'react-icons/tb'; */

interface Args {
    article: any;
}

const StackSocialMedia: React.FC<Args> = ({ article }) => {
    const [open, setOpen] = useState(false);

    function openLink(socialMediaType: string, article: any) {
        let shareUrl = '';

        if (socialMediaType == 'newtab') {
            shareUrl = article.webUrl;
        } else if (socialMediaType == 'facebook') {
            shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(article.webUrl);
        } else if (socialMediaType == 'twitter') {
            shareUrl = 'https://x.com/intent/tweet?url=' + encodeURIComponent(article.webUrl);
        } else if (socialMediaType == 'bluesky') {
            shareUrl = 'https://bsky.app/intent/compose?text=' + encodeURIComponent(article.webUrl);
        } else if (socialMediaType == 'snapchat') {
            shareUrl = 'https://www.snapchat.com/scan?attachmentUrl=' + encodeURIComponent(article.webUrl);
        } else if (socialMediaType == 'pinterest') {
            shareUrl = 'https://pinterest.com/pin/create/button/?url=' + encodeURIComponent(article.webUrl);
        }

        const newWindow = window.open(shareUrl, '_blank', 'noopener,noreferrer');

        if (newWindow) {
            newWindow.focus();
        }
    }

    function copyLink(article: any) {
        const textarea = document.createElement('textarea');
        textarea.value = article.webUrl;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();

        try {
            document.execCommand('copy');
            toast.success('Link Copied!', {
                position: 'top-right',
                autoClose: 3000, // ms
                hideProgressBar: false,
                closeOnClick: true,
            });
        } catch (err) {
            toast.error('Error...', {
                position: 'top-right',
                autoClose: 3000, // ms
                hideProgressBar: false,
                closeOnClick: true,
            });
        }

        document.body.removeChild(textarea);
    }

    return (
        <>
            {IsMobileBrowser() && <p>Mobile...</p>}
            <Stack direction="row" spacing={6} className="mt-2">
                <div>
                    <button className="cursor-pointer" onClick={() => setOpen(true)}>
                        VIEW
                    </button>

                    <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
                        <Box sx={{ width: IsMobileBrowser() ? 400 : 800, p: 3 }} className="scheme-bg-2">
                            <IconButton onClick={() => setOpen(false)} sx={{ mb: 2 }}>
                                <IoClose className="scheme-font-1" />
                            </IconButton>
                            <Paper elevation={3} sx={{ backgroundColor: '#f9f7f1', p: 2, m: 0, '& > *': { m: 0 } }}>
                                <HtmlRaw classString="newspaper" htmlString={article.fields.body}></HtmlRaw>
                                {/* <HtmlRaw classString="newspaper" htmlString={article.fields.bodyText}></HtmlRaw> */}
                            </Paper>
                        </Box>
                    </Drawer>
                </div>
                <button className="cursor-pointer" onClick={() => openLink('newtab', article)}>
                    GUARDIAN
                </button>
                <button className="cursor-pointer" onClick={() => copyLink(article)}>
                    COPY
                </button>
                <button className="cursor-pointer" onClick={() => openLink('facebook', article)}>
                    FACEBOOK
                </button>
                <button className="cursor-pointer" onClick={() => openLink('twitter', article)}>
                    TWITTER
                </button>
                <button className="cursor-pointer" onClick={() => openLink('bluesky', article)}>
                    BLUESKY
                </button>
                <button className="cursor-pointer" onClick={() => openLink('snapchat', article)}>
                    SNAPCHAT
                </button>
                <button className="cursor-pointer" onClick={() => openLink('pinterest', article)}>
                    PINTEREST
                </button>
                {/* <FaExternalLinkAlt
                    size={20}
                    className={'cursor-cursor-pointer'}
                    onClick={() => {
                        openLink('newtab', article);
                    }}
                ></FaExternalLinkAlt> */}
            </Stack>
        </>
    );
};

export default StackSocialMedia;
