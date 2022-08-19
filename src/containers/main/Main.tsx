import {FC} from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "@containers";

type MainProps = {}

export const Main: FC<MainProps> = () => (
    <div className='h-[2000px] px-10 border-x-border border-x-2'>
        <div className='sticky top-0'>
            <Header/>
        </div>
        <Outlet/>
    </div>
);
