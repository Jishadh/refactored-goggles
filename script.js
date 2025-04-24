function generateResume() {
    document.getElementById('previewName').innerText = document.getElementById('name').value || "Your Name";
    document.getElementById('previewEmail').innerText = document.getElementById('email').value;
    document.getElementById('previewPhone').innerText = document.getElementById('phone').value;
    document.getElementById('previewSkills').innerText = document.getElementById('skills').value;
    document.getElementById('previewExperience').innerText = document.getElementById('experience').value;
}

function downloadPDF() {
    const element = document.querySelector('.resume-preview');

    // Inline important styles for PDF
    const styledHTML = `
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #252525;
                    color: white;
                    padding: 20px;
                }
                h2, h3 {
                    color: #4CAF50;
                }
                p, span, strong {
                    font-size: 14px;
                    line-height: 1.6;
                }
                .resume-preview {
                    background-color: #252525;
                    padding: 20px;
                    border-radius: 10px;
                }
            </style>
        </head>
        <body>
            ${element.innerHTML}
        </body>
        </html>
    `;

    // Create a temporary iframe to render styled content
    const iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    iframe.style.display = 'none';
    const doc = iframe.contentWindow.document;

    doc.open();
    doc.write(styledHTML);
    doc.close();

    iframe.onload = function () {
        html2pdf().from(iframe.contentDocument.body).save('Resume.pdf');
        document.body.removeChild(iframe); // Clean up
    };
}
