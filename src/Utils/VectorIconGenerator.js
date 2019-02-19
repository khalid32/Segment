import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const VectorIconGenerator = ({iconBundled="Ionicons", iconName="md-home", iconColor='white', iconSize=18, iconStyle={}}) => {
    
    if(iconBundled == 'AntDesign'){
        return <AntDesign name={iconName} size={iconSize} color={iconColor} style={iconStyle}/>
    }else if(iconBundled == 'Entypo'){
        return <Entypo name={iconName} size={iconSize} color={iconColor} style={iconStyle}/>
    }else if(iconBundled == 'EvilIcons'){
        return <EvilIcons name={iconName} size={iconSize} color={iconColor} style={iconStyle}/>
    }else if(iconBundled == 'Ionicons'){
        return <Ionicons name={iconName} size={iconSize} color={iconColor} style={iconStyle}/>
    }else if(iconBundled == 'Feather'){
        return <Feather name={iconName} size={iconSize} color={iconColor} style={iconStyle}/>
    }else if(iconBundled == 'FontAwesome'){
        return <FontAwesome name={iconName} size={iconSize} color={iconColor} style={iconStyle}/>
    }else if(iconBundled == 'Foundation'){
        return <Foundation name={iconName} size={iconSize} color={iconColor} style={iconStyle}/>
    }else if(iconBundled == 'MaterialIcons'){
        return <MaterialIcons name={iconName} size={iconSize} color={iconColor} style={iconStyle}/>        
    }else if(iconBundled == 'MaterialCommunityIcons'){
        return <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor} style={iconStyle}/>        
    }else if(iconBundled == 'Octicons'){
        return <Octicons name={iconName} size={iconSize} color={iconColor} style={iconStyle}/>        
    }else if(iconBundled == 'Zocial'){
        return <Zocial name={iconName} size={iconSize} color={iconColor} style={iconStyle}/>        
    }else if(iconBundled == 'SimpleLineIcons'){
        return <SimpleLineIcons name={iconName} size={iconSize} color={iconColor} style={iconStyle}/>
    }else{
        return <Ionicons name="md-home" size={18} color="white" style={{}}/>
    }

}