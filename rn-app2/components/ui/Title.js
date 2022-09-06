import { Text, StyleSheet } from 'react-native';


function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    // fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'white',
    padding: 12,
    fontFamily: 'open-sans-bold',
  },
});
