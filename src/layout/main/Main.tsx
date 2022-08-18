import {FC} from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "@layout";

type MainProps = {}

export const Main: FC<MainProps> = () => (
    <div>
        <Header/>
        <Outlet/>
    </div>
);
