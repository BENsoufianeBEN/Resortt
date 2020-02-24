import React from 'react';
import RoomsFilter from '../roomfilter/RoomsFilter';
import RoomsList from '../roommlist/RoomsList';
import { withRoomConsumer } from '../../context';
import Loading from '../loading/Loading';


function RoomContainer({ context }) {
const {loading, sortedRooms, rooms} = context;
if(loading) {
            return <Loading />;   
           }
             return (
    
                 <div>
    
                 <RoomsFilter rooms = {rooms} />
                 <RoomsList rooms = {sortedRooms} />
                </div>
             );

}
export default withRoomConsumer(RoomContainer);
























// import React from 'react';
// import RoomsFilter from '../roomfilter/RoomsFilter';
// import RoomsList from '../roommlist/RoomsList';
// import {RoomConsumer} from '../../context';
// import Loading from '../loading/Loading';



// export default function RoomsContainer() {
//     return (

// <RoomConsumer>

// {value => {
//       const {loading,sortedRooms,rooms} =value;

//       if(loading) {
//        return <Loading />;   
//       }
//         return (

//             <div>
//             hello from RoomsContainer
//             <RoomsFilter rooms={rooms}/>
//             <RoomsList rooms={sortedRooms}/>
//            </div>
//         );

//     }
// }

// </RoomConsumer>
//  );
// }
