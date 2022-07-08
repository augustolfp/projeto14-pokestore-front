import { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../contexts/UserContext";
import logo from "../img/logo.png";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const {token, setToken} = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    async function signInUser(event){ 
        event.preventDefault();
        setLoading(true)
        setIsDisabled(true)

        const user = {
            email: `${email}`,
            password: `${password}`
        }
        try {
        const response = await axios.post("http://localhost:5000/login", user)
        login(response)
        }
        catch (err){
            treatError(err)
        }       
    }

    function login(response) {
        console.log(response.data)
        setToken(response.data)
        console.log(token)
        navigate('/home')
    }

    function treatError(err) {
        alert(`${err.response.data}`)
        setIsDisabled(false)
        setLoading(false)
    }

    return (
        <Container>           
            <img src={logo} />
            <Form>                
                <form action="#" onSubmit={signInUser}>            
                    <input required disabled={isDisabled} type="email" id="emailInput" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />              
                    <input required disabled={isDisabled} type="password" id="passInput" placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
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
            <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
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
