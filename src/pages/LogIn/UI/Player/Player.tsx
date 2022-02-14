import { PlayerImg } from './PlayerStyles';
import playerImg from '../../../../assets/images/login-img.png';

const Player = () => {
  return <PlayerImg srcSet={`${playerImg} 2x`} />;
};

export default Player;
