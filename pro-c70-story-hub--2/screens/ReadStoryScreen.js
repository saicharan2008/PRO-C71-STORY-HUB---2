import React from 'react';
import { Text, View ,Header,StyleSheet} from 'react-native';

export default class ReadStoryScreen extends React.Component {
    render() {
      return (
        <View style={{backgroundColor:'lightgreen', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{backgroundColor:'gold',fontSize:30}}>READ A STORY</Text>
          <Text style={{flex:1,fontWeight:'bold',fontSize:15,
           justifyContent: 'center', alignItems: 'center'}}>A story tells that two friends were walking through the desert. During some point of the journey, they had an argument, and one friend slapped the other one in the face.

The one who got slapped was hurt, but without saying anything, wrote in the sand “Today my best friend slapped me in the face”.

They kept on walking until they found an oasis, where they decided to take a bath. The one who had been slapped got stuck in the mire and started drowning, but the friend saved him. After he recovered from the near drowning, he wrote on a stone “Today my best friend saved my life”.

The friend who had slapped and saved his best friend asked him, “After I hurt you, you wrote in the sand and now, you write on a stone, why?” The other friend replied “When someone hurts us we should write it down in the sand where winds of forgiveness can erase it away. But, when someone does something good for us, we must engrave it in stone where no wind can ever erase it.”

Moral: Do not value the things you have in your life. But value who you have in your life.
</Text>
        </View>
      );
    }
  }