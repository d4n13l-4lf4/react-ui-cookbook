import React from "react";
import ControllingInputWithState from "../subcomponent/chapter11/ControllingInputState";
import PlaceholderHelper from "../subcomponent/chapter11/PlaceholderHelper";
import ValidationErrorDisplay from "../subcomponent/chapter11/ValidationErrorDisplay";
import UseStateProof from "../subcomponent/chapter11/UseStateProof";
import PasswordType from "../subcomponent/chapter11/PasswordType";
import AutocompleteField from "../subcomponent/chapter11/AutocompleteField";
import MultilineInput from "../subcomponent/chapter11/MultilineInput";
import InputAdornments from "../subcomponent/chapter11/InputAdornments";
import {ValidationField} from "../subcomponent/chapter11/ValidationField";
import InputMasking from "../subcomponent/chapter11/InputMasking";

class Chapter11 extends React.Component<any, any> {

    state = {
        email: '',
    };

    changeEmail = (e: any) => this.setState({email: e.target.value })

    public render() {
        const { email } = this.state;
        return (
            <div>
                <ControllingInputWithState />
                <PlaceholderHelper />
                <ValidationErrorDisplay />
                <UseStateProof />
                <PasswordType />
                <AutocompleteField />
                <MultilineInput />
                <InputAdornments />
                <ValidationField
                    label={"Email"}
                    value={email}
                    onChange={this.changeEmail}
                    isValid={(em: string) => /\S+@\S+\.\S+/.test(em)} />
                <InputMasking />
            </div>
        )
    }
}

export default Chapter11
