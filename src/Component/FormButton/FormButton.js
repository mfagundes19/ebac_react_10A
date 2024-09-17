import React from "react";

class FormButton extends React.Component {

    constructor(props){
        super(props);
        
    }
    openForm(event) {



        switch(event.target.getAttribute("data-target")) {
            case 'cliente':
                if(document.getElementById('boxCliente').style.display == '' || document.getElementById('boxCliente').style.display == 'none') {
                    document.getElementById('boxCliente').style.display = 'inline';
                    document.getElementById('boxUsuario').style.display = 'none';

                } else {
                    document.getElementById('boxCliente').style.display = 'none';
                }
                break;
            case 'usuario':
                if(document.getElementById('boxUsuario').style.display == '' || document.getElementById('boxUsuario').style.display == 'none') {
                    document.getElementById('boxUsuario').style.display = 'block';
                    document.getElementById('boxCliente').style.display = 'none';
                } else {
                    document.getElementById('boxUsuario').style.display = 'none';
                }
                break;
        }
        return;
    }
    render() {
        return  (
            <div>
                <button className="btn-primary" data-target={this.props.target} onClick={(event) => this.openForm(event)}>
                    {this.props.text}
                </button>
            </div>
        );
    }
}

export default FormButton;