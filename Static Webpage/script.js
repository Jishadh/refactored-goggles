function generateResume() {
    document.getElementById('previewName').innerText = document.getElementById('name').value || "Your Name";
    document.getElementById('previewEmail').innerText = document.getElementById('email').value;
    document.getElementById('previewPhone').innerText = document.getElementById('phone').value;
    document.getElementById('previewSkills').innerText = document.getElementById('skills').value;
    document.getElementById('previewExperience').innerText = document.getElementById('experience').value;
}

function downloadPDF() {
    const element = document.querySelector('.resume-preview');
    html2pdf().from(element).save('Resume.pdf');
}
