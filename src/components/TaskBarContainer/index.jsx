import { StyledTaskBar } from "./styles"

export const TaskBarContainer = ({children}) => {
    return (
        <StyledTaskBar>
            {children}
        </StyledTaskBar>
    )
}