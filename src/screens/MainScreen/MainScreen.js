import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import UpperGlaze from '../../../assets/SignIn/UpperGlaze.png'
import LowerGlaze from '../../../assets/SignIn/LowerGlaze.png'
import React, {useState} from 'react'
import CustomOutput from '../../components/CustomOutput'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'



const MainScreen = ({route}) => {

  const {height, width} = useWindowDimensions();

  async function query(data) {
    const response = await fetch(
      "https://ayurbot.azurewebsites.net/query",
      {
        headers: { 'Content-Type': 'application/json' },
        method: "POST",
        body: JSON.stringify(data),
      });
    const result = await response.json();
    return result;
  }

  const [answerFirst, setAnswerFirst] = useState('');
  const [answerSecond, setAnswerSecond] = useState('');
  const [answerThird, setAnswerThird] = useState('');
  const [question, setQuestion] = useState('');
  
  const onAnswerPressed = () => {
    if(!question) {
      console.warn('Ask a fucking question bruh!')
    } else {
      const result = query({
        "query": "What does the term 'panchakarma' refer to in Ayurveda, and how many traditional cleansing actions are associated with it?",
        "top_n": 3
    }).then((response) => {
      console.log('------')
      const answerFirst = (JSON.stringify(response[0].answer)).slice(1, -1)
      const answerSecond = (JSON.stringify(response[1].answer)).slice(1, -1)
      const answerThird = (JSON.stringify(response[2].answer)).slice(1, -1)
      setAnswerFirst(answerFirst);
      setAnswerSecond(answerSecond);
      setAnswerThird(answerThird);
    });
    }
  }
  

  return (
    <View style={[styles.root, {height: height}]}>

      <Image source={UpperGlaze}
        style= {{width: width}}
      />

      <View style={styles.greet_container}>
        <Text style={styles.greet}>Welcome {route.params.userInfo}!</Text>
      </View>

      <CustomInput
      placeholder="Ask me something"
      value={question}
      setValue={setQuestion}
      secureTextEntry={false}
      />

      <View style={styles.custom_output_container}>
        <CustomOutput
        text={answerFirst}
        />
        <CustomOutput
        text={answerSecond}
        />
        <CustomOutput
        text={answerThird}
        />
      </View>

      <View style={styles.answer_container}>
        <CustomButton
        text="Answer"
        color="#629035"
        onPress={onAnswerPressed}
        />
      </View>

      <Image source={LowerGlaze}
        style={[styles.lower_glaze, {top: height-height*0.2, width: width}]}
      />

    </View>
  )
}

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      backgroundColor: "#F8EFD0",
    },

    upper_glaze: {
      position: 'absolute',
      resizeMode: 'contain',
  },

  greet: {
    fontSize: 30,
    fontWeight: '500',
    color: '#883D33',
  },

  greet_container: {
    width: 280,
    marginBottom: 15,
  },

  custom_output_container: {
    marginTop: 40,
  },

  answer_container: {
    marginTop: 30,
  },

  lower_glaze: {
    position: 'absolute',
  },
})

export default MainScreen