import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  FlatList,
} from 'react-native';

type Goal = {
  text: string;
  id: string;
};

const Stack = createNativeStackNavigator();

function App() {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals: Goal[]) => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your Course Goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          keyExtractor={(item: Goal, index: number) => item.id}
          alwaysBounceVertical={false}
          data={courseGoals}
          renderItem={({item}: {item: Goal}) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{item.text}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    marginTop: 25,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
});
