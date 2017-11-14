import { StyleSheet } from 'react-native'
import { color } from './color'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
	topPart: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '30%',
  },
  topPartText: {
		fontSize: 16,
		color: color.black,
		textAlign: 'center',
	},
  bottomPart: {
		height: '70%',
  },
  inputContainer: {
  },
  input: {
		borderBottomColor: color.darkBlueGrey,
		borderBottomWidth: StyleSheet.hairlineWidth,
		padding: 0,
		color: 'black',
		height: 30
	},
  labelWrapper: {
		height: 25,
		justifyContent: 'flex-end'
	},
	label: {
		fontFamily: 'Ubuntu',
		fontSize: 14,
		color: 'grey',
		fontWeight: 'bold'
  },
  sendButtonContainer: {
		justifyContent: 'center',
	},
	sendButton: {
		backgroundColor: color.blue,
		paddingTop: 16,
		paddingBottom: 16,
		borderRadius: 8,
		marginTop: 10,
		marginBottom: 10,
	},
	sendButtonText: {
		textAlign: 'center',
		color: color.white,
		fontFamily: 'Ubuntu',
		fontSize: 16,
		fontWeight: 'bold',
	},
})

module.exports = styles
