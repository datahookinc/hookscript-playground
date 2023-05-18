import styled from 'styled-components';

const StyledHeader = styled.header`
    grid-area: header;
    border: 1px solid green;
`;

export function Header() {
    return (
        <StyledHeader>
            <div>This is my header</div>
        </StyledHeader>
    )
}