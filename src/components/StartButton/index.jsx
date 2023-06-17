import { StyledStartButton } from "./styles";
import icon from "../../assets/img/windows-icon.png";

export const StartButton = () => {
    return (
        <StyledStartButton>
            <img src={icon} alt="Logo Windows" />
            <p>Iniciar</p>
        </StyledStartButton>
    )
}