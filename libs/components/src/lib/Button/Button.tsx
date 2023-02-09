import { forwardRef, ReactNode } from 'react';
import styled from '@emotion/styled';

type NBButtonKind = 'primary' | 'secondary';

interface NBButtonProps {
  children?: ReactNode;
  kind?: NBButtonKind;
}

const StyledButton = styled.button<NBButtonProps>`
  background-color: ${props => props.kind === 'primary' ? 'teal' : 'navy'};
  color: white;
  padding: 1rem;
`; 

export const NBButton = forwardRef<HTMLButtonElement, NBButtonProps>(({ children, kind = 'primary', ...props }, ref) => (
  <StyledButton kind={kind} {...props} ref={ref} >{children}</StyledButton>
));