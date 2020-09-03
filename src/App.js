import React, { Component } from 'react';
import NavBar from './components/navbar';
import FortuneTeller from './components/fortuneTeller';
import './App.css';

class App extends Component {
  state = { 

    showMessage: false,

    fortunes: [
    {zodiac: 'This could be a good time to think of a nice surprise for someone you love, especially if they feel bad about some of their choices or if they are going through a rough patch. See where your different emotional sides intertwine and let your mind rest for a little while so that the processes of giving and receiving may once again flow. Steady choices from the past serve as your foundation for the life you live today. See the quality in some of your actions, even if you have made some mistakes along the way.'},
    {zodiac: 'You think that you should be able to see the light at the end of the tunnel in any given situation, but this isn’t always the case. Believe in you and your abilities and talents but give expectations a rest and focus on what you do best with your time and expertise. To see the person in front of you completely, and as they really are, you must acknowledge all their differences and the upbringing that left its mark on both of you.'},
    {zodiac: 'You are worried and numerous emotions don’t go well with one another today. You are torn between different people and different desires and aren’t sure hot to combine different pieces of your private life into one whole that makes you feel complete and satisfied. Conflicts are possible, with sensitivity of the heart emphasized in both you and the people who stand before you. Be as tender and understanding as possible and settle for nothing less in return.'},
    {zodiac: 'You have dealt with the past, but you are still passionate about certain issues that tied you down and need to use your energy constructively instead of initiating a conflict. Make sure you have the right goals in mind and don’t get carried away into imagery over substance. Some people are important enough to discuss matters before distancing yourself, but perhaps the entire situation requires a little more tact, patience and time in order to be fully understood and resolved.'},
    {zodiac: 'When silent movies were made, the technology needed multicolored makeup to capture faces of actors properly. Some conditions must be met in the eyes of the circumstance, so the truth can be seen clearly. Put on a show if you feel the need to, just make sure that honesty is the one that is moving you forwards. You cannot rely on some individuals and this won’t change in time of need. Still, you can rely on your independent self and your own judgment about distances made.'},
    {zodiac: 'On the path towards evolution of the Soul, specific things are always summoned, and you can’t control them with your mind. Respect your own processes and see how everything coming your way serves a purpose and helps you build firm boundaries towards issues and people that aren’t meant to stick around for long. Some things simply have their timeline and the finish that they incline towards. If you cannot affect the flow of the situation, let it happen as it may and observe what comes afterwards with curiosity.'},
    {zodiac: 'Fear may serve to protect you and you should listen to your instincts. Things that you are deeply passionate about may cross a line or two, and you must follow your truest limitations before setting fire on your own heart and your inner world. Emotions and physical realities don’t combine that well today, or so it seems from the perspective you possess right now. Sense what the body is trying to say before turning to overthinking.'},
    {zodiac: 'A cheetah can run in full speed only about half a minute before their brain overheats. There are not that many options at the moment, and you must stop to take some rest before your own brain overheats and you burn out completely before finishing a task or reaching a goal. To reach the point of actual and satisfactory success, you need enough time to yourself that allows you to choose from the core of your authentic Self.'},
    {zodiac: 'The idea for chocolate chip cookies was sold to Nestle for a lifetime supply of Nestle chocolate. While thinking about the way that energies round up and bring something back to you where investments were made, you will see that you never lacked feedback from the Universe even if you did from certain individuals in your life. It is time to balance out your personal perspective with ways of the world, and get in tune with synchronicities and faith that helped you come this far.'},
    {zodiac: 'You are slow to turn back, but you won’t have much of a choice in weeks to follow. It is important to ask yourself if priorities set truly match your emotional needs and turn to relationships that bring a sense of calm just as much as they make you passionate. Rushing won’t help, but the tension is high, and your urges are spinning out of control. Take the time needed to rest, get some sleep, relax your body, and everything will start falling into place.'},
    {zodiac: 'You don’t know why or how, but loving energies are overwhelming at the moment, and you must make a choice that is found somewhere in the middle. There is no point in choosing among feelings and reason when what you truly need to do is to help them cooperate. Get in touch with earth, plants, animals and Nature. The more you do for your own peace of mind, the easier it will come to make grand decisions that only you are ready to make.'},
    {zodiac: 'Breaking Bad was turned down by HBO and Showtime. The mind must be open in order for you to embrace things that might be good for your overall wellbeing. Although they don’t fit a certain norm, they could bring balance to your financial world or make you wider in your perspective. Observe others with care and try to take the pink goggles off before getting disappointed. There is a lot of pressure and pain in each of us, that is yearning to be recognized and acknowledged.'}
    ]
  }
  handleFortuneButtonTrue = () => {
    this.setState({showMessage: true});
  }

  handleFortuneHide = () => {
    this.setState({showMessage: false});
  }

  render() {

    return (
      <React.Fragment>
      <NavBar/>

      <FortuneTeller
      fortunes={this.state.fortunes}
      showMessage={this.state.showMessage}
      onFortunePress={this.handleFortuneButtonTrue}
      onFortuneHide={this.handleFortuneHide}
      />
    
      </React.Fragment>
    );
  }
}

export default App;
