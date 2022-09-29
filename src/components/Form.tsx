import React, {ChangeEvent, FormEvent, useState} from "react";
import "./Form.css"


export default function App() {

    // ** ERSTE LÖSUNG **

    //false ist der default Wert - standardwert
    /*    const [vornameInput, setVornameInput] = useState<string>("")
        const [nachNameInput, setNachnameInput] = useState<string>("")
        const [ageInput, setAgeInput] = useState<string>("")
        const [boxIsCheked, setBoxIsChecked] = useState(false)


        function changeVorname (vornameEvent: ChangeEvent<HTMLInputElement>) {

            const fieldName = vornameEvent.target.name;
            const fieldValue = vornameEvent.target.value;

            if (fieldName === "vorname") {
                setVornameInput(fieldValue)
            }

            if (fieldName === "lastname") {
                setNachnameInput(fieldValue)
            }

            if (fieldName === "age") {
                setAgeInput(fieldValue)
            }

            if (fieldName === "checkbox") {
                setBoxIsChecked(vornameEvent.target.checked)
            }
        }*/


    // ** ZWEITE LÖSUNG **
    const [form, setForm] = React.useState({
        vorname: "",
        lastname: "",
        age: 0,
        agb: false

    })

    function changeInputs(changeInputsEvent: ChangeEvent<HTMLInputElement>) {

        const fieldName = changeInputsEvent.target.name;
        const fieldValue = changeInputsEvent.target.value;
        const fieldType = changeInputsEvent.target.type;

        setForm (
            dieAlteForm => ({
                ...dieAlteForm,
                [fieldName]:
                    fieldType === "checkbox" ? changeInputsEvent.target.checked
                        : fieldValue
            })
        )
    }

    // hier wird die Anfrage abgeschickt
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log("HandleSubmit ", form)
    }

    return (
        <section>
            {/* ** Es gibt nur ein Form und alle andere Labels müssen in dieser Form drinnen sein ** */}
            <form onSubmit={handleSubmit}>

                <label>
                    Firstname:
                    <input className={"input-style"}
                           name={"vorname"}
                           placeholder="Firstname ..."
                           type="text"
                           value={form.vorname}
                           onChange={changeInputs}
                    />
                </label>

                <br/>

                <label>
                    Lastname:
                    <input className={"input-style"}
                           name={"lastname"}
                           placeholder="Lastname ..."
                           type="text"
                           value={form.lastname}
                           onChange={changeInputs}
                    />
                </label>

                <br/>

                <label>
                    Age:
                    <input className={"input-style-age"}
                           name={"age"}
                           placeholder="Age"
                           type="number"
                           value={form.age}
                           onChange={changeInputs}
                    />
                </label>

                <br/>

                <label>
                    Ich bin damit einverstanden
                    <input className={"input-style-checkBox"}
                           name={"agb"}
                           type="checkbox"
                        //checked={boxIsCheked}
                           checked={form.agb}
                           onChange={changeInputs}
                    />
                </label>

                <br/>

                <button>Formular senden</button>
            </form>

        </section>

    );
}
