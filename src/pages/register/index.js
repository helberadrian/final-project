import React from "react";
import { useForm } from "react-hook-form";


const Register = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        //alert(JSON.stringify(data));
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
    );
};

export default Register;