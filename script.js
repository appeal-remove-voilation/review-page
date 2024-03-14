document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loader-overlay').style.display = 'flex';

    // Hide the loader overlay after 3 seconds
    setTimeout(function () {
        document.getElementById('loader-overlay').style.display = 'none';
    }, 3000); // 3000 milliseconds = 3 seconds
});
