document.querySelector("#myfile").addEventListener("change", function(e) {
    e.preventDefault();

    let files = [...document.forms[0].elements[0].files];

    files.forEach(file => {
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            let img = document.createElement("img");
            img.src = reader.result;
            document.querySelector("#imageWrapper").append(img);
        }
    })
})