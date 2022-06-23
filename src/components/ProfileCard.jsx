/* eslint-disable react/jsx-no-comment-textnodes */
const ProfileCard = ({ user }) => {
  return (
    <div className="pt-3">
      <div className="container bootstrap snippets bootdey">
        <hr />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                className="avatar img-circle img-thumbnail"
                alt="avatar"
              />
            </div>
          </div>

          <div className="col-md-9 personal-info pt-6">
            <h3 className="text-capitalize">{user.name}</h3>
            <div className="col-lg-8">
              <p className="text-capitalize">Street:</p>
            </div>
            <div className="col-lg-8">
              <p className="text-capitalize">City:</p>
            </div>
            <div className="col-lg-8">
              <p className="text-capitalize">Zip:</p>
            </div>
            <div className="col-lg-8">
              <p>E-mail: {user.email}</p>
            </div>

            <div className="col-lg-8">
              <p className="text-capitalize">User type: {user.role}</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex">
        <div className="container bootstrap snippets bootdey">
          <p className="col-lg-8 text-info">
            Fill up feilds only that will be updated!
          </p>
          // eslint-disable-next-line jsx-a11y/no-redundant-roles
          <form className="form-horizontal" role="form">
            <div className="form-group mt-3">
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  placeholder="name"
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  placeholder="street"
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  value=""
                  placeholder="city"
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  value=""
                  placeholder="zip"
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  placeholder="email"
                />
              </div>
            </div>
            <button className="btn-primary mt-3">Update</button>
          </form>
        </div>
        <div className=" container col-lg-6 utilBtnGroup">
          {user.role === "admin" && (
            <>
              <button type="button" className="btn btn-secondary">
                All user list
              </button>
              <button type="button" className="btn btn-secondary">
                All client list
              </button>
              <button type="button" className="btn btn-secondary">
                All worker list
                          </button>
                          <a className="btn btn-secondary" href="/task">
                Create Task
              </a>
              <button type="button" className="btn btn-secondary">
                Inbox
              </button>
            </>
          )}

          {user.role === "worker" && (
            <>
              <button type="button" className="btn btn-secondary">
                All client list
              </button>
              <button type="button" className="btn btn-secondary">
                My tasks
              </button>
              <a className="btn btn-secondary" href="/task">
                Create Task
              </a>
              <button type="button" className="btn btn-secondary">
                Inbox
              </button>
            </>
          )}
          {user.role === "client" && (
            <>
              <button type="button" className="btn btn-secondary">
                My tasks
              </button>
              <button type="button" className="btn btn-secondary">
                Inbox
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
