/* import { StyleSheet, StatusBar } from "react-native" */

const { StyleSheet, StatusBar } = require("react-native")

const DarkStyle = StyleSheet.create({
    container: {
       /*  marginTop: StatusBar.currentHeight + 5, */
        flex: 1,
        backgroundColor: '#2e3a76',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 20
        
    },

    header: {
        color: '#faebd7',
        fontSize: 35,
        fontWeight: 'bold'
    },

    input: {
        borderWidth: 1,
        padding: 10,
        width: 250,
        borderRadius: 10,
        color: '#faebd7',
        borderColor: '#faebd7',
        fontSize: 18
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#faebd7'
    },

    borderColor: '#faebd7',

    
    icon: {
        color: '#2e3a76'
    },

    upDownButtonsBackgroundColor: '#faebd7',

    radioButtonsGroup: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    
    uncheckedColor: '#faebd7',

    color: '#faebd7',

    trackColor: '#faebd7a3',

    radioTitle: {
        fontSize:22, color: '#faebd7'
    },

    calculate: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2e3a76',
        backgroundColor: '#faebd7',
        borderRadius: 10,
        padding: 50,
        paddingTop: 20,
        paddingBottom: 20, 
        
    }

})

const LightStyle = StyleSheet.create({
    container: {
        /* marginTop: StatusBar.currentHeight + 5, */
        flex: 1,
        backgroundColor: '#faebd7',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 20,
    },

    header: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#2e3a76'
    },

    input: {
        borderWidth: 1,
        padding: 10,
        width: 250,
        borderRadius: 10,
        color: '#2e3a76',
        borderColor: '#2e3a76',
        fontSize: 18
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#2e3a76'
    },

    borderColor: '#2e3a76',

    icon: {
        color: '#faebd7'
    },

    upDownButtonsBackgroundColor: '#2e3a76',

    radioButtonsGroup: {
        flexDirection: 'row', 
        alignItems: 'center',
    },

    uncheckedColor: '#2e3a76',

    color: '#2e3a76',

    trackColor: '#2e3a76a2',

    radioTitle: {
        fontSize:22, color: '#2e3a76'
    },

    calculate: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#faebd7',
        backgroundColor: '#2e3a76',
        borderRadius: 10,
        padding: 50,
        paddingTop: 20,
        paddingBottom: 20, 
        
    }
})

export {DarkStyle, LightStyle}
