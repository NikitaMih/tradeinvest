import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import './style.scss';
import { 
    selectUserData,
    selectEmail,
    selectPhone,
    SetEmail,
    SetPhone,
    GetProfileData,
    PostProfileData } from '../../slices/profileSlice'

const Profile = () => {

    const dispatch = useDispatch();

    const login = useSelector((state) => state.login.login);

    const userData = useSelector(selectUserData);
    const email = useSelector(selectEmail);
    const phone = useSelector(selectPhone);

    const [typeBtn, SetTypeBtn] = useState('EDIT');
    const [colorBtn, SetColorBtn] = useState('#ff8844');
    const [inputDisabled, SetInputDisabled] = useState(true);

    useEffect(() => dispatch(GetProfileData(login)), []);

    const onChangeData = () => {
        SetTypeBtn(typeBtn === 'EDIT' ? 'SAVE' : 'EDIT');
        SetColorBtn(typeBtn === 'EDIT' ? '#1D8348' : '#ff8844');
        SetInputDisabled(!inputDisabled);
        if (typeBtn === 'SAVE'){
            const newLogin = document.getElementById('login').value;
            const newEmail = document.getElementById('email').value;
            const newPhone = document.getElementById('phone').value;
            const newData = {...userData, login: newLogin, email: newEmail, phone: newPhone};
            dispatch(PostProfileData(login, newData));
        } 
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
                        onChange={(event) => dispatch(SetEmail(event.target.value))}
                    ></input>
                </div>
                <div>
                    <div className='profile-form__subtitle'>Phone</div>
                    <input 
                        id='phone' 
                        className='profile-form__input' 
                        disabled={inputDisabled} 
                        value={phone}
                        onChange={(event) => dispatch(SetPhone(event.target.value))}
                        ></input>
                </div>
                <button style={{backgroundColor: colorBtn}} className='profile-form__btn' onClick={onChangeData}>{typeBtn}</button>
            </div>
        </div>
    )
};

export default Profile;