import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import { useDispatch } from 'react-redux';
import schema from '../../utils/schema';
import { FormData, setSubmitted } from '../../store/formSlice';

export default function LiveForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    email: '',
    password: '',
    passwordConfirm: '',
    gender: '',
    acceptance: false,
  });
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  })

  const dispatch = useDispatch();

  const onSubmit = async () => {
    //e.preventDefault();
    dispatch(setSubmitted(formData))
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-element">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="input"
          {...register('name')}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <p className="error-msg">{errors.name?.message}</p>
      </div>
      <div className="form-element">
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          className="input"
          {...register('age')}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />
        <p className="error-msg">{errors.age?.message}</p>
      </div>
      <div className="form-element">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          className="input"
          {...register('email')}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <p className="error-msg">{errors.email?.message}</p>
      </div>
      <div className="form-element">
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          className="input"
          {...register('password')}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <p className="error-msg">{errors.password?.message}</p>
      </div>
      <div className="form-element">
        <label htmlFor="passwordConfirm">Confirm password:</label>
        <input
          type="text"
          className="input"
          {...register('passwordConfirm')}
          onChange={(e) =>
            setFormData({ ...formData, passwordConfirm: e.target.value })
          }
        />
        <p className="error-msg">{errors.passwordConfirm?.message}</p>
      </div>
      <div className="form-element">
        <label htmlFor="gender">Gender:</label>
        <select
          className="input"
          {...register('gender')}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        >
          <option>Choose...</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <p className="error-msg">{errors.gender?.message}</p>
      </div>
      <div className="form-element checkbox">
        <input
          type="checkbox"
          {...register('acceptance')}
          onChange={(e) =>
            setFormData({ ...formData, acceptance: e.target.checked })
          }
        />
        <label htmlFor="acceptance">Agree to Terms and Conditions</label>
        <p className="error-msg">{errors.acceptance?.message}</p>
      </div>
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}
