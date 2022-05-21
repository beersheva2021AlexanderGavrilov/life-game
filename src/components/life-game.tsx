import React, {FC} from "react";
import LifeMatrix from "../service/life-matrix";
import {getRandomMatrix} from "../util/random";
import lifeGameConfig from "../configuration/life-game-config.json"
import Matrix from "./matrix"

const LifeGame: FC = () => {
    const lifeMatrix = React.useRef<LifeMatrix>(
        new LifeMatrix(getRandomMatrix(0, 1, lifeGameConfig.dimension, lifeGameConfig.dimension)));
    const [numbers, setNumbers] = React.useState<number[][]>(lifeMatrix.current.matrix);

    function tick() {
        setNumbers(lifeMatrix.current.nextStep());
    }

    React.useEffect(() => {
            const interval = setInterval(tick, lifeGameConfig.tickInterval);
            return clearInterval.bind(this, interval);
        }, []
    )
    return <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Matrix matrix={numbers}/>
    </div>
}
export default LifeGame;