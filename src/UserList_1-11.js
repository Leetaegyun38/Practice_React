import React from 'react';

function User({user}){
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList(){
    const users = [
        {
            id:1,
            username: 'mercury',
            email: 'first@gmail.com'
        },
        {
            id:2,
            username: 'venus',
            email: 'bright@naver.com'
        },
        {
            id:3,
            username: 'earth',
            email: 'life@gm.gist.ac.kr'
        }
    ];

    return(
        <div>
            {users.map(item => (
                <User user={item} key={item.id} />
            ))}
        </div>
    );

    /*
    return(
        <div>
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} />
        </div>
    );
    */

    /*
    return (
        <div>
            <div>
                <b>{users[0].username}</b> <span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b> <span>({users[1].email})</span>
            </div>
            <div>
                <b>{users[2].username}</b> <span>({users[2].email})</span>
            </div>
        </div>
    )
    */
}

export default UserList;