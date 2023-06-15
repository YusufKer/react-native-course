import { useState}  from 'react'
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  FlatList 
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style';

import { icons, SIZES } from '../../../constants';

export default function Welcome(){

  const router = useRouter();

  const [searchInput, setSearchInput] = useState('');

  const jobTypes = ["Full-time","Part-time","Contractor"];

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value={searchInput}
            onChange={(newText)=> setSearchInput(newText)}
            placeholder="What are you looking for?"
            />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View styles={styles.tabsContainer}>
        <FlatList 
          data={jobTypes} 
          renderItem={({item})=>{
            <TouchableOpacity>
              <Text>{item}</Text>
            </TouchableOpacity>
          }}
          />
      </View>
    </View>
  )
}