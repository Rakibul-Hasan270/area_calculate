document.getElementById('btn-calculate').addEventListener('click', function () {
    const base = document.getElementById('base');
    const height = document.getElementById('height');

    const triangleArea = 0.5 * parseFloat(base.value) * parseFloat(height.value);
    // console.log(triangleArea);

    const areaSpan = document.getElementById('area-span');
    areaSpan.innerText = triangleArea;
})


// Rectangle Area--------------------
function rectangleAreaFunction() {
    const width = document.getElementById('width');
    const length = document.getElementById('length');

    const rectangleArea = parseFloat(width.value) * parseFloat(length.value);
    console.log(rectangleArea);

    const resSpan = document.getElementById('recSpan');
    resSpan.innerText = rectangleArea;
}