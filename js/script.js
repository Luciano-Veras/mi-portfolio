document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar iconos
    lucide.createIcons();

    // 2. Cargar datos desde portfolioData (data.js)
    loadProfileData();
    loadExperienceData();
    loadSkillsData();
    loadCertificatesData();
    loadProjectsData();

    // 3. Configurar animaciones al hacer scroll
    setupScrollAnimations();

    // 4. Configurar año actual en el footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // 5. Configurar Modal de Certificados
    setupModal();
});

function loadProfileData() {
    const p = portfolioData.profile;
    document.getElementById('hero-name').textContent = p.name;
    document.getElementById('hero-headline').textContent = p.headline;
    
    const emailEl = document.getElementById('contact-email');
    emailEl.textContent = p.contact.email;
    emailEl.href = `mailto:${p.contact.email}`;

    const phoneEl = document.getElementById('contact-phone');
    phoneEl.textContent = p.contact.phone;
    // Remove non-digit characters for WhatsApp link
    const cleanPhone = p.contact.phone.replace(/\D/g, '');
    phoneEl.href = `https://wa.me/${cleanPhone}`;

    if (p.contact.linkedin) {
        document.getElementById('contact-linkedin-container').style.display = 'flex';
        document.getElementById('contact-linkedin').href = p.contact.linkedin;
    }
    
    if (p.contact.github) {
        document.getElementById('contact-github-container').style.display = 'flex';
        document.getElementById('contact-github').href = p.contact.github;
    }

    document.getElementById('contact-location').textContent = p.contact.location;
    
    document.getElementById('about-text').innerHTML = p.about.replace(/\n/g, '<br>');
    document.getElementById('about-dev').innerHTML = p.development.replace(/\n/g, '<br>');
    document.getElementById('about-mission').innerHTML = p.mission.replace(/\n/g, '<br>');

    // Poblar PDF
    document.getElementById('pdf-name').textContent = p.name;
    document.getElementById('pdf-role').textContent = p.headline;
    document.getElementById('pdf-email').textContent = p.contact.email;
    document.getElementById('pdf-phone').textContent = p.contact.phone;
    document.getElementById('pdf-location').textContent = p.contact.location;
    document.getElementById('pdf-about').textContent = p.about + " " + p.mission;
}

function loadExperienceData() {
    const container = document.getElementById('experience-container');
    const exp = portfolioData.experience;
    
    exp.forEach((job) => {
        const achievementsHtml = job.achievements.map(a => `<li>${a}</li>`).join('');
        
        const html = `
            <div class="timeline-item">
                <div class="timeline-content glass-card fade-in">
                    <h3>${job.role}</h3>
                    <div class="company">${job.company}</div>
                    <span class="date">${job.dates}</span>
                    <ul>
                        ${achievementsHtml}
                    </ul>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
        
        // Poblar Experiencia PDF
        const pdfHtml = `
            <div class="pdf-exp-item">
                <h4>${job.role} - ${job.company}</h4>
                <div class="pdf-date">${job.dates}</div>
                <ul>${achievementsHtml}</ul>
            </div>
        `;
        document.getElementById('pdf-experience').insertAdjacentHTML('beforeend', pdfHtml);
    });
}

function loadSkillsData() {
    const mgmt = portfolioData.skills.management;
    const dev = portfolioData.skills.dataAndDev;
    
    const mgmtContainer = document.getElementById('skills-management');
    mgmt.forEach(skill => {
        mgmtContainer.insertAdjacentHTML('beforeend', `<li><span class="skill-tag">${skill}</span></li>`);
    });
    
    const devContainer = document.getElementById('skills-dev');
    dev.forEach(skill => {
        devContainer.insertAdjacentHTML('beforeend', `<li><span class="skill-tag">${skill}</span></li>`);
    });
    
    // Educación formal
    document.getElementById('education-text').innerHTML = portfolioData.education.join('<br>');

    // Poblar Skills PDF
    const pdfSkillsContainer = document.getElementById('pdf-skills');
    mgmt.forEach(skill => pdfSkillsContainer.insertAdjacentHTML('beforeend', `<span class="pdf-skill-tag">${skill}</span>`));
    dev.forEach(skill => pdfSkillsContainer.insertAdjacentHTML('beforeend', `<span class="pdf-skill-tag">${skill}</span>`));
    
    // Poblar Educación PDF
    document.getElementById('pdf-education').innerHTML = portfolioData.education.join('<br><br>');
}

function loadCertificatesData() {
    const container = document.getElementById('certificates-grid');
    const certs = portfolioData.certificates;
    
    certs.forEach(cert => {
        const html = `
            <div class="certificate-card glass-card fade-in" onclick="openModal('${cert.image}')">
                <img src="${cert.image}" alt="${cert.name}" class="certificate-image">
                <div class="certificate-info">
                    <h4 style="font-weight: 600;">${cert.name}</h4>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });
}

function loadProjectsData() {
    const container = document.getElementById('projects-container');
    const projects = portfolioData.projects;
    const noProjectsMsg = document.getElementById('no-projects-message');
    
    if (!projects || projects.length === 0) {
        noProjectsMsg.style.display = 'block';
        return;
    }
    
    projects.forEach(project => {
        const techHtml = project.techStack.map(tech => `<span>${tech}</span>`).join('');
        
        const html = `
            <div class="project-card glass-card fade-in">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.description}</p>
                    <div class="project-tech">
                        ${techHtml}
                    </div>
                    <div class="project-links">
                        <a href="${project.link}" target="_blank" rel="noopener noreferrer">
                            <i data-lucide="external-link" style="width:16px; height:16px;"></i> Visitar
                        </a>
                        <a href="${project.repo}" target="_blank" rel="noopener noreferrer">
                            <i data-lucide="github" style="width:16px; height:16px;"></i> Código
                        </a>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });
}

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
}

// Lógica del Modal para visualizar certificados a pantalla completa
function setupModal() {
    const html = `
        <div id="image-modal" class="modal">
            <span class="close-modal" onclick="closeModal()">&times;</span>
            <img class="modal-content" id="modal-image">
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
    
    // Cerrar modal al hacer clic afuera de la imagen
    const modal = document.getElementById('image-modal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Cerrar con la tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
}

window.openModal = function(imageSrc) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    modal.style.display = 'flex';
    modalImg.src = imageSrc;
    document.body.style.overflow = 'hidden'; // Detener el scroll del body
}

window.closeModal = function() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Reanudar el scroll
}

// Lógica para descargar PDF
window.downloadPDF = function() {
    // Usamos html2pdf para generar un archivo estético a partir de nuestra plantilla
    const element = document.getElementById('cv-export-template');
    
    // Configuraciones de alta calidad
    const opt = {
        margin:       0,
        filename:     'CV_Luciano_Veras.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}

// Lógica para descargar Word
window.downloadWord = function() {
    // Clonamos el cuerpo principal
    const clone = document.createElement('div');
    
    // Perfil
    const p = portfolioData.profile;
    let htmlContent = `
        <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
        <head><meta charset='utf-8'><title>CV Luciano Veras</title></head>
        <body style="font-family: Arial, sans-serif;">
            <h1 style="text-align:center;">${p.name}</h1>
            <h2 style="text-align:center; color:#555;">${p.headline}</h2>
            <p style="text-align:center;">
                ${p.contact.email} | ${p.contact.phone} | ${p.contact.location}
            </p>
            <hr>
            
            <h3>Sobre Mí</h3>
            <p><strong>Perfil:</strong> ${p.about}</p>
            <p><strong>Desarrollo:</strong> ${p.development}</p>
            <p><strong>Misión:</strong> ${p.mission}</p>
            
            <h3>Experiencia Laboral</h3>
    `;
    
    // Experiencia
    portfolioData.experience.forEach(job => {
        htmlContent += `
            <div style="margin-bottom:15px;">
                <h4 style="margin:0;">${job.role} - ${job.company}</h4>
                <p style="margin:5px 0; color:#555;">${job.dates}</p>
                <ul>
                    ${job.achievements.map(a => `<li>${a}</li>`).join('')}
                </ul>
            </div>
        `;
    });
    
    // Educación (Stack tecnológico va antes de proyectos/certificados pero Word los junta)
    htmlContent += `
        <h3>Educación Formal</h3>
        <p>${portfolioData.education.join('<br>')}</p>
        
        <h3>Stack Tecnológico</h3>
        <p><strong>Gestión y ERP:</strong> ${portfolioData.skills.management.join(', ')}</p>
        <p><strong>Datos y Desarrollo:</strong> ${portfolioData.skills.dataAndDev.join(', ')}</p>
        </body></html>
    `;
    
    // Crear Blob y forzar descarga
    const blob = new Blob(['\\ufeff', htmlContent], {
        type: 'application/msword'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV_Luciano_Veras.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
