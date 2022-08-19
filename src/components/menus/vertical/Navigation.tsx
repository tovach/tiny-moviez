import {FC} from 'react';

import {NavigationLink} from "@types";

type NavigationProps = NavigationLink & {
    heading: string;

}

export const Navigation: FC<NavigationProps> = () => (
    <div>
        navigation
    </div>
);
