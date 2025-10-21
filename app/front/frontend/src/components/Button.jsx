import { Link } from 'react-router-dom'
import { StyledButton } from '../styles/Button'

const Button = ({ variant = 'primary', to, children, ...rest }) => {
    if (to) {
        return (
            <StyledButton as={Link} to={to} variant={variant} {...rest}>
                {children}
            </StyledButton>
        )
    }

    return (
        <StyledButton variant={variant} {...rest}>
            {children}
        </StyledButton>
    )
}

export default Button