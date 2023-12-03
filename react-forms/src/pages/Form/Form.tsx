import { useState } from 'react';
import * as Yup from 'yup';
import { FormData } from '../../store/formSlice';
import { ValidationError } from 'yup';

export default function Form(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    email: '',
    password: '',
    passwordConfirm: '',
    gender: '',
    acceptance: false,
  });
  const [nameErr, setNameErr] = useState('');
  const [ageErr, setAgeErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [passswordConfirmErr, setPasswordConfirmErr] = useState('');
  const [genderErr, setGenderErr] = useState('');
  const [aceptanceErr, setAcceptanceErr] = useState('');

  const setErrors = (error: ValidationError) => {
    if (error.path === 'name') {
      setNameErr(error.message);
    } else if (error.path === 'age') {
      setAgeErr(error.message);
    } else if (error.path === 'email') {
      setEmailErr(error.message);
    } else if (error.path === 'password') {
      setPasswordErr(error.message);
    } else if (error.path === 'passwordConfirm') {
      setPasswordConfirmErr(error.message);
    } else if (error.path === 'gender') {
      setGenderErr(error.message);
    } else if (error.path === 'acceptance') {
      setAcceptanceErr(error.message);
    }
  };

  const resetErrors = () => {
    setNameErr('');
    setAgeErr('');
    setEmailErr('');
    setPasswordErr('');
    setPasswordConfirmErr('');
    setGenderErr('');
    setAcceptanceErr('');
  };

  const schema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[A-Z][a-z]*$/, 'Should start from uppercase letter')
      .required('Please enter the name'),
    age: Yup.string()
      .matches(/[0-9]/, 'Should be a number')
      .required('Please enter the age'),
    email: Yup.string()
      .email('Please enter valid email')
      .required('Please enter email'),
    password: Yup.string()
      .matches(/[0-9]/, 'Should contain number')
      .uppercase('Should contain uppercase letter')
      .lowercase('Should contain lowercase letter')
      .matches(/[!@#$%^&*?]/, 'Should contain special symbol')
      .required('Please enter the password'),
    passwordConfirm: Yup.string().oneOf(
      [Yup.ref('password')],
      'Passwords must match'
    ),
    gender: Yup.string().matches(/(Male|Female)/, 'Please choose gender'),
    acceptance: Yup.boolean().oneOf([true], 'Please accept T&C'),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetErrors();

    try {
      await schema.validate(formData, { abortEarly: false });
    } catch (errors) {
      if (errors instanceof ValidationError) {
        errors.inner.forEach((error) => {
          setErrors(error);
        });
      }
    }
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <div className="form-element">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          className="input"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <p className="error-msg">{nameErr}</p>
      </div>
      <div className="form-element">
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          name="age"
          className="input"
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />
        <p className="error-msg">{ageErr}</p>
      </div>
      <div className="form-element">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          className="input"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <p className="error-msg">{emailErr}</p>
      </div>
      <div className="form-element">
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          className="input"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <p className="error-msg">{passwordErr}</p>
      </div>
      <div className="form-element">
        <label htmlFor="password-confirm">Confirm password:</label>
        <input
          type="text"
          name="password-confirm"
          className="input"
          onChange={(e) =>
            setFormData({ ...formData, passwordConfirm: e.target.value })
          }
        />
        <p className="error-msg">{passswordConfirmErr}</p>
      </div>
      <div className="form-element">
        <label htmlFor="password-confirm">Gender:</label>
        <select
          name="password-confirm"
          className="input"
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        >
          <option>Choose...</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <p className="error-msg">{genderErr}</p>
      </div>
      <div className="form-element checkbox">
        <input
          type="checkbox"
          name="acceptance"
          onChange={(e) =>
            setFormData({ ...formData, acceptance: e.target.checked })
          }
        />
        <label htmlFor="acceptance">Agree to Terms and Conditions</label>
        <p className="error-msg">{aceptanceErr}</p>
      </div>
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}
