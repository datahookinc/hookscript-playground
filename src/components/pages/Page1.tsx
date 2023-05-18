import styled from 'styled-components';

const StyledInstructions = styled.section`
    grid-area: instructions;
    border: 1px solid yellow;
`;

const StyledCode = styled.section`
    grid-area: code;
    border: 1px solid blue;
`;

export function Instructions() {
    return (
        <StyledInstructions>
            <div>These are my instructions</div>
        </StyledInstructions>
    )
}

export function Code() {
    return (
        <StyledCode>
            <div>This is my code editor</div>
        </StyledCode>
    )
}