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
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export interface Goal {
  text: string;
  id: string;
}

const Stack = createNativeStackNavigator();

function App() {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  const addGoalHandler = (enteredGoalText: string) => {
    setCourseGoals((currentCourseGoals: Goal[]) => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  };

  const deleteGoalHandler = (item: Goal) => {
    setCourseGoals((prevCourseGoals: Goal[]) =>
      prevCourseGoals.filter(goal => goal.id !== item.id),
    );
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          keyExtractor={(item: Goal, index: number) => item.id}
          alwaysBounceVertical={false}
          data={courseGoals}
          renderItem={({item}: {item: Goal}) => {
            return <GoalItem item={item} onDeleteItem={deleteGoalHandler} />;
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

  goalsContainer: {
    marginTop: 25,
  },
});
