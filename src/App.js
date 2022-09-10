import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const data = {
  users: [
    {
      role: 1,
      firstName: "Mark",
      lastName: "Otto",
    },
    {
      role: 1,
      firstName: "Jacob",
      lastName: "Thornton",
    },
    {
      role: 2,
      firstName: "Brad",
      lastName: "Pitt",
    },
    {
      role: 2,
      firstName: "Tom",
      lastName: "Hanks",
    },
    {
      role: 3,
      firstName: "Raymond",
      lastName: "Rienks",
    },
    {
      role: 3,
      firstName: "Martin",
      lastName: "Koole",
    },
  ],
};

function App() {
  let [appdata, setAppData] = useState(data.users);
  const [enteredName, setEnteredName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    onChangeHandler();
  }, [enteredName]);

  // record search with name are here
  const onChangeHandler = () => {
    if (enteredName == "") {
      setAppData(data.users);
      return;
    }
    let response = data.users.filter((item) => item.firstName == enteredName);
    setAppData(response);
  };
  //  record with respect to name added here
  const onDeleteHandler = (index) => {
    let response = appdata.filter((item) => item.firstName !== index.firstName);
    setAppData(response);
  };
  const toastMessage = () => {
    toast.success("Record!", {
      position: "top-center",
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  //  records are added here
  const enterRecord = (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "" || role === "") {
      return;
    }
    setAppData([
      ...appdata,
      {
        firstName,
        lastName,
        role,
      },
    ]);
    toastMessage();

    setFirstName("");
    setLastName("");
    setRole("");
  };
  return (
    <div className="App">
      <nav class="navbar sticky-top navbar-light bg-light">
        <div class="container-fluid w-50">
          <label for="search-user" class="col-sm-2 col-form-label">
            Search for employee:
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="search-user"
              placeholder="Enter a name"
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
      </nav>

      <div class="container pt-5">
        <h2>Users</h2>
        <table class="table mb-5 align-middle" id="users">
          <thead>
            <tr>
              <th style={{ width: "20%" }} scope="col">
                #
              </th>
              <th style={{ width: "20%" }} scope="col">
                First
              </th>
              <th style={{ width: "20%" }} scope="col">
                Last
              </th>
              <th style={{ width: "20%" }} scope="col">
                Role
              </th>
              <th style={{ width: "20%" }} scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {appdata.map((item) => {
              if (item.role == 1) {
                return (
                  <tr>
                    <th scope="row">{item.role}</th>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>User</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-outline-danger btn-sm"
                        onClick={() => onDeleteHandler(item)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
        <h2>Senior Users</h2>
        <table class="table mb-5 align-middle" id="senior-users">
          <thead>
            <tr>
              <th style={{ width: "20%" }} scope="col">
                #
              </th>
              <th style={{ width: "20%" }} scope="col">
                First
              </th>
              <th style={{ width: "20%" }} scope="col">
                Last
              </th>
              <th style={{ width: "20%" }} scope="col">
                Role
              </th>
              <th style={{ width: "20%" }} scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {appdata.map((item) => {
              if (item.role == 2) {
                return (
                  <tr>
                    <th scope="row">{item.role}</th>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>Senior Users</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-outline-danger btn-sm"
                        onClick={() => onDeleteHandler(item)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
        <h2>WFM</h2>
        <table class="table mb-5 align-middle" id="wfm-users">
          <thead>
            <tr>
              <th style={{ width: "20%" }} scope="col">
                #
              </th>
              <th style={{ width: "20%" }} scope="col">
                First
              </th>
              <th style={{ width: "20%" }} scope="col">
                Last
              </th>
              <th style={{ width: "20%" }} scope="col">
                Role
              </th>
              <th style={{ width: "20%" }} scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {appdata.map((item) => {
              if (item.role == 3) {
                return (
                  <tr>
                    <th scope="row">{item.role}</th>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>WFM Professionals</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-outline-danger btn-sm"
                        onClick={() => onDeleteHandler(item)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#add-user-modal"
        >
          Add User
        </button>
      </div>

      <div
        class="modal fade"
        id="add-user-modal"
        tabindex="-1"
        aria-labelledby="add-user-modal-label"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="add-user-modal-label">
                Add a new user
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={enterRecord}>
              <div class="modal-body">
                <div class="mb-3">
                  <label for="first-name-input">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="first-name-input"
                    placeholder="Mark"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <label for="last-name-input">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="last-name-input"
                    placeholder="Otto"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <label for="role-select">Role</label>
                  <select
                    class="form-select"
                    id="role-select"
                    aria-label="Role select"
                    value={role}
                    onChange={(event) => setRole(event.target.value)}
                  >
                    <option selected>Select a role</option>
                    <option value="1">User</option>
                    <option value="2">Senior User</option>
                    <option value="3">WFM</option>
                  </select>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={toastMessage}
                >
                  <ToastContainer />
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
