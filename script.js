function generateResume() {
    document.getElementById('previewName').innerText = document.getElementById('name').value || "Your Name";
    document.getElementById('previewEmail').innerText = document.getElementById('email').value;
    document.getElementById('previewPhone').innerText = document.getElementById('phone').value;
    document.getElementById('previewSkills').innerText = document.getElementById('skills').value;
    document.getElementById('previewExperience').innerText = document.getElementById('experience').value;
}

function downloadPDF() {
    const element = document.querySelector('.resume-preview');

    // Clone and apply full inline styling
    const cloned = element.cloneNode(true);
    cloned.style.backgroundColor = "#252525";
    cloned.style.color = "white";
    cloned.style.padding = "20px 20px 40px 20px"; // top, right, bottom, left
    cloned.style.borderRadius = "10px";
    cloned.style.width = "100%";
    cloned.style.boxSizing = "border-box";
    cloned.style.fontFamily = "Arial, sans-serif";

    // Container to wrap the styled resume
    const container = document.createElement('div');
    container.style.backgroundColor = "#252525";
    container.style.padding = "20px 20px 40px 20px"; // top, right, bottom, left
    container.style.color = "white";
    container.style.width = "100%";
    container.style.fontFamily = "Arial, sans-serif";
    container.appendChild(cloned);

    const opt = {
        margin:       0.5,
        filename:     'Resume.pdf',
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  {
            scale: 2,
            useCORS: true,
            backgroundColor: "#252525", // consistent dark bg
            allowTaint: true
        },
        jsPDF:        {
            unit: 'in',
            format: 'a4',
            orientation: 'portrait'
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] } // avoid awkward breaks
    };

    html2pdf().set(opt).from(container).save();
}

