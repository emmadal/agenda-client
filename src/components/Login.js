import React, {useState, useEffect} from 'react'
import '../styles/login.css'
import { Container, Row, Col, Input, Form, Button} from 'reactstrap'
import { toast, ToastContainer } from 'react-toastify';
import { ClipLoader } from 'react-spinners'
import HomeEvent from './HomeEvent'
import 'react-toastify/dist/ReactToastify.min.css'
import firebase from '../config'

export default function Login() {
    const [credential, setCredential]  = useState({email:"", password:''})
    const [user, setUser] = useState(null)
    const [loading, setLoading]  = useState(false)

    useEffect(() => verifyIdentity(), [])

    const verifyIdentity = () => {
        firebase.auth().onAuthStateChanged((currentUser) => {
            if(currentUser) setUser(currentUser)
        })
    }

    const notifyFailed = () => {
        toast.error("Utilisateur inconnu. Verifiez votre connexion internet ou les champs.", {
            position: "top-right",
            autoClose: "5000",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
        setCredential({email:'', password:''})
    };

    const handleChange = (e) => {
        setCredential({ ...credential, [e.target.name]: [e.target.value]})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(!loading)
        firebase.auth().signInWithEmailAndPassword(credential.email.toString().trim(), credential.password.toString().trim())
        .then((success) => {
            if(success) setLoading(false)
            setCredential({ email: '', password: '' })
        }).catch((e) =>{
            if(e){
                setLoading(false)
                notifyFailed()
            }
        })
    }

    const logout = () => {
        firebase.auth().signOut()
        .then(() => {
            console.log('Déconnexion effectuée avec succès')
            window.location = window.location.origin
        }).catch(() => console.log('Veuillez vérifier vos paramètres réseau'))
    }

    if(user){
        return(
            <div className="App-header">
                <HomeEvent logout={logout} email={user.email}/>
            </div>
        )
    }
   
    return(
        <div  className="login-header">
            <Container>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />
                <Row>
                    <Col sm="5">
                        <Form onSubmit={handleSubmit} className="form-card">
                            <img src={require('../assets/logo-form.webp')} className="img-fluid" alt="logo"/>
                            <h4 className="h4-responsive text-center center font-weight-bold my-2">Connexion d'utilisateur</h4>
                            <Input name="email" type="text" value={credential.email} placeholder="Email" required onChange={handleChange} className="my-2"/>
                            <Input name="password" type="password" value={credential.password} placeholder="Password" required onChange={handleChange} className="my-2" />
                            <Button type="submit" color="success" className="myform mb-3">Login</Button>
                            <ClipLoader size={30} color={"#000"} loading={loading}/>
                        </Form>
                    </Col>
                    <Col sm="7"></Col>
                </Row>
        </Container>
        </div>
    )
}