import styled from 'styled-components';

const StyledInstructions = styled.section`
    grid-area: instructions;
    border: 1px solid yellow;
`;

const StyledCode = styled.section`
    grid-area: code;
    border: 1px solid blue;
`;

export function Index() {
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
            <div>These are my instructions for the index</div>
        </StyledInstructions>
    )
}

function Code() {
    return (
        <StyledCode>
            <div>This is my code editor for the index</div>
        </StyledCode>
    )
}