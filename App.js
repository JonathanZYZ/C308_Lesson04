/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Moment from 'moment-timezone';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
const Welcome = () => {
  return <Text>Welcome to C308 Web Frameworks!</Text>;
};
const Module = () => {
  return <Text>My modules this semester:</Text>;
};
const Recommed = () => {
  return <Text>Recommended Eats @ RP:</Text>;
};
class MyFirstApp extends React.Component {
  render(): React$Node {
    return <Text>My first React Native app</Text>;
  }
}
const SemModule = (props) => {
  return (
    <Text>
      {props.day} - {props.code}
    </Text>
  );
};
class Eats extends React.Component {
  render(): React$Node {
    return (
      <Text>
        {this.props.name} {'\n'}
        {this.props.location}
        {'\n'}
      </Text>
    );
  }
}
class Clock extends React.Component {
  render(): React$Node {
    var time: String = this.props.zone;
    return (
      <Text>
        {time} - {moment().tz(time).format('HH:mm Z')}
      </Text>
    );
  }
}
const WorldClock = () => {
  var output1 = <Clock zone="Asia/Singapore" />;
  var output2 = <Clock zone="Europe/London" />;
  var output3 = <Clock zone="America/New_York" />;
  var output4 = <Clock zone="Europe/Oslo" />;
  return (
    <Text>
      {output1}
      {'\n'}
      {output2}
      {'\n'}
      {output3}
      {'\n'}
      {output4}
    </Text>
  );
};
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import moment from 'moment-timezone';

const App: () => React$Node = () => {
  console.log('Listing semester modules and recommended eats');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Welcome />
              <MyFirstApp />
              <Text textBreakStrategy={'simple'} />
              <Module />
              <SemModule day={'Monday'} code={'C348'} />
              <SemModule day={'Tuesday'} code={'C273'} />
              <SemModule day={'Friday'} code={'C308'} />
              <Text textBreakStrategy={'simple'} />
              <Recommed />
              <Eats
                name={'Sweet Tooth Waffles'}
                location={'W6 Level 1, E-canteen'}
              />
              <Eats name={'Crowded Bowl'} location={'W4/W6 Lawn Canteen'} />
              <Eats
                name={'Western Cuisine @ Koufu'}
                location={'E1 Level 1, Koufu'}
              />
              <Eats name={'Ayam penyet'} location={'W4/W6 Lawn Canteen'} />
              <Text>World Clock</Text>
              <WorldClock />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
