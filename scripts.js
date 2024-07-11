document.addEventListener('DOMContentLoaded', function() {
    // การทำงานสำหรับปุ่ม back to top
    var backToTopButton = document.getElementById('back-to-top');

    // เมื่อผู้ใช้เลื่อนหน้าจอลง 20px จากด้านบน ปุ่มจะปรากฏ
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // เมื่อผู้ใช้คลิกปุ่ม จะเลื่อนกลับไปด้านบนของหน้า
    backToTopButton.addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    // การทำงานสำหรับการเปลี่ยน section
    var navLinks = document.querySelectorAll('nav ul li a');
    var sections = document.querySelectorAll('.content-section');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetSectionId = this.getAttribute('data-section');
            var targetSection = document.getElementById(targetSectionId);

            sections.forEach(function(section) {
                section.classList.remove('active');
            });

            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // แสดง section แรกเริ่มต้น
    if (sections.length > 0) {
        sections[0].classList.add('active');
    }

    // Lightbox functionality
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightbox-image');
    var lightboxVideo = document.getElementById('lightbox-video');
    var closeBtn = document.querySelector('.close');

    document.querySelectorAll('.gallery img').forEach(function(img) {
        img.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImage.style.display = 'block';
            lightboxImage.src = this.src;
            lightboxVideo.style.display = 'none';
        });
    });

    document.querySelectorAll('.video-gallery iframe').forEach(function(iframe) {
        iframe.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxVideo.style.display = 'block';
            lightboxVideo.src = this.src;
            lightboxImage.style.display = 'none';
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
        lightboxVideo.src = '';
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target === closeBtn) {
            lightbox.style.display = 'none';
            lightboxVideo.src = '';
        }
    });
});