export default function Form(): JSX.Element {
  return (
  <form className="form">
    <div className="form-element">
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" className="input" />
    </div>
    <div className="form-element">
      <label htmlFor="age">Age:</label>
      <input type="text" name="age" className="input" />
    </div>
    <div className="form-element">
      <label htmlFor="email">Email:</label>
      <input type="text" name="email" className="input" />
    </div>
    <div className="form-element">
      <label htmlFor="password">Password:</label>
      <input type="text" name="password" className="input" />
    </div>
    <div className="form-element">
      <label htmlFor="password-confirm">Confirm password:</label>
      <input type="text" name="password-confirm" className="input" />
    </div>
    <div className="form-element">
      <label htmlFor="password-confirm">Gender:</label>
      <select name="password-confirm" className="input">
        <option>Choose...</option>
        <option>Male</option>
        <option>Female</option>
      </select>
    </div>
    <div className="form-element checkbox">
      <input type="checkbox" name="acceptance" />
      <label htmlFor="acceptance">Agree to terms and conditions</label>
    </div>
    <button type="submit" className="submit-btn">Submit</button>
  </form>
  );
}
