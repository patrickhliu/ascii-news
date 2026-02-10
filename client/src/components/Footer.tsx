//import React from 'react';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import { FaXTwitter, FaInstagram, FaSnapchat } from 'react-icons/fa6';
import { LuFacebook } from 'react-icons/lu';
import { TbBrandBluesky, TbBrandTiktok, TbBrandYoutube } from 'react-icons/tb';

const Footer = () => {
    const openLink = (socialMedia: string) => {
        toast.success('TODO: redirect to ' + socialMedia + '...');
    };

    return (
        <footer className="w-full h-full scheme-footer">
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
            />
            <div className="flex items-center justify-center pt-5 cursor-pointer">
                <LuFacebook
                    size={40}
                    className={'mr-5'}
                    onClick={() => {
                        openLink('facebook');
                    }}
                />
                <FaInstagram
                    size={40}
                    className={'mr-5'}
                    onClick={() => {
                        openLink('instagram');
                    }}
                />
                <FaXTwitter
                    size={40}
                    className={'mr-5'}
                    onClick={() => {
                        openLink('twitter');
                    }}
                />
                <TbBrandBluesky
                    size={40}
                    className={'mr-5'}
                    onClick={() => {
                        openLink('bluesky');
                    }}
                />
                <FaSnapchat
                    size={40}
                    className={'mr-5'}
                    onClick={() => {
                        openLink('snapchat');
                    }}
                />
                <TbBrandTiktok
                    size={40}
                    className={'mr-5'}
                    onClick={() => {
                        openLink('tiktok');
                    }}
                />
                <TbBrandYoutube
                    size={40}
                    className={'mr-5'}
                    onClick={() => {
                        openLink('youtube');
                    }}
                />
            </div>
            <p className="text-center text-lg py-3">
                <b>© {new Date().getFullYear()} OC Puppy Polish</b>
            </p>
        </footer>
    );
};

export default Footer;
