import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import './profileStyle.scss';
import { 
    selectUserData,
    selectEmail,
    selectPhone,
    selectShowChangePasswordWindow,
    SetEmail,
    SetPhone,
    SetShowChangePasswordWindow,
    GetProfileData,
    PostProfileData } from '../../slices/profileSlice';
import ChangePassword from '../changePassword/changePasswordIndex';

const Profile = () => {

    const dispatch = useDispatch();

    const showChangePasswordWindow = useSelector(selectShowChangePasswordWindow);

    const login = useSelector((state) => state.login.login);

    const userData = useSelector(selectUserData);
    const email = useSelector(selectEmail);
    const phone = useSelector(selectPhone);

    const [typeBtn, SetTypeBtn] = useState('EDIT');
    const [colorBtn, SetColorBtn] = useState('#ff8844');
    const [inputDisabled, SetInputDisabled] = useState(true);

    const [errEmail, SetErrEmail] = useState('#292929');
    const [errPhone, SetErrPhone] = useState('#292929');

    useEffect(() => dispatch(GetProfileData(login)), []);

    const onChangeData = () => {
        SetTypeBtn(typeBtn === 'EDIT' ? 'SAVE' : 'SAVE');
        SetColorBtn(typeBtn === 'EDIT' ? '#1D8348' : '#1D8348');
        SetInputDisabled(typeBtn === 'SAVE' && false);
        const reEmail = /^[\w]{1}[\w\.]*@[\w]+\.[a-z]{2,4}$/i;
        const rePhone = /(\+375)[\s(]*\d{2}[)\s]*\d{3}[\s-]?\d{2}[\s-]?\d{2}/i;

        const newEmail = document.getElementById('email').value;
        const newPhone = document.getElementById('phone').value;
        reEmail.test(newEmail) ? SetErrEmail('#292929') : SetErrEmail('#CB4335');
        rePhone.test(newPhone) ? SetErrPhone('#292929') : SetErrPhone('#CB4335');
        if(reEmail.test(newEmail) && rePhone.test(newPhone)){
            SetTypeBtn(typeBtn === 'EDIT' ? 'SAVE' : 'EDIT');
            SetColorBtn(typeBtn === 'EDIT' ? '#1D8348' : '#ff8844');
            SetInputDisabled(!inputDisabled);
            if (typeBtn === 'SAVE'){
                const newData = {...userData, email: newEmail, phone: newPhone};
                dispatch(PostProfileData(login, newData));
            } 
        }

    };

    const onShowChangePasswordWindow = () => {
        dispatch(SetShowChangePasswordWindow(true));
    }

    return(
        <div className='profile'>
            <div className='account-description'>Here you can change your details</div>
            <div className='profile-form'>
                <h2 className='profile-form__title'>Profile</h2>
                <div className='profile-form__blok'>
                <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/2x/external-profile-blogger-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"/>
                    <div className='profile-form__login'>{login}</div>
                </div>
                <div className='profile-form__err' style={{color:errEmail}}>Email incorrect</div>
                <div className='profile-form__blok'>
                    <div className='profile-form__subtitle'>Email:</div>
                    <input 
                        id='email' 
                        className='profile-form__input'
                        style={{borderColor: !inputDisabled && '#F4F6F7'}}
                        disabled={inputDisabled} 
                        value={email}
                        onChange={(event) => dispatch(SetEmail(event.target.value))}
                    ></input>
                </div>
                <div className='profile-form__err' style={{color:errPhone}}>Phone incorrect</div>
                <div className='profile-form__blok'>
                    <div className='profile-form__subtitle'>Phone:</div>
                    <input 
                        id='phone' 
                        className='profile-form__input'
                        style={{borderColor: !inputDisabled && '#F4F6F7'}}
                        disabled={inputDisabled} 
                        value={phone}
                        onChange={(event) => dispatch(SetPhone(event.target.value))}
                        ></input>
                </div>
                <div className='profile-form__blok'>
                    <div className='profile-form__change-password' onClick={onShowChangePasswordWindow}>Change password</div>
                    <button style={{backgroundColor: colorBtn}} className='profile-form__btn' onClick={onChangeData}>{typeBtn}</button>
                </div>
                {showChangePasswordWindow && <ChangePassword/>}
            </div>
        </div>
    )
};

export default Profile;