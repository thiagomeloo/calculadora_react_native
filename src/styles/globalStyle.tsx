import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 40,
    marginHorizontal: 0,
    padding: 0,
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',

  },
  resultView: {
    padding: 20,
    margin: 10,
    width: '90%',
    height: '30%',
    borderRadius: 15,
    backgroundColor: '#191622'
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7B7D80'
  },
  textExpression: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  }
});


export default styles