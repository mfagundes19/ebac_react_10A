import React from "react";

class FormSelect extends React.Component {
    constructor(props){
        super(props);
    }
    onChange(event) {
        let id_marca = null;
        let id_modelo = null;
        let id_ano = null;
        switch(event.target.getAttribute("name")) {
            case 'brand':
                id_marca = event.target.value;
                if(id_marca != null) {
                    fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas/'+event.target.value+'/modelos', {}) 
                    .then(r =>  r.json().then(data => data))
                    .then(response => {
                        console.log(response);
                        var objSelectModelo = document.querySelector('#model');
                        for(var i in response.modelos) {
                            objSelectModelo.options[objSelectModelo.options.length] = new Option(response.modelos[i].nome, response.modelos[i].codigo);
                        }
                    })
                    .catch(error => {
                        console.error(error); 
                    });
                }
            break;
            case 'model':
                id_marca = document.querySelector('#brand').value;
                id_modelo = event.target.value;
                if(id_marca != null && id_modelo != null) {
                    fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas/'+event.target.value+'/modelos/'+id_modelo+'/anos', {}) 
                    .then(r =>  r.json().then(data => data))
                    .then(response => {
                        var objSelectAno = document.querySelector('#year');
                        for(var i in response) {
                            objSelectAno.options[objSelectAno.options.length] = new Option(response[i].nome, response[i].codigo);
                        }
                    })
                    .catch(error => {
                        console.error(error); 
                    });
                }
            break;
            case 'year':
                id_marca = document.querySelector('#brand').value;
                id_modelo = document.querySelector('#model').value;
                id_ano = event.target.value;
                if(id_marca != null && id_modelo != null && id_ano != null) {
                    fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas/'+id_marca+'/modelos/'+id_modelo+'/anos/'+id_ano, {}) 
                    .then(r =>  r.json().then(data => data))
                    .then(response => {
                       document.querySelector('#amount').value = response.Valor;
                    })
                    .catch(error => {
                        console.error(error); 
                    });
                }
            break;
        }
    }
    render() {
        return  (
            <div>
                <select name={this.props.name} id={this.props.id} onChange={(event) => this.onChange(event)}>
                    <option></option>
                </select>
            </div>
        );
    }
}

export default FormSelect;