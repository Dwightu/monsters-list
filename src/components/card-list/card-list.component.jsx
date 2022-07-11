import { Component } from 'react'
import './card-list.styles.css'
import Card from '../card/card.component';



const CardList = ({ monsters }) => (
    <div className='card-list'>
        {monsters.map(monster => {
            const { name, email, id } = monster;
            return (
                <Card key={id} name={name} id={id} email={email} />
            )

        })}
    </div>
);



// class CardList extends Component {

//     render() {
//         const { monsters } = this.props;

//         return <div className='card-list'>
//             {monsters.map(monster => {
//                 const { name, email, id } = monster;
//                 return (
//                     <Card key={id} name={name} id={id} email={email} />
//                 )

//             })}
//         </div>
//     }
// }

export default CardList