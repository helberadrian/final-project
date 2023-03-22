import { useState } from "react";
import { useForm } from "react-hook-form";

import './styles.css';

import { db } from '../../db/config';
import { collection, addDoc } from "firebase/firestore";

import ResponseRegister from "../../components/responseRegister";

const Register = () => {
    const [purchaseID, setPurchaseID] = useState("");

    const {register, handleSubmit} = useForm();
    const onSubmit = async (data) => {
        //console.log(data);
        const docRef = await addDoc(collection(db, "users"), {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email
        });
        setPurchaseID(docRef.id);
    }

    return (
        <div className="formContainer">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Nombre:
                    <input type="text" {...register("firstName")}/>
                </label>
                <label>
                    Apellido:
                    <input type="text" {...register("lastName")}/>
                </label>
                <label>
                    Email:
                    <input type="email" {...register("email")}/>
                </label>

                <input type="submit" value="Enviar"/>
            </form>
            {purchaseID ? <ResponseRegister id={purchaseID} /> : null}
        </div>
    );
};

export default Register;