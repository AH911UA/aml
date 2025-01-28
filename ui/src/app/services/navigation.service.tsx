/** @format */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@app/components/pages/home/Home';
import Admin from '@app/components/pages/admin/Admin';
import Risks from '@app/components/pages/risks/Risks';
import Modal from '@app/components/common/modal/Modal';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/risks" element={<Risks />} />

                <Route path="/admin/:id" element={<Admin />} />
            </Routes>

            <Modal />
        </BrowserRouter>
    );
}
