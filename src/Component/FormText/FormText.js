import React from "react";

class FormText extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return  (
            <div>
                <input type="text" name={this.props.name} id={this.props.name} placeholder={this.props.placeholder} disabled={this.props.disabled} />
            </div>
        );
    }
}

export default FormText;