import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
import webServer from '../api/webServer';
import AppContext from '../Context/appContext';
import { FontAwesome } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { useFonts, JosefinSans_600SemiBold } from '@expo-google-fonts/josefin-sans';
import { LinearGradient } from 'expo-linear-gradient';

const { width: WIDTH } = Dimensions.get("window");

const reportScreen = () => {
  const [fontsLoaded] = useFonts({ JosefinSans_600SemiBold })
  const { data, signin } = React.useContext(AppContext);
  const [reports, setReports] = React.useState([]);
  const [type, setType] = React.useState('');

  const getReports = async () => {
    try {
      let response = await webServer.post('report-history', {medicalID: data._id});
      setReports(response.data.data);
      setType('Reports');
    } catch (e) {
      console.log(e);
    }
  }

  const getPrescs = async () => {
    try {
      let response = await webServer.post('prescription-history', {medicalID: data._id});
      setReports(response.data.data);
      setType('Prescriptions');
    } catch (e) {
      console.log(e);
    } 
  }

  if(!fontsLoaded) {
    return (<Text>Loading</Text>)
  } else {
  return (
    <View style={styles.backgroundContainer}>
      <View style={{marginTop: 180}}>
      <TouchableOpacity style={styles.button} onPress={() => getReports()}>
        <Text style={styles.btntext}>Get Reports</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => getPrescs()}>
        <Text style={styles.btntext}>Get Prescriptions</Text>
      </TouchableOpacity>
      </View>
      <View style={{width: '100%', height: '100%', borderTopRightRadius: 50, marginTop: 10}}>
          <LinearGradient
          colors={['#0f4c75', '#3282b8']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100%',
          }} 
          />
          <Text style={{margin: 5, fontSize: 30, color: '#fff', fontFamily: 'JosefinSans_600SemiBold'}}>{type}</Text>
          {reports.length==0 ? <View/> :
          <FlatList 
          contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
          data={reports}
          renderItem={({item}) => (
            <View style={styles.box}>
              <Text style={styles.boxText}>{item.date}</Text>
              <Text style={{...styles.boxText, fontSize: 20, fontWeight: 'bold'}}>{item.info}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          />}
      </View>
    </View>
  );
   }
};
export default reportScreen;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  logoText: {
    fontSize: 30,
    fontWeight: "500",
    opacity: 0.5,
    marginTop: 10,
  },
  Input: {
    marginBottom: 10,
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0,0,0,0.35)",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25,
  },
  InputContainer: {
    marginTop: 10,
  },
  Inputicon: {
    position: "absolute",
    top: 8,
    left: 37,
  },
  Inputicon1: {
    position: "absolute",
    top: 65,
    left: 37,
  },
  button: {
    width: WIDTH - 110,
    height: 45,
    borderRadius: 25,
    backgroundColor: "rgba(23, 87, 148,0.9)",
    marginTop: 5,
    justifyContent: "center",
  },
  btntext: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },
  box: {
    width: WIDTH - 20,
    backgroundColor: '#fff',
    borderRadius: 30,
    margin: 10,
    padding: 10,
    elevation: 5
  },
  boxText: {
    color: '#0f4c75'
  }
});
