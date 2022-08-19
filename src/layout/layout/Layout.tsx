import {FC} from 'react';

import {Left, Main, Right} from "@layout";


export const Layout: FC = () => (
    <div className='bg-bg1 text-primary'>
        <div className='relative container min-h-screen m-auto grid grid-cols-[250px_minmax(320px,_1fr)_350px]'>
            <div className='bg-bg2'>
                <div className='sticky top-0'>
                    <Left/>
                </div>
            </div>
            <Main/>
            <div className='bg-bg2'>
                <div className='sticky top-0'>
                    <Right/>
                </div>
            </div>
        </div>
    </div>
);
