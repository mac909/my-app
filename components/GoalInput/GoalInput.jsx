import React from "react";
import { useState } from "react";
import {
	View,
	TextInput,
	Button,
	StyleSheet,
	Modal,
	Image,
} from "react-native";

const GoalInput = (props) => {
	const [enteredGoal, setEnteredGoal] = useState("");

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	const addGoalHandler = () => {
		props.addGoalHandler(enteredGoal);
		setEnteredGoal("");
	};

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					<Image
						source={require("../../assets/images/Checklist.jpg")}
						style={styles.image}
					/>
				</View>
				<View style={styles.inputContainer}>
					<View style={styles.input}>
						<TextInput
							value={enteredGoal}
							onChangeText={goalInputHandler}
							placeholder="Your Course Goal!!"
							autoFocus={true}
							placeholderTextColor={"black"}
						/>
					</View>
				</View>
				<View style={styles.inputContainer}>
					<View style={styles.button}>
						<Button onPress={addGoalHandler} title="Add Goal!" />
					</View>
					<View style={styles.button}>
						<Button
							onPress={props.onCancel}
							title="Cancel"
							color="red"
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "gray",
		color: "white",
		padding: 10,
	},
	input: {
		width: "100%",
		backgroundColor: "#fff",
		borderColor: "black",
		borderWidth: 2,
		borderRadius: 5,
		shadowColor: "black",
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		elevation: 5,
		padding: 10,
	},
	button: {
		flex: 1,
		backgroundColor: "white",
		borderRadius: 5,
		margin: 5,
		opacity: 0.7,
	},
	imageContainer: {
		width: "100%",
		height: "30%",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "gray",
	},
	image: {
		width: "55%",
		height: "55%",
		opacity: 0.7,
		marginTop: 30,
		borderRadius: 10,
	},
	container: {
		flex: 1,
		padding: 20,
		paddingTop: 75,
		backgroundColor: "gray",
	},
});

export default GoalInput;
