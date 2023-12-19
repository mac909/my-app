import React from "react";
import { Text, StyleSheet, TouchableHighlight, View } from "react-native";

const GoalItem = (props) => {
	return (
		<View style={styles.container}>
			<TouchableHighlight
				onPress={props.onPress}
				style={styles.button}
				underlayColor={"red"}
				activeOpacity={0.5}
			>
				<View>
					<Text style={styles.listText}>{props.itemData.item}</Text>
				</View>
			</TouchableHighlight>
		</View>
	);
};

const styles = StyleSheet.create({
	// Text styles
	listText: {
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
		color: "white",
		// Padding
		padding: 10,
	},

	// Button styles
	button: {
		// Alignment
		alignItems: "center",
		// Background
		backgroundColor: "#007BFF", // Change this to your preferred color
		// Border
		borderRadius: 5,
		borderColor: "#333",
		borderWidth: 2,
		borderRadius: 8,
		// Padding
		padding: 10,
	},

	// Container styles
	container: {
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: 10,
		margin: 10, // Add some margin
	},
});

export default GoalItem;
