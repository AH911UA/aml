/** @format */

import { useContext } from 'react';
import './Loader.scss';
import { LoaderContext } from '@app/contexts/loaderContext';

export default function Loader() {
    const { contextLoader } = useContext(LoaderContext);

    return (
        <div className={`loader ${contextLoader.show ? 'open' : ''}`}>
            <div className="loader_block">
                {[...Array(6)].map((dot, i) => (
                    <div key={`loader dot #${i}`}></div>
                ))}
            </div>
        </div>
    );
}
