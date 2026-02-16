const slices = document.querySelectorAll('.slice');

slices.forEach((slice) => {
    slice.addEventListener("click", () => {
        slices.forEach(s => s.classList.remove('active'));

        slice.classList.add("active");
    });
});