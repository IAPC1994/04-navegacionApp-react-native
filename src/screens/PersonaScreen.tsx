import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { RouteStackParams } from '../router/StackNavigator';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

/*interface RouterParams{
    id: number,
    nombre: string
}*/

// Recomendado para parametros entre vistas
interface Props extends StackScreenProps<RouteStackParams, 'PersonaScreen'>{};

export const PersonaScreen = ( { route, navigation }: Props) => {

    // const params = route.params as RouterParams;
    const params = route.params;

    const { changeUsername } = useContext(AuthContext);

    useEffect(() => {
        
        navigation.setOptions({
            title: params.nombre
        })

        changeUsername(params.nombre);

    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>
                {
                    JSON.stringify( params, null, 3)
                }
            </Text>
        </View>
    )
}
