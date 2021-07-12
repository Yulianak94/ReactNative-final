import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button} from "react-native";

const Payment = (props) => {
    console.log(props)
    const [TextInputFirstName, setTextInputFirstName] = useState('');
    const [TextInputLastName, setTextInputLastName] = useState('');
    const [TextInputEmail, setTextInputEmail] = useState('');
    const [TextInputPhone, setTextInputPhone] = useState('');
    const [TextInputCountry, setTextInputCountry] = useState('');
    const [TextInputCity, setTextInputCity] = useState('');
    const [TextInputAddress, setTextInputAddress] = useState('');
    const [TextInputCardholder, setTextInputCardholder] = useState('');
    const [TextInputID, setTextInputID] = useState('');
    const [TextInputCardNumber, setTextInputCardNumber] = useState('');
    const [TextInputValidity, setTextInputValidity] = useState('');
    const [TextInputCVV, setTextInputCVV] = useState('');

  const checkTextInput = () => {
      let validate = false;
    //Check for the Name TextInput
    if (!TextInputFirstName.trim()) {
      alert('Please Enter First Name');
      validate = false;
    }else{
        validate = true;
    }
    if (!TextInputLastName.trim()) {
        alert('Please Enter Last Name');
        validate = false;
    }else{
        validate = true;
    }
      if (!TextInputEmail.trim()) {
        alert('Please Enter Email');
        validate = false;
      }else{
        validate = true;
    }
      if (!TextInputPhone.trim()) {
        alert('Please Enter Phone Number');
        validate = false;
    }else{
        validate = true;
    }
      if (!TextInputCountry.trim()) {
        alert('Please Enter Country');
        validate = false;
    }else{
        validate = true;
    }
      if (!TextInputCity.trim()) {
        alert('Please Enter City');
        validate = false;
    }else{
        validate = true;
    }
      if (!TextInputAddress.trim()) {
        alert('Please Enter Address');
        validate = false;
    }else{
        validate = true;
    }
      if (!TextInputCardholder.trim()) {
        alert("Please Enter Cardholder's Name");
        validate = false;
    }else{
        validate = true;
    }
      if (!TextInputID.trim()) {
        alert('Please Enter ID');
        validate = false;
    }else{
        validate = true;
    }
      if (!TextInputCardNumber.trim()) {
        alert('Please Enter Credit Card Number');
        validate = false;
    }else{
        validate = true;
    }
      if (!TextInputValidity.trim()) {
        alert('Please Enter Validity');
        validate = false;
    }else{
        validate = true;
    }
        //Check for the Email TextInput
        if (!TextInputCVV.trim()) {
        alert('Please Enter CVV');
        validate = false;
    }else{
        validate = true;
    }
    //Checked Successfully
    //Do whatever you want
    alert('Success');
    return validate;
    }

    const submitForm = () => {
        if(checkTextInput()){
            props.navigation.navigate({
                routeName: "Final"
            })
        }
    }

  return (
      <View>
        <Text>First Name:</Text>
        <TextInput editable maxLength={40} placeholder="Enter First Name"
          onChangeText={(value) => setTextInputFirstName(value)}
          style={styles.textInputStyle}/>  

        <Text>Last Name:</Text>
        <TextInput editable maxLength={40} placeholder="Enter Last Name" onChangeText={(value) => setTextInputLastName(value)}
          style={styles.textInputStyle}/>

        <Text>Email:</Text>
        <TextInput editable maxLength={40} placeholder="Enter Email"
          onChangeText={(value) => setTextInputEmail(value)}
          style={styles.textInputStyle}/>

        <Text>Phone Number:</Text>
        <TextInput editable maxLength={40} placeholder="Enter Phone Number" onChangeText={(value) => setTextInputPhone(value)}
          style={styles.textInputStyle}/>

        <Text>Country:</Text>
        <TextInput editable maxLength={40} placeholder="Enter Country" onChangeText={(value) => setTextInputCountry(value)}
          style={styles.textInputStyle}/>

        <Text>City:</Text>
        <TextInput editable maxLength={40} placeholder="Enter City" onChangeText={(value) => setTextInputCity(value)}
          style={styles.textInputStyle}/>

        <Text>Address:</Text>
        <TextInput editable maxLength={40} placeholder="Enter Address" onChangeText={(value) => setTextInputAddress(value)}
          style={styles.textInputStyle}/>

        <Text>Credit Card Details:</Text>
        <Text>Cardholder's Name:</Text>
        <TextInput editable maxLength={40} placeholder="Enter Cardholder's Name" onChangeText={(value) => setTextInputCardholder(value)}
          style={styles.textInputStyle}/>

        <Text>ID:</Text>
        <TextInput editable maxLength={40} placeholder="Enter ID" onChangeText={(value) => setTextInputID(value)}
          style={styles.textInputStyle}/>

        <Text>Credit Card Number:</Text>
        <TextInput editable maxLength={40} placeholder="Enter Credit Card Number" onChangeText={(value) => setTextInputCardNumber(value)}
          style={styles.textInputStyle}/>

        <Text>Validity:</Text>
        <TextInput editable maxLength={40} placeholder="Enter Validity" onChangeText={(value) => setTextInputValidity(value)}
          style={styles.textInputStyle}/>

        <Text>CVV:</Text>
        <TextInput editable maxLength={40} placeholder="Enter CVV" onChangeText={(value) => setTextInputCVV(value)}
          style={styles.textInputStyle}/>

        <Text> Final Price: {props.totalPrice} $ </Text>
        <Button onPress={submitForm}/>
      </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },

  // 2. Add style to container:
  container: {
    flex: 1,
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3, // for android
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  // 3. Add style to title:
  title: {
    fontFamily: "MV Boli",
    fontSize: 22,
    margin: 10,
  },
});

export default Payment;