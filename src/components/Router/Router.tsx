import React, { FC } from 'react';
import styles from './Router.module.scss';
import Store from '../../pages/Store/Store';
import About from '../../pages/About/About';
import Home from '../../pages/Home/Home';
import { Route, Routes} from 'react-router-dom';

interface RouterProps {

}

const Router: FC<RouterProps> = () => (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/store" element={<Store />}/>
        <Route path="/about" element={<About />}/>
    </Routes>
);

export default Router;
