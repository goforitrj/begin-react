import React from "react";
function User({ user, index }) {
    return (
        <div>
            <b>{user.username}</b>
            <span>{user.email}</span>
        </div>
    );
}
function UserList() {
    const users = [
        {
            id: 1,
            username: "jarangseo",
            email: "jarang@gmail.com"
        },
        {
            id: 2,
            username: "test",
            email: "test@gmail.com"
        },
        {
            id: 3,
            username: "steph",
            email: "steph@gmail.com"
        },
        {
            id: 4,
            username: "Bigone",
            email: "bigoneisthename@gmail.com"
        }
    ];
    return (
        <>
            {users.map(user => (
                <User key={user.id} user={user} />
            ))}
        </>
    );
}

export default UserList;
