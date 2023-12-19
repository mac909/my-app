import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	ScrollView,
	FlatList,
} from "react-native";
import React, { useState } from "react";
import GoalItem from "./components/GoalItem/GoalItem";
import GoalInput from "./components/GoalInput/GoalInput";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);

	const cancelGoalAdditionHandler = () => {
		setIsAddMode(false);
	};

	const addGoalHandler = (enteredGoal) => {
		setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
		setIsAddMode(false);
	};

	const addNewGoalHandler = () => {
		setIsAddMode(true);
	};

	const deleteGoalHandler = (goal) => {
		setCourseGoals((currentGoals) => {
			return currentGoals.filter((g) => g !== goal);
		});
	};

	return (
		<View style={styles.container}>
			<View style={styles.button}>
				<Button title="Add New Goal" onPress={addNewGoalHandler} />
			</View>
			<GoalInput
				addGoalHandler={(enteredGoal) => addGoalHandler(enteredGoal)}
				visible={isAddMode}
				onCancel={cancelGoalAdditionHandler}
			/>

			<FlatList
				style={styles.goalsContainer}
				data={courseGoals}
				ListEmptyComponent={() => (
					<View>
						<Text style={styles.title}>No Goals Added Yet!</Text>
					</View>
				)}
				keyExtractor={(item) => item}
				renderItem={(itemData) => (
					<GoalItem
						itemData={itemData}
						onPress={() => deleteGoalHandler(itemData.item)}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		paddingTop: 75,
		backgroundColor: "gray",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		marginTop: 20,
	},
	goalsContainer: {
		flex: 1,
		// justifyContent: "space-between",
		// alignItems: "center",
		backgroundColor: "#fff",
		paddingHorizontal: 10,
		// paddingVertical: 5,
		borderRadius: 5,
		// marginTop: 20,
		// opacity: 0.8,
	},
	button: {
		backgroundColor: "white",
		borderRadius: 5,
		margin: 15,
		marginHorizontal: 100,
		opacity: 0.7,
		shadowColor: "black",
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		elevation: 5,
	},
});
