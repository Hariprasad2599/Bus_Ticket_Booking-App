// import React from 'react';
// import styled from 'styled-components';

// const HeaderContainer = styled.header`
//     background-color: #007bff;
//     color: white;
//     text-align: center;
//     padding: 1rem;
// `;

// const HeaderTitle = styled.h1`
//     font-size: 2rem;
//     margin: 0;
// `;

// const Header = () => {
//     return (
//         <HeaderContainer>
//             <naV><img src='src\Images\Bus.jpg' alt='Bus Image'/></naV>
//             <HeaderTitle>Bus Ticket Booking App</HeaderTitle>
//         </HeaderContainer>
//     );
// };

// export default Header;

import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #007bff;
    color: white;
    text-align: center;
    padding: 1rem;
`;

const HeaderTitle = styled.h1`
    font-size: 2rem;
    margin: 0;
`;

const LogoImage = styled.img`
    width: 150px;
    height: auto;
    margin-bottom: 10px;
    border-radius: 40px;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <LogoImage src='src\Images\Bus1.jpg' alt='Bus Image' />
            <HeaderTitle>Bus Ticket Booking App</HeaderTitle>
        </HeaderContainer>
    );
};

export default Header;
