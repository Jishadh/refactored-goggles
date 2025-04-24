function generateResume() {
    document.getElementById('previewName').innerText = document.getElementById('name').value || "Your Name";
    document.getElementById('previewEmail').innerText = document.getElementById('email').value;
    document.getElementById('previewPhone').innerText = document.getElementById('phone').value;
    document.getElementById('previewSkills').innerText = document.getElementById('skills').value;
    document.getElementById('previewExperience').innerText = document.getElementById('experience').value;
}

function downloadPDF() {
    const element = document.querySelector('.resume-preview');

    // Clone resume preview content
    const cloned = element.cloneNode(true);

    // Apply inline styles to ensure full styling carries into the PDF
    Object.assign(cloned.style, {
        backgroundColor: "#252525", // Dark background for PDF
        color: "#ffffff",           // White text color
        padding: "20px",
        margin: "0",
        width: "100%",
        borderRadius: "10px",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
        minHeight: "100%", // ensures background stretches
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between" // helps to keep content properly spaced
    });

    // Wrap the clone in a new container
    const wrapper = document.createElement('div');
    Object.assign(wrapper.style, {
        backgroundColor: "#252525", // Same dark background as the resume preview
        padding: "30px",
        width: "100%",
        minHeight: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column", // Keeps content inside wrapper in a column
        justifyContent: "center", // Centers the content within the wrapper
    });

    wrapper.appendChild(cloned);

    // PDF options
    const opt = {
        margin:       0,
        filename:     'Resume.pdf',
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  {
            scale: 2,
            useCORS: true,
            backgroundColor: "#252525", // Ensures background color is applied
        },
        jsPDF: {
            unit: 'in',
            format: 'a4',
            orientation: 'portrait'
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    // Generate and download the PDF
    html2pdf().set(opt).from(wrapper).save();
}

