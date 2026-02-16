const slices = document.querySelectorAll('#about .image');

slices.forEach((slice) => {
    slice.addEventListener("click", () => {
        slices.forEach(s => s.classList.remove('active'));

        slice.classList.add("active");
    });
});