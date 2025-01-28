/** @format */

import { useContext } from 'react';
import './Stats.scss';
import { AppInfoContext } from '@app/contexts/appInfoContext';

export default function Stats() {
    const { contextAppInfo } = useContext(AppInfoContext);

    return (
        <section className="YearStats_yearstats__bwg04 " data-aos="fade-up">
            <div className="wrapper">
                <div className="YearStats_label__KEF4V">
                    За три года сервисом {contextAppInfo.project.fullName} воспользовались
                </div>
                <div className="YearStats_text__aN1lH">
                    <span>500+</span>
                    компаний и &nbsp;обменок
                </div>
            </div>
        </section>
    );
}
