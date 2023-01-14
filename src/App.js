
import './App.css';
import Giftlist from './Giftlist';
import happyDayImage from './happyDayImage.jpg';
import giftRoom from './giftRoom.jpg'


function App() {
    return(
    <div className='app'>
      <div className='container'>
      <img className='img' src={happyDayImage} alt="present" width="350px" />
      </div>
      <div className='container'>
      <h1 className='header'>Gift List for the guests.</h1>
      </div>
      <Giftlist />
      <div className='container'>
      <img className='img two' src={giftRoom} alt="room" width="300px" height="200px"/>
      </div>
      <div className='container'>
      <p className='text'>Thank you! See you on the party!</p>
      </div>
      </div>
  );
}

export default App;
