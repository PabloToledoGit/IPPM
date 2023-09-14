import "./index.css";

function Menu(props) {
  return <a className="text-warning link btn btn-neon" href={props.links} target="blank">{props.menu}</a>;
}


export default Menu;
