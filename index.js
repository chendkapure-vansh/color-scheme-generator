const inputEle = document.getElementById('color-field');
const buttonEle = document.getElementById('btn')
const selectEle = document.getElementById('select-field')

buttonEle.addEventListener("click", () => {

    let store = "";

    fetch(`https://www.thecolorapi.com/scheme?hex=${inputEle.value.substring(1)}&mode=${selectEle.value}`)
        .then(response => response.json())
        .then(data => {

            data.colors.forEach((hexObj) => {

                const { value } = hexObj.hex;

                store += `
                    <div >
                    <div class= " slide"
                        style="
                            background:${value};
                        ">
                    </div>
                    <p> ${value}</p>
                    </div>
                `;
            });

            document.getElementById("container").innerHTML = store;

        });

});
