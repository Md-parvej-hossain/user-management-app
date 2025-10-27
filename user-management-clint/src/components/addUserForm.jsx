const addUserForm = () => {
  const handalForm = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const age = e.target.age.value;
    const user = { name, email, age };

    // create user server
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        console.log('data afer post ', data);
      });
  };

  return (
    <div className="card bg-base-100 w-4/12 mx-auto shrink-0 shadow-2xl my-10">
      <form onSubmit={handalForm} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            className="input w-full"
            name="name"
            placeholder="Name"
          />
          <label className="label">Email</label>
          <input
            type="text"
            className="input w-full"
            name="email"
            placeholder="Email"
          />
          <label className="label">Age</label>
          <input
            type="text"
            className="input w-full"
            name="age"
            placeholder="Age"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default addUserForm;
