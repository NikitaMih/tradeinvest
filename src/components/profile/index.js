import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './style.scss'

const Profile = () => {

    const [login, SetLogin] = useState('');
    const [email, SetEmail] = useState('');
    const [phone, SetPhone] = useState('');

    const[phoneDisabled, SetPhoneDisabled] = useState(true)



    const getPrifileData = () => {
            let login = sessionStorage.getItem('login');
            fetch(`http://localhost:3001/profile?login=${login}`)
            .then((res) => res.json())
            .then((res) => renderData(res[0]))
            .catch(() => console.log("err"))   
    }

    useEffect(() => getPrifileData(), [])

    const renderData = (data) => {
        SetLogin(data.login)
        SetEmail(data.email)
        SetPhone(data.phone)
    }

    return(
        <div className='profile'>
            <h2>Profile</h2>
            <div>Here you can change your details</div>
            <div>
                <div>Login</div>
                <input disabled value={login}></input>
                <button>p</button>
            </div>
            <div>
                <div>Email</div>
                <input value={email}></input>
                <button>p</button>
            </div>
            <div>
                <div>Phone</div>
                <input 
                disabled={phoneDisabled} value={phone}></input>
                <button>p</button>
            </div>
            <div>
                <div>New password</div>
                <input></input>
                <div>Confirm the password</div>
                <input></input>
            </div>
            <button>SAVE CHANGES</button>
        </div>
    )
}

export default Profile;