import { Union } from "./.fable/fable-library.3.1.1/Types.js";
import { union_type } from "./.fable/fable-library.3.1.1/Reflection.js";
import * as react from "react";
import { int32ToString } from "./.fable/fable-library.3.1.1/Util.js";
import { ProgramModule_mkSimple, ProgramModule_withConsoleTrace, ProgramModule_run } from "./.fable/Fable.Elmish.3.0.0/program.fs.js";
import { Program_withReactSynchronous } from "./.fable/Fable.Elmish.React.3.0.1/react.fs.js";

export class Msg extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Increment", "Decrement"];
    }
}

export function Msg$reflection() {
    return union_type("App.Msg", [], Msg, () => [[], []]);
}

export function init() {
    return 0;
}

export function update(msg, model) {
    if (msg.tag === 1) {
        return (model - 1) | 0;
    }
    else {
        return (model + 1) | 0;
    }
}

export function view(model, dispatch) {
    return react.createElement("div", {}, react.createElement("button", {
        onClick: (_arg1) => {
            dispatch(new Msg(0));
        },
    }, "+"), react.createElement("div", {}, int32ToString(model)), react.createElement("button", {
        onClick: (_arg2) => {
            dispatch(new Msg(1));
        },
    }, "-"));
}

ProgramModule_run(ProgramModule_withConsoleTrace(Program_withReactSynchronous("elmish-app", ProgramModule_mkSimple(init, update, view))));

