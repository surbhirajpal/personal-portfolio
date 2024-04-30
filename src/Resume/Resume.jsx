import { useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import ResumeFile from './resume.pdf';

import './Resume.less';

const Resume = () => {

    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    });

    return (
        <section className='resume padding-stripe'>
            <div className='container'>
                <Document file={ResumeFile}>
                    <Page pageNumber={1} />
                    <Page pageNumber={2} />
                </Document>
            </div>
        </section>
    );
}

export default Resume;
