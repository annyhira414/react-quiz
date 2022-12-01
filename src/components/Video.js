// import image from "../assets/images/3.jpg";

import classes from "../styles/Video.module.css";

export default function Video({ title, id, noq }) {
  return (
    <div>
      <div className={classes.video}>
        <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={title} />
        <p>{title}</p>{" "}
        <div className={classes.qmeta}>
          <p>{noq } Questions</p>
          <p>Total Points : {noq * 5}</p>
        </div>
      </div>
    </div>
  );
}

// 39 min 34 thke dekho 
// ai ponjto kaj sesh but now third party package ki bave baboher kora jay aita jonno infiniti scrole  korbo 
// joto scrole korbo totui 8 ta 8 ta kore jete thabe , ai ta joid korte chy tahole ki korbo ? 