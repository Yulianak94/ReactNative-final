import React, {useState} from 'react';
import { Text, StyleSheet, TextInput, ScrollView} from "react-native";
import CustomNextButton from "../components/CustomNextButton";
import { validEmail, validPassword } from './regex.js';


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


    const emailRegex =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const firstNameRegex = /^[a-z]([-']?[a-z]+)+$/;
    const lastNameRegex = /^[a-z]([-']?[a-z]+)+$/;
    const phoneRegex = /^[0-9]{2,3}-[0-9]{7}/;
    const countryRegex = /^[a-z]([-']?[a-z]+)+$/;
    const cityRegex = /^[a-z]([-']?[a-z]+)+$/;
    const addressRegex =/^[a-z]([-']?[a-z]+)+$/;

    const cardholderRegex = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/;
    const idRegex = /^[0-9]{9}$/;
    const creditRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    const validityRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    const cvvRegex = /^[0-9]{3,4}$/;

    function validateEmail (email){
      let validateForum=false;
      if(emailRegex.test(email)) {
        validateForum = true;
      } else {
        alert(`${email} is not valide`)
        validateForum = false;
      }
      
      return validateForum;
    };

    function validateFirstName (firstName) {
      let validateForum=false;
      if (firstNameRegex.test(firstName)) {
        validateForum = true;
      } else {
        alert(`${firstName} is not valide`)
        validateForum = false;
      }
      return validateForum;
    };

    function validateLastName(lastName) {
      let validateForum=false;
      if (lastNameRegex.test(lastName)) {
        validateForum = true;
      } else {
        alert(`${lastName} is not valide`)
        validateForum = false;
      }
      return validateForum;
    };

    function validatePhone(phone){
      let validateForum=false;
      if (phoneRegex.test(phone)) {
        validateForum = true;
      } else {
        alert(`${phone} is not valide`)
        validateForum = false;
      }
      return validateForum;
    };

    function validateCountry (country) {
      let validateForum=false;
      if (countryRegex.test(country)) {
        validateForum = true;
      } else {
        alert(`${country} is not valide`)
        validateForum = false;
      }
      return validateForum;
    };

    function validateCity (city) {
      let validateForum=false;
      if (cityRegex.test(city)) {
        validateForum = true;
      } else {
        alert(`${city} is not valide`)
        validateForum = false;
      }
      return validateForum;
    };

    function validateAddress (address) {
      let validateForum=false;
      if (addressRegex.test(address)) {
        validateForum = true;
      } else {
        alert(`${address} is not valide`)
        validateForum = false;
      }
      return validateForum;
    };

    function validateCardholder(cardholder) {
      let validateForum=false;
      if (cardholderRegex.test(cardholder)) {
        validateForum = true;
      } else {
        alert(`${cardholder} is not valide`)
        validateForum = false;
      }
      return validateForum;
    };

    function validateID (id) {
      let validateForum=false;
      if (idRegex.test(id)) {
        validateForum = true;
      } else {
        alert(`${id} is not valide`)
        validateForum = false;
      }
      return validateForum;
    };

    function validateCredit (credit) {
      let validateForum=false;
      if (creditRegex.test(credit)) {
        validateForum = true;
      } else {
        alert(`${credit} is not valide`)
        validateForum = false;
      }
      return validateForum;
    };

    function validateValidity(validity) {
      let validateForum=false;
      if (validityRegex.test(validity)) {
        validateForum = true;
      } else {
        alert(`${validity} is not valide`)
        validateForum = false;
      }
      return validateForum;
    };

    function validateCVV(cvv){
      let validateForum=false;
      if (cvvRegex.test(cvv)) {
        validateForum = true;
      } else {
        alert(`${cvv} is not valide`)
        validateForum = false;
      }
      return validateForum;
    };


  function checkTextInput() {
    let validate = false;
      if(validateEmail(TextInputEmail) && validateFirstName(TextInputFirstName) && validateLastName(TextInputLastName) && 
      validatePhone(TextInputPhone) && validateCountry(TextInputCountry)&& validateCity(TextInputCity) &&
       validateAddress(TextInputAddress) && validateCardholder(TextInputCardholder) && validateID(TextInputID) &&
        validateCredit(TextInputCardNumber) && validateValidity(TextInputValidity) && validateCVV(TextInputCVV)
      ){
        validate = true;
      }
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
      <ScrollView>
        <Text style={styles.forumTitle}>Personal Details:</Text>
        <Text style={styles.forum}>First Name:</Text>
        <TextInput type="text" placeholder="Enter First Name" className="text-input" onChangeText={(value) => setTextInputFirstName(value)}/>
  
        <Text style={styles.forum}>Last Name:</Text>
        <TextInput type="text" placeholder="Enter First Name" className="text-input" onChangeText={(value) => setTextInputLastName(value)}/>

        <Text style={styles.forum}>Email:</Text>
      <TextInput type="email" placeholder="Enter Email" className="email-input" onChangeText={(value) => setTextInputEmail(value)}/>


        <Text style={styles.forum}>Phone Number:</Text>
      <TextInput  type="number" placeholder="05X-XXXXXXX or 0X-XXXXXXX" className="number-input"  onChangeText={(value) => setTextInputPhone(value)}/>


        <Text style={styles.forum}>Country:</Text>
        <TextInput type="text" placeholder="Enter Country" className="text-input" onChangeText={(value) => setTextInputCountry(value)}/>


        <Text style={styles.forum}>City:</Text>
        <TextInput type="text" placeholder="Enter City" className="text-input"  onChangeText={(value) => setTextInputCity(value)}/>


        <Text style={styles.forum}>Address:</Text>
        <TextInput type="text" placeholder="Enter Address" className="text-input"  onChangeText={(value) => setTextInputAddress(value)}/>


        <Text style={styles.forumTitle}>Credit Card Details:</Text>
        <Text style={styles.forum}>Cardholder's Name:</Text>
        <TextInput type="text" placeholder="Enter Cardholder's Name" className="text-input" onChangeText={(value) => setTextInputCardholder(value)}/>

        <Text style={styles.forum}>ID:</Text>
        <TextInput type="text" placeholder="Enter ID" className="text-input"  onChangeText={(value) => setTextInputID(value)}/>

        <Text style={styles.forum}>Credit Card Number:</Text>
        <TextInput type="text" placeholder="Enter Credit Card Number" className="text-input"  onChangeText={(value) => setTextInputCardNumber(value)}/>

        <Text style={styles.forum}>Validity:</Text>
        <TextInput type="text" placeholder="Enter Validity" className="text-input"  onChangeText={(value) => setTextInputValidity(value)}/>

        <Text style={styles.forum}>CVV:</Text>
        <TextInput type="text" placeholder="Enter CVV" className="text-input"  onChangeText={(value) => setTextInputCVV(value)}/>

        <Text style={styles.forum}> Final Price After Discount: {props.totalPrice} $ </Text>
        <CustomNextButton onPress={submitForm}/>
      </ScrollView>
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
  container: {
    flex: 1,
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "MV Boli",
    fontSize: 22,
    margin: 10,
  },
  forum: {
    fontFamily: "Comic Sans MS",
    fontSize: 21,
    textAlign: "left",
  },
  forumTitle: {
    fontFamily: "Comic Sans MS",
    fontSize: 24,
    textAlign: "center",
    backgroundColor: "#FF9999",
  },
});

export default Payment;