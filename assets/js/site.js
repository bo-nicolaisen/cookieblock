document.addEventListener('DOMContentLoaded', () => {
    const acceptButton = document.getElementById('accept');
    const noButton = document.getElementById('no');
    const blockerSection = document.querySelector('.blocker');

    acceptButton.addEventListener('click', () => {
        const allChecked = document.querySelector('input[name="all"]').checked;
        const commercialChecked = document.querySelector('input[name="commercial"]').checked;
        const neededChecked = document.querySelector('input[name="needed"]').checked;

        if (!allChecked && !commercialChecked && !neededChecked) {
            alert('Please make a choice.');
            return;
        }

        console.log(`All: ${allChecked}, Commercial: ${commercialChecked}, Needed: ${neededChecked}`);
        blockerSection.classList.add('hidden'); // Hide the blocker section
    });

    noButton.addEventListener('click', () => {
        window.location.href = 'https://da.wikipedia.org/wiki/Cookie_Monster#:~:text=Cookie%20Monster%20er%20en%20fiktiv,med%20munden%20fuld%20af%20mad).';
    });
});


