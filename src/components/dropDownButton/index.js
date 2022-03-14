const DropDownButton = () => {
  return (
    <button className="btn">
      <span>Account Settings</span>
      <i className="material-icons">public</i>
      <ul className="dropdown">
        <li className="active">
          <a className="#">Profile Information</a>
        </li>
        <li>
          <a className="#">Account</a>
        </li>
        <li>
          <a className="#">Help</a>
        </li>
        <li>
          <a className="#">Log Out</a>
        </li>
      </ul>
    </button>
  );
};

export default DropDownButton;
