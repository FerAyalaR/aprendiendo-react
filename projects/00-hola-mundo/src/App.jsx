import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'FerAyalaRam',
        name: 'B1gSmoke',
        isFollowing: true
    },
    {
        userName: 'IamCristinini',
        name: 'Cristinini',
        isFollowing: true
    },
    {
        userName: 'ModernWarzone',
        name: 'ModernWarzone',
        isFollowing: false
    }

]

// export function App(){
//     return (
//         <section className='App'>
//         <TwitterFollowCard userName="FerAyalaRam" initialIsFollowing = {true}>
//             B1gSmoke
//         </TwitterFollowCard>

//         <TwitterFollowCard userName="IamCristinini" initialIsFollowing = {true}>
//             Cristinini
//         </TwitterFollowCard>
//         <TwitterFollowCard userName="ModernWarzone">
//             ModernWarzone
//         </TwitterFollowCard>
//         </section>
//     )
// }

export function App(){
    return (
        <section className='App'>
        {
            users.map(({userName, name, isFollowing})=>(
                <TwitterFollowCard 
                    key={userName}
                    userName={userName} 
                    initialIsFollowing = {isFollowing}
                    >
                    {name}
                </TwitterFollowCard>
            ))
        }
        </section>
    )
}