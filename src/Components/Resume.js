import React, {useState, useEffect} from 'react';
import {BsDownload} from "react-icons/bs";
import pdf from "../assets/resume2.pdf";
import {Document, Page, pdfjs} from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import './Resume.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
    const [wid, setWid] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWid(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize); // cleanup
    }, []);

    return (
        <div className='ResumePage'>
            <div className='resumeHeader'>
                <h1 style={{
                    paddingBottom: '50px',
                }}>My <b>Resume</b></h1>
                <h2>이력서를 다운로드할 수 있습니다.</h2>
            </div>

            <a href={pdf} download="Resume.pdf">
                <button className='downloadCV' type='button'>
                    <h3><BsDownload/>&nbsp; Download</h3>
                </button>
            </a>
        </div>
    );
};

export default Resume;