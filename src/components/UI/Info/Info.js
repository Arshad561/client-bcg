import classes from './Info.module.css';
const Info = props => <p className={classes.info}>{props.children}</p>
export default Info;