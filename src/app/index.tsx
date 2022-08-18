import {FC} from 'react';
import {Route, Routes} from "react-router-dom";

import {Layout} from "@layout";
import {Home, Movie} from "@pages";

import '@app/styles/index.css';

type AppProps = {}

export const App: FC<AppProps> = () => (
    <Routes>
        <Route element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/movie' element={<Movie/>}/>
            <Route path='/movie/:id' element={<Movie/>}/>
        </Route>
    </Routes>
);
