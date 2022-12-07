import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import HeaderSSection from '../../components/ProjectInfo/HeaderSSection';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function InfoProjectPage() {
    const params = useParams();
    const [projectInfo, setProjectInfo] = useState({});
    useEffect(() => {
        axios
            .get(`http://localhost:5000/sample-design/${params.projectId}`)
            .then((reponse) => setProjectInfo(reponse.data));
    }, []);

    const child = [
        {
            path: '/',
            content: 'Trang chủ',
        },
        {
            path: '/',
            content: 'Tổng quát thiết kế',
        },
        {
            path: '',
            content: 'Photo - Wayfair modern white kitchen - derbala villa',
        },
    ];

    return (
        <div>
            <Header></Header>
            <Breadcrumb child={child}></Breadcrumb>
            {projectInfo ? <HeaderSSection product={projectInfo}></HeaderSSection> : <p>Loading</p>}
            <Footer></Footer>
        </div>
    );
}

export default InfoProjectPage;
