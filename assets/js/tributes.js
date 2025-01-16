document.addEventListener('DOMContentLoaded', function () {
    const floatingTab = document.getElementById('floating-tab');
    const tributeFormModal = document.querySelector('.tribute-form-modal');
    const closeModalButton = document.getElementById('close-modal');

    // Show modal on floating tab click
    floatingTab.addEventListener('click', function () {
        tributeFormModal.style.display = 'flex';
    });

    // Close modal on button click
    closeModalButton.addEventListener('click', function () {
        tributeFormModal.style.display = 'none';
    });

    const submitTributeButton = document.getElementById('submit-tribute');
    submitTributeButton.addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const relationship = document.getElementById('relationship').value;
        const tributeMessage = document.getElementById('tribute-message').value;

        if (name && relationship && tributeMessage) {
            const timestamp = Date.now();

            const tribute = {
                name: name,
                relationship: relationship,
                message: tributeMessage,
                timestamp: timestamp,
                profileColor: generateRandomColor()
            };

            const tributes = JSON.parse(localStorage.getItem('tributes')) || [];
            tributes.unshift(tribute);
            localStorage.setItem('tributes', JSON.stringify(tributes));

            addTributeToDisplay(tribute);

            document.getElementById('name').value = '';
            document.getElementById('relationship').value = '';
            document.getElementById('tribute-message').value = '';

            tributeFormModal.style.display = 'none';
        } else {
            alert('Please fill in all fields.');
        }
    });

    function addTributeToDisplay(tribute) {
        const tributesContainer = document.getElementById('tributes-container');

        const tributeCard = document.createElement('div');
        tributeCard.classList.add('tribute-card');

        const cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header');

        const profilePic = document.createElement('div');
        profilePic.classList.add('profile-photo');
        profilePic.style.backgroundColor = tribute.profileColor;

        const initials = tribute.name
            .split(' ')
            .map(word => word.charAt(0).toUpperCase())
            .join('');
        profilePic.textContent = initials;

        const details = document.createElement('div');
        details.classList.add('details');
        details.innerHTML = `
            <div class="name">${tribute.name}</div>
            <div class="relationship">${tribute.relationship}</div>
        `;

        cardHeader.appendChild(profilePic);
        cardHeader.appendChild(details);

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.textContent = tribute.message;  // Allow paragraph breaks

        const cardFooter = document.createElement('div');
        cardFooter.classList.add('card-footer');
        cardFooter.innerHTML = `
            <div class="hashtag">#Celebration_Of_Life</div>
            <div class="timestamp">${formatRelativeTime(tribute.timestamp)}</div>
        `;

        tributeCard.appendChild(cardHeader);
        tributeCard.appendChild(cardBody);
        tributeCard.appendChild(cardFooter);

        tributesContainer.insertBefore(tributeCard, tributesContainer.firstChild);
    }

    function generateRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function formatRelativeTime(timestamp) {
        const now = Date.now();
        const diff = Math.floor((now - timestamp) / 1000);

        if (diff < 60) return `${diff}s ago`;
        if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
        if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
        return `${Math.floor(diff / 86400)}d ago`;
    }

    // Load stored tributes from localStorage and display them
    const storedTributes = JSON.parse(localStorage.getItem('tributes')) || [];
    storedTributes.forEach(addTributeToDisplay);
});
