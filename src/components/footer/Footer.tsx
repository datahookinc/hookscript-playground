import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledFooter = styled.header`
    grid-area: footer;
    border: 1px solid red;
`;

/* should prefer .../tour/example/1 */
export function Footer() {
    return (
        <StyledFooter>
            <div>This is my footer</div>
            <Link to={'page1'}>Last Page</Link>
            <Link to={'page2'}>Next Page</Link>
        </StyledFooter>
    )
}
