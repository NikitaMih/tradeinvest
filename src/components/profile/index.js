import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import './style.scss';

const Profile = () => {

    const login = useSelector((state) => state.login.login);

    const [userData, SetUserData] = useState({});
    const [email, SetEmail] = useState('');
    const [phone, SetPhone] = useState('');

    const [typeBtn, SetTypeBtn] = useState('EDIT');
    const [colorBtn, SetColorBtn] = useState('#ff8844');
    const [inputDisabled, SetInputDisabled] = useState(true);

    const getProfileData = () => {
            fetch(`http://localhost:3001/profile?login=${login}`)
            .then((res) => res.json())
            .then((res) => renderData(res[0]))
            .catch(() => console.log("err"))   
    };

    const postProfileData = async (data) => {
            await fetch(`http://localhost:3001/profile/${login}`,{
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
    };

    useEffect(() => getProfileData(), []);

    const renderData = (data) => {
        SetUserData(data);
        SetEmail(data.email);
        SetPhone(data.phone);
    };

    const onChangeData = () => {
        SetTypeBtn(typeBtn === 'EDIT' ? 'SAVE' : 'EDIT');
        SetColorBtn(typeBtn === 'EDIT' ? '#1D8348' : '#ff8844');
        SetInputDisabled(!inputDisabled);
        const newLogin = document.getElementById('login').value;
        const newEmail = document.getElementById('email').value;
        const newPhone = document.getElementById('phone').value;
        postProfileData({...userData, login: newLogin, email: newEmail, phone: newPhone})
    };

    const onChangeEmail = (value) => {
        SetEmail(value)
    };

    const onChangePhone = (value) => {
        SetPhone(value)
    };

    return(
        <div className='profile'>
            <div className='account-description'>Here you can change your details</div>
            <div className='profile-form'>
                <h2 className='profile-form__title'>Profile</h2>
                <div>
                    <div className='profile-form__subtitle'>Login</div>
                    <input 
                        id='login' 
                        className='profile-form__input' 
                        disabled
                        value={login} 
                    ></input>
                </div>
                <div>
                    <div className='profile-form__subtitle'>Email</div>
                    <input 
                        id='email' 
                        className='profile-form__input' 
                        disabled={inputDisabled} 
                        value={email}
                        onChange={(event) => onChangeEmail(event.target.value)}
                    ></input>
                </div>
                <div>
                    <div className='profile-form__subtitle'>Phone</div>
                    <input 
                        id='phone' 
                        className='profile-form__input' 
                        disabled={inputDisabled} 
                        value={phone}
                        nChange={(event) => onChangePhone(event.target.value)}
                        ></input>
                </div>
                <button style={{backgroundColor: colorBtn}} className='profile-form__btn' onClick={onChangeData}>{typeBtn}</button>
            </div>
        </div>
    )
};

export default Profile;