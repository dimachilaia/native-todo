import React, {useEffect, useState} from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';

interface GoalInputProps {
  onAddGoal: (enteredGoalText: string) => void;
}
export default function GoalInput({onAddGoal}: GoalInputProps) {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoalText}
          placeholder="Your Course Goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
});
