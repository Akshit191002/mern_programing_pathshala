function fetchApi(){
    const url='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=SUWENMJDCG3P8Y7E9M4Y22GS4 ';
    fetch(url)
    .then((res)=>res.json())
    .then(renderUI);
}
fetchApi();
const root = document.getElementById('root');
function renderUI(){
    // const days=data.days
    // console.log(days);
    const row=document.createElement('tr');
    let cell=document.createElement('th')
    cell.innerText='Date'
    row.appendChild(cell)

    const cell2=document.createElement('th')
    cell2.innerText='Maximum'
    row.appendChild(cell2)

    const cell3=document.createElement('th')
    cell3.innerText='Minimum'
    row.appendChild(cell3)

    root.append(row);
}