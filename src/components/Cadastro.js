import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import logo from "../assets/img/logo.png";
import dotenv from 'dotenv';

dotenv.config()

export default function Cadastro() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [name, setName] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    async function registerUser (event) {
        event.preventDefault();
        setIsDisabled(true)
        setLoading(true)

        const user = {
            email: `${email}`,
            name: `${name}`,
            password: `${password}`,
            confirmPassword: `${confPassword}`
        }

       if (confPassword === password) {
        try {
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/cadastro`, user)
        createUser(response) 
        }
        catch(err) {
            treatError(err)
        }
       }
       else {
        alert("A confirmação de senha não confere!")
        setIsDisabled(false)
        setLoading(false)
       }
    }

    function createUser() {
        alert("Usuário cadastrado com sucesso")
        navigate('/login', {email: `${email}`,
        name: `${name}`,})
    }

    function treatError(err) {
        console.log(err)
        alert(`${err.message}. Tente novamente!`)
        setIsDisabled(false)
        setLoading(false)
    }


    return (
        <Container>           
            <img src={logo} />
            <Form>                
                <form action="#" onSubmit={registerUser}>            
                <input disabled={isDisabled} type="text" id="nameInput" placeholder='Nome' value={name} required onChange={(e) => setName(e.target.value)} /> 
                    <input disabled={isDisabled} type="email" id="emailInput" placeholder='E-mail' value={email} required onChange={(e) => setEmail(e.target.value)} />              
                    <input disabled={isDisabled} type="password" id="passInput" placeholder='Senha' value={password} required onChange={(e) => setPassword(e.target.value)} />  
                    <input disabled={isDisabled} type="password" id="confPassInput" placeholder='Confirme a senha' value={confPassword} required onChange={(e) => setConfPassword(e.target.value)} /> 
                    <button disabled={isDisabled} type="submit">
                        { loading ? 
                        <div className="loader">
                        <ThreeDots
                        color="#FFFFFF" />
                        </div> :
                        "Entrar" }
                        </button>
                </form>
            </Form>
            <Link to="/cadastro">Já tem uma conta? Entre aqui!</Link>
        </Container>
    )
 }

const Container = styled.div` 
display: flex;
flex-direction: column;   
background: #FBD743;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
color: #2774BA;

    a, a:visited {
        text-decoration: underline;
        color: #2774BA;
    }
`

const Form = styled.div` 

    margin: 30px 0 25px;

    form {
        display: flex;
        flex-direction: column;
        gap: 12px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        color: #2774BA;

        input {

            box-sizing: border-box;
            padding: 0 25px;
            width: 329px;
            height: 56px;
            background: #FFFFFF;
            border: 1px solid rgba(39, 116, 186, 0.7);
            border-radius: 8px;
            font-size: 16px;
            line-height: 23px;
            color: #2774BA;

            ::placeholder {

                color: #2774BA;
            }
            }

        
        button {
            width: 329px;
            height: 56px;
            background: #2774BA;
            border-radius: 8px;
            border: 0px;            
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            align-self: center;
            color: #FFFFFF;
        }

        button:hover:enabled {
            filter: brightness(115%);
            cursor: pointer;
            }

    }
`
