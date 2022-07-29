import { Fragment } from "react";

import classes from "./Browse.module.scss";
import Game from "../components/Game";

const GAMES = [
{
    id: 'g1',
    name: 'NBA 2K22',
    price: 80,
    img: 'nba.webp'
},
{
    id: 'g2',
    name: 'RDR2',
    price: 50,
    img: 'rdr2.jpeg'
},
{
    id: 'g3',
    name: 'Watch Dogs Legion',
    price: 65,
    img: 'watch_dogs.webp'
},
{
    id: 'g4',
    name: 'Mortal Kombat',
    price: 45,
    img: 'mortal_kombat.webp'
},
{
    id: 'g5',
    name: 'GTA5',
    price: 70,
    img: 'gta5.jpeg'
},
{
    id: 'g6',
    name: 'South Park',
    price: 40,
    img: 'south_park.webp'
}
];

const Browse = () => {
  return (
    <Fragment>
      {/* <h2 className={classes.text}>Check out some of the most popular games!</h2> */}
      <div className={classes.games}>
      {GAMES.map(game => <Game key={game.id} id={game.id} name={game.name} price={game.price} image={game.img} />)}
      </div>
    </Fragment>
  );
};

export default Browse;
