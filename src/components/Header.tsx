import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import React from "react";

const Header = (props: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 50 }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>{props.name} !</Text>

          <View style={{ flexDirection: 'row' }}>
            {/* Dark Mode  */}
            <TouchableOpacity >
              {/* {showIcon ? <Ionicons name="sunny" size={24} color="white" /> : <Ionicons name="moon" size={24} color="white" />} */}
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 10 }}>
              <Ionicons name="log-out-outline" size={24} color="white"  />
            </TouchableOpacity>
          </View>
        </View>
  );
};

export default Header;