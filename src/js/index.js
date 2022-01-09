import '../css/style.css'
const axios = require("axios");
import {DOM} from "./DOM";
import Chart from 'chart.js/auto'

let murl = 'http://api.adzuna.com/v1/api/jobs'

let id = '2386698a'
let key =  '9695de3e1a649c67318d7c10f8072cc8'

async function getCategories() {
    const category = await axios.get(murl + '/ru/categories',
        {
            params: {app_id: id, app_key: key},
            headers: {"content-type": "application/json"}
        })
    const {results} = category.data;
    console.log(results)
          results.forEach((a)=> {
              let opt = document.createElement('option')
              opt.textContent = a.label
              opt.value = a.tag
              DOM.jobSelector.appendChild(opt)
        })

}

getCategories()

const getData = async() => {
    let category =  DOM.jobSelector.options[DOM.jobSelector.selectedIndex].value;
    let country =   DOM.countrySelector.options[DOM.countrySelector.selectedIndex].value
    let type = DOM.typeSelector.options[DOM.typeSelector.selectedIndex].value
    const result = await axios.get(murl+`/${country}/${type}`,
            { params: { app_id: id, app_key: key, category: category},
                headers: {"content-type": "application/json"}})
    console.log(result.data.month)
    let labels = Object.keys(result.data.month)
   let data = Object.values(result.data.month)
    console.log(labels)
    console.log(data)

    try {
        Chart.getChart(DOM.canvas).destroy()
        a(labels, data)
    }catch (e)
    {
        a(labels, data)
    }
}

DOM.button.addEventListener('click', getData)


function a (labels, data) {
        let barChart = new Chart(DOM.canvas, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)'
                    ]

                }]
            }
        });
}