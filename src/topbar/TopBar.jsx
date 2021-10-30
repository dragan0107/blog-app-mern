import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook"></i>
        <i className="topIcon fab fa-instagram"></i>
        <i className="topIcon fab fa-pinterest"></i>
        <i className="topIcon fab fa-twitter"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">Log Out</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src="https://static-cdn.jtvnw.net/jtv_user_pictures/1d5e6a4e-c7e1-4009-8a54-b7d9125d17a9-profile_image-70x70.png" alt="" />
      <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
