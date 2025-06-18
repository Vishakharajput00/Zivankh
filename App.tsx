import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Images from './src/assets/Assets';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <Image source={Images.logo} style={styles.logo} />
          <View style={styles.topRight}>
            <Image source={Images.language} style={styles.languageBtn} />
            <TouchableOpacity style={styles.backBtn}>
              <Text style={styles.backText}>← Back</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Greeting */}
        <Text style={styles.greeting}>
          Hi, Abc patient, Let’s get started — I’m here to listen and help you
          feel better!
        </Text>

        {/* Upload Medical Reports Button */}
        <TouchableOpacity style={styles.imageBtnContainer}>
          <Image
            source={Images.upload}
            style={{ width: '90%', resizeMode: 'contain' }}
          />
        </TouchableOpacity>

        {/* Talk to ZIVANKH Button */}
        <TouchableOpacity style={styles.imageBtnContainer}>
          <Image
            source={Images.chat}
            style={{ width: '80%', resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      </View>

      {/* Bottom Doctor Illustration */}
      <View style={styles.bottomImageContainer}>
        <Image source={Images.doctor} style={styles.doctorImg} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF9FC',
  },
  topSection: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  topRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageBtn: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  languageText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  backBtn: {
    backgroundColor: '#CFE8EE',
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginLeft: 10,
    borderWidth: 0.5,
    borderColor: '#000',
  },
  backText: {
    fontSize: 14,
    color: '#fff',
  },
  greeting: {
    textAlign: 'center',
    marginTop: '30%',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#000',
    marginHorizontal: 10,
  },
  imageBtnContainer: {
    width: '100%',
    alignItems: 'center',
    height: '15%',
  },

  imageBtnFull: {
    width: '90%',
    resizeMode: 'contain',
  },

  iconSmall: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  bottomImageContainer: {
    width: '100%',
    aspectRatio: 1, // This ensures responsiveness
  },
  doctorImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default App;
