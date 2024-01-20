import React from 'react';
import "./pdf_downloader.css"
const PdfDownloader = (props) => {
    // Sample data - replace with your actual data
    const accordionData = [
        {
            id: 1,
            title: 'JEE CORNER (MATHEMATICS)',
            pdfs: [
                { name: 'Arihant Algebra', pdfPath: '/assets/Arihant algebra .pdf', imagePath: '/assets/arihant_maths_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/pwUSpwuuuN' },
                { name: 'Arihant Trignometry', pdfPath: '/assets/Arihant Trigonometry.pdf', imagePath: '/assets/arihant_maths_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/pwUSpwuuuN' },
                { name: 'Arihant Coordinate Geometry ', pdfPath: '/assets/Arihant Coordinate Geometry.pdf', imagePath: '/assets/arihant_maths_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/pwUSpwuuuN' },
                { name: 'Arihant Differential Calculus', pdfPath: '/assets/arihant differential calculus.pdf', imagePath: '/assets/arihant_maths_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/pwUSpwuuuN' },
                { name: 'Arihant Integral Calculus', pdfPath: '/assets/Arihant Integral Calculus.pdf', imagePath: '/assets/arihant_maths_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/pwUSpwuuuN' },
                { name: 'Arihant Vector & 3D', pdfPath: '/assets/arihant vector & 3d.pdf', imagePath: '/assets/arihant_maths_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/pwUSpwuuuN' },

                { name: 'Cengage Trignometry', pdfPath: '/assets/_Cengage Trigonmetry .pdf', imagePath: '/assets/cengage_maths_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/3BMmzyNNNN' },
                { name: 'Cengage Algebra', pdfPath: '/assets/Algebra Cengage.pdf', imagePath: '/assets/cengage_maths_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/3BMmzyNNNN' },
                { name: 'Cengage Coordinate Geometry', pdfPath: '/assets/cengage coordinate geo.pdf', imagePath: '/assets/cengage_maths_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/3BMmzyNNNN' },
            ],
        },
        {
            id: 2,
            title: 'JEE CORNER (PHYSICS)',
            pdfs: [
                { name: 'Cengage Mechanics 1', pdfPath: '/assets/Cengage MECHANICS 1.pdf', imagePath: '/assets/cengane_physics_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/siqHywuuuN' },
                { name: 'Cengage Mechanics 2', pdfPath: '/assets/Cengage Mechanics 2.pdf', imagePath: '/assets/cengane_physics_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/siqHywuuuN' },
                { name: 'Cengage waves and Thermodynamics', pdfPath: '/assets/Cengage Waves and Thermodynamics.pdf', imagePath: '/assets/cengane_physics_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/siqHywuuuN' },
                { name: 'Cengage Electrostatics & Current Electricity ', pdfPath: '/assets/Cengage Electrostatics & Current Electricity.pdf', imagePath: '/assets/cengane_physics_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/siqHywuuuN' },
                { name: 'Cengage Magnetism & EMI', pdfPath: '/assets/Cengage Magnetism & EMI.pdf', imagePath: '/assets/cengane_physics_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/siqHywuuuN' },
                { name: 'Cengage Optics and Modern Physics', pdfPath: '/assets/Cengage. Optics and Modern Physics. Modern Physics.pdf', imagePath: '/assets/cengane_physics_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/siqHywuuuN' },

                { name: 'ErrorLess Physics', pdfPath: '/assets/ErrorLess_physics.pdf', imagePath: '/assets/errorless_physics_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/sRhs2auuuN' },

                { name: 'DC Pandey Mechanics 1', pdfPath: '/assets/dc pandey mechanics1.pdf', imagePath: '/assets/dc_physics_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/bhAT6YNNNN' },
                { name: 'DC Pandey Mechanics 2', pdfPath: '/assets/dc pandey mechanics2.pdf', imagePath: '/assets/dc_physics_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/bhAT6YNNNN' },
                { name: 'DC Pandey Waves & Thermodynamics', pdfPath: '/assets/dc pandey waves and thermodynamics.pdf', imagePath: '/assets/dc_physics_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/bhAT6YNNNN' },
                { name: 'DC Pandey Electricity & Magnetism ', pdfPath: '/assets/dc pandey electricity and magnetism.pdf', imagePath: '/assets/dc_physics_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/bhAT6YNNNN' },
                { name: 'DC Pandey Optics & Modern Physics ', pdfPath: '/assets/dc pandey optics and modern physics.pdf', imagePath: '/assets/dc_physics_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/bhAT6YNNNN' },

                { name: 'Physics Galaxy Mechanics', pdfPath: '/assets/dc pandey optics and modern physics.pdf', imagePath: '/assets/galaxy_physics_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/bVtRr9NNNN' },
                { name: 'Physics Galaxy Thermo-D', pdfPath: '/assets/dc pandey optics and modern physics.pdf', imagePath: '/assets/galaxy_physics_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/bVtRr9NNNN' },
                { name: 'Physics Galaxy Electrostatics & Current', pdfPath: '/assets/dc pandey optics and modern physics.pdf', imagePath: '/assets/galaxy_physics_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/bVtRr9NNNN' },
                { name: 'Physics Galaxay Magnetism & AC ', pdfPath: '/assets/dc pandey optics and modern physics.pdf', imagePath: '/assets/galaxy_physics_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/bVtRr9NNNN' },
                { name: 'Physics Galaxy Optics & Modern Physics', pdfPath: '/assets/dc pandey optics and modern physics.pdf', imagePath: '/assets/galaxy_physics_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/bVtRr9NNNN' },
            ],
        },
        {
            id: 3,
            title: 'JEE CORNER (CHEMISTRY)',
            pdfs: [
                { name: 'GRB Physical Chemistry', pdfPath: '/assets/GRB Physical Chemistry IIT JEE.pdf', imagePath: '/assets/grb_physical_chem.jpg', buyNowLink: 'https://dl.flipkart.com/s/bBEvmpNNNN' },
                { name: 'Physical Chemistry By N.Awasthi', pdfPath: '/assets/physical_chem_N awasthi.pdf', imagePath: '/assets/N_awasthi_chem_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/swJ_wtuuuN' },
                { name: 'Physical Chemistry By Neeraj Kumar', pdfPath: '/assets/physical_chem_neeraj_kumar.pdf', imagePath: '/assets/neeraj_kumar_physical_chem_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/bBYFEqNNNN' },

                { name: 'GRB Organic Chemistry', pdfPath: '/assets/grb_organic.pdf', imagePath: '/assets/grb organic.jpg', buyNowLink: 'https://dl.flipkart.com/s/bNqs4yNNNN' },
                { name: 'Organic Chemistry By MS Chauhan', pdfPath: '/assets/organic_ms_chauhan.pdf', imagePath: '/assets/ms_chauhan_org_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/suBG01uuuN' },
                { name: 'Organic Chemistry By Himanshu Pandey', pdfPath: '/assets/organic_himanshu_pandey.pdf', imagePath: '/assets/himanshu_pandey_organic_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/suhEKJuuuN' },

                { name: 'GRB Inorganic Chemistry', pdfPath: '/assets/grb_inorganic.pdf', imagePath: '/assets/grb_inorganic_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/pNUnMtuuuN' },
                { name: 'Inorganic Chemistry By V.K Jaiswal(Part 1)', pdfPath: '/assets/inorganic_vk_p1.pdf', imagePath: '/assets/vk_jaiswal-img.jpg', buyNowLink: 'https://dl.flipkart.com/s/3u6W8XNNNN' },
                { name: 'Inorganic Chemistry By V.K Jaiswal(part2)', pdfPath: '/assets/inorganic_vk_p2.pdf', imagePath: '/assets/vk_jaiswal-img.jpg', buyNowLink: 'https://dl.flipkart.com/s/3u6W8XNNNN' },
                { name: 'Inorganic Chemistry By J.D Lee', pdfPath: '/assets/inorganic_jd_lee.pdf', imagePath: '/assets/jd_lee_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/pNTU01uuuN' },
                { name: 'Inorganic Chemistry by Navneesh Bansal', pdfPath: '/assets/inorganic_naaneesh_bansal.pdf', imagePath: '/assets/navneesh_bansal_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/pNGLwkuuuN' },
            ],
        },
        {
            id: 4,
            title: 'NEET CORNER',
            pdfs: [
                { name: 'Arihant solved chapterwise (physics)', pdfPath: '/assets/Arihant NEET 34 Years Physics Chapterwise.pdf', imagePath: '/assets/arihant34 neet_img.png', buyNowLink: 'https://dl.flipkart.com/s/KSW1wwuuuN' },
                { name: 'Arihant solved chapterwise (chemistry)', pdfPath: '/assets/Arihant 34 Yrs NEET Chemistry Chapterwise.pdf', imagePath: '/assets/arihant34 neet_img.png', buyNowLink: 'https://dl.flipkart.com/s/KSW1wwuuuN' },
                { name: 'Arihant solved chapterwise (Biology)', pdfPath: '/assets/Arihant 34 Yrs NEET Biology Chapterwise.pdf', imagePath: '/assets/arihant34 neet_img.png', buyNowLink: 'https://dl.flipkart.com/s/KSW1wwuuuN' },
            ],
        },
        {
            id: 5,
            title: 'PRACTICE CORNER (JEE)',
            pdfs: [
                { name: 'Chapterwise Practice (physics)', pdfPath: '/assets/750 Blockbuster physics.pdf', imagePath: '/assets/750 physics_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/KUkZ4iuuuN' },
                { name: 'Chapterwise Practice (chemistry)', pdfPath: '/assets/750 Blockbuster chem.pdf', imagePath: '/assets/750 chem_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/KUkZ4iuuuN' },
                { name: 'Chapterwise Practice (Mathematics)', pdfPath: '/assets/750 Blockbuster maths.pdf', imagePath: '/assets/750 maths_img.jpg', buyNowLink: 'https://dl.flipkart.com/s/KUkZ4iuuuN' },
            ],
        },
        // Add more accordion items as needed
    ];

    const handleDownload = (pdfPath, pdfName) => {
        // Create an anchor element to trigger the download
        const anchor = document.createElement('a');
        anchor.href = pdfPath;
        anchor.download = `${pdfName}.pdf`;
        anchor.click();
    };

    return (
        <>
        <h1 className={`d-flex align-items-center justify-content-center text-center let_dive`}>
  Let's have a dive in the ocean of knowledge
</h1>

        <div className={`container mt-4  accordion_container ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
            <h2 className='accordion_title'>Explore Here :</h2>
            <div className="accordion mx-auto mb-4" id="accordionExample">
                {accordionData.map((accordionItem) => (
                    <div className={`accordion-item ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`} key={accordionItem.id}>
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${accordionItem.id}`} aria-expanded="true" aria-controls={`collapse${accordionItem.id}`}>
                                {accordionItem.title}
                            </button>
                        </h2>
                        <div id={`collapse${accordionItem.id}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {accordionItem.pdfs.map((pdf) => (
                                    <div key={pdf.name} className="row mb-3">
                                        <div className="col-md-6">
                                            {/* Preview Image */}
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <img src={pdf.imagePath} alt={`Preview`} className="img-fluid" />
                                                </div>
                                                <div className="col-md-10">
                                                    {/* PDF Name */}
                                                    <div className="pdf-names">{pdf.name}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            {/* Options: Download and Buy Now */}
                                            <div className="d-flex justify-content-between">
                                                <button
                                                    className="btn btn-primary mt-2"
                                                    onClick={() => handleDownload(pdf.pdfPath, pdf.name)}
                                                >
                                                    Download
                                                </button>
                                                <a
                                                    className="btn btn-success mt-2"
                                                    href={pdf.buyNowLink}  // Use the Buy Now link from the pdfs array
                                                    target="_blank"  // Opens the link in a new tab/window
                                                    rel="noopener noreferrer"  // Recommended for security
                                                >
                                                    Buy Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
        
    );
};

export default PdfDownloader;