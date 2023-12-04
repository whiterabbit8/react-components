import * as Yup from 'yup';

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
  passwordConfirm: Yup.string().required('Please confirm password')/*.oneOf(
    [Yup.ref('password'), undefined],
    'Passwords do not match'
  )*/,
  gender: Yup.string().matches(/(Male|Female)/, 'Please choose gender'),
  acceptance: Yup.boolean().oneOf([true], 'Please accept T&C'),
});

export default schema;
