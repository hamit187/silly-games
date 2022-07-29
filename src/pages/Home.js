import { Fragment } from "react";
import classes from "./Home.module.scss";

const Home = () => {
  return (
    <Fragment>      
        <div className={classes.background}></div>
        <div className={classes.content}>
            <h2>Welcome to SillyGames!</h2>
        </div>
      {/* <svg viewBox="0 0 1440 320" className={classes.wave}>
        <path
          fill="#b40c0c"
          fill-opacity="1"
          d="M0,32L26.7,58.7C53.3,85,107,139,160,144C213.3,149,267,107,320,96C373.3,85,427,107,480,149.3C533.3,192,587,256,640,256C693.3,256,747,192,800,144C853.3,96,907,64,960,90.7C1013.3,117,1067,203,1120,218.7C1173.3,235,1227,181,1280,144C1333.3,107,1387,85,1413,74.7L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg> */}
    </Fragment>
  );
};

export default Home;
