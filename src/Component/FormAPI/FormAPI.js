import React from "react";

class FormAPI extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas') 
        .then(r =>  r.json().then(data => data))
        .then(response => {
            const objSelectMarca = document.querySelector('#brand');
            for(var i in response) {
                objSelectMarca.options[objSelectMarca.options.length] = new Option(response[i].nome, response[i].codigo);
            }
        })
        .catch(error => {
            console.error(error); 
        });
    }
    render() {
        return  (
            <div>

            </div>
            
        );
    }
}

export default FormAPI;