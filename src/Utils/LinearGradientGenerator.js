export const LinearGradientGenerator = (body) => {
    const { landingPanel, homePanel, registerPanel } = body;
    
    // const colorIndex = {
    //     IndexZero: '', IndexOne: '', IndexTwo: '', IndexThree: '', IndexFour: ''
    // }
    const colorIndex = []; 
    
    if(landingPanel == true && homePanel == false && registerPanel == false){
        // rgba(13, 71, 161, 1.0) -- Blue
        colorIndex[0] = 'rgba(13, 71, 161, 0.0)';
        colorIndex[1] = 'rgba(13, 71, 161, 0.1)';
        colorIndex[2] = 'rgba(13, 71, 161, 0.6)';
        return colorIndex;
    }else if(landingPanel == false && homePanel == true && registerPanel == false){
        // rgba(27, 94, 32,1.0) -- Green
        colorIndex[0] = 'rgba(27, 94, 32, 0.0)';
        colorIndex[1] = 'rgba(27, 94, 32, 0.1)';
        colorIndex[2] = 'rgba(27, 94, 32, 0.6)';
        return colorIndex;
    }else{
        return;
    }
}