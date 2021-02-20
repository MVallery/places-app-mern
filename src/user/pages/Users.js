import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        { 
            id: "u1", 
            name: "Melissa", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinjh-dFzOqju3whmXm40WtQHaSxxRnxtbIg&usqp=CAU", 
            places: 3 
        },
        { 
            id: "u2", 
            name: "David", 
            image: "https://www.clare.ie/wp-content/uploads/bfi_thumb/Kilkee-moqios4wy32nb1igumcf4ozce8qkjx1dkf8nklknxs.jpg", 
            places: 1
        }
    ];

    return <UsersList items= {USERS}/>
}

export default Users