import styled from 'styled-components';

const StyledInstructions = styled.section`
    grid-area: instructions;
    border: 1px solid yellow;
`;

const StyledCode = styled.section`
    grid-area: code;
    border: 1px solid blue;
`;

export function Page() {
    return (
        <>
            <Instructions />
            <Code />
        </>
    )
}

function Instructions() {
    return (
        <StyledInstructions>
            <div>These are my instructions for page 1</div>
        </StyledInstructions>
    )
}

function Code() {
    return (
        <StyledCode>
            <div>This is my code editor for page 1</div>
        </StyledCode>
    )
}