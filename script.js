 // Occupation selection
        let currentOccupation = null;
        
        function selectOccupation(occupation) {
            currentOccupation = occupation;
            document.getElementById('occupationModal').style.display = 'none';
            updateTheme();
        }
        
        function toggleOccupation() {
            if (!currentOccupation) {
                selectOccupation('web');
                return;
            }
            currentOccupation = currentOccupation === 'web' ? 'game' : 'web';
            updateTheme();
        }
        
        function updateTheme() {
            const body = document.body;
            const icon = document.getElementById('occupationIcon');
            const title = document.getElementById('occupationTitle');
            const description = document.getElementById('dynamicDescription');
            
            if (currentOccupation === 'web') {
                body.className = 'web-theme';
                icon.className = 'fas fa-code';
                
                document.getElementById('webSkills').classList.remove('hidden');
                document.getElementById('gameSkills').classList.add('hidden');
                
                document.getElementById('webProjects').classList.remove('hidden');
                document.getElementById('gameProjects').classList.add('hidden');
                
                // Update job titles for web developer
                const carousel = document.querySelector('.text-carousel');
                carousel.innerHTML = `
                    <span>Frontend Developer</span>
                    <span>UI/UX Designer</span>
                    <span>Creative Coder</span>
                    <span>Digital Artist</span>
                `;
                
                // Update description
                description.textContent = "As a frontend developer, I specialize in crafting beautiful, responsive web applications using modern technologies like React, Vue.js, and Tailwind CSS. My focus is on creating intuitive user experiences with clean, maintainable code.";
            } else {
                body.className = 'game-theme';
                icon.className = 'fas fa-gamepad';
                
                document.getElementById('webSkills').classList.add('hidden');
                document.getElementById('gameSkills').classList.remove('hidden');
                
                document.getElementById('webProjects').classList.add('hidden');
                document.getElementById('gameProjects').classList.remove('hidden');
                
                // Update job titles for game developer
                const carousel = document.querySelector('.text-carousel');
                carousel.innerHTML = `
                    <span>Game Developer</span>
                    <span>3D Artist</span>
                    <span>Game Designer</span>
                    <span>VR Developer</span>
                `;
                
                // Update description
                description.textContent = "As a game developer, I create immersive gaming experiences using Unity and C#. My passion lies in developing engaging gameplay mechanics, realistic physics, and stunning visual effects that captivate players and bring virtual worlds to life.";
            }
        }
		
		// Hover effects
        const hoverElements = document.querySelectorAll('a, button, .btn-magnetic, .project-card, .skill-item, .occupation-option');
        
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(2)';
                cursor.style.opacity = '0.5';
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.opacity = '1';
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
        
        // Custom cursor
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });
        
        document.querySelectorAll('a, button, input, .glass-tab, .skill-item, .project-card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(2)';
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
        
        // Scroll animations
        const glassTabs = document.querySelectorAll('.glass-tab');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        glassTabs.forEach(tab => {
            tab.style.opacity = 0;
            tab.style.transform = 'translateY(20px)';
            tab.style.transition = 'all 0.6s ease-out';
            observer.observe(tab);
        });
        
        // Form submission
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
        
        // Mobile menu toggle
        function toggleMobileMenu() {
            document.querySelector('.mobile-nav').classList.toggle('active');
        }
        
        // Initialize with modal visible
        document.addEventListener('DOMContentLoaded', function() {
            // Show modal until user selects an occupation
            document.getElementById('occupationModal').style.display = 'flex';
            
            // Close modal when clicking outside
            document.getElementById('occupationModal').addEventListener('click', function(e) {
                if (e.target === this) {
                    if (!currentOccupation) {
                        selectOccupation('web'); // Default to web if clicked outside
                    }
                }
            });
        });