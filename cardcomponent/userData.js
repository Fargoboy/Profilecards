import React, {useState} from 'react'

export default function UserData(){
    const [data, setData]= useState([
        {
            name: "Jessica Janson",
            personalIntro: "Some introduction of myself as a capenter",
            personalGoal: "I love to paint the ocean in different color",
            imageLink: "https://th.bing.com/th/id/OIP.1lYGsDpP1i9wzPLsM82cUQHaE8?w=206&h=137&c=7&o=5&dpr=1.25&pid=1.7"
        },
        {
            name: "Aaron Ramsey",
            personalIntro: "Aaron introduction of myself as a capenter",
            personalGoal: "I love to go to the moon",
            imageLink: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSCDPLrn5HbASuLZIKsLZXPfWm9eLLg2ENueTKIy-oqCI9fJ44w-BfR4cB6BeGa"
        },
    ])

    return (
        {data,
        setData
        }
    )
}