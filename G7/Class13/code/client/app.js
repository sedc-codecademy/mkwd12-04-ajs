let button = document.getElementById("getBtn");
let table = document.getElementById("table");

button.addEventListener("click", async () => {
    const response = await axios.get("http://localhost:3000/");
    console.log(response);
    render(table, response.data);
})

const render = (element, data) => {
    element.innerHTML = "";
    data.forEach(item => {
        element.innerHTML += `
        <tr> 
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.gender}</td>
        </tr>`
    })
}