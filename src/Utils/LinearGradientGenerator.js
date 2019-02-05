export const LinearGradientGenerator = (landingPanel, homePanel, registerPanel) => {
    const colorIndex = {
        IndexZero: '', IndexOne: '', IndexTwo: '', IndexThree: '', IndexFour: ''
    } 
    
    if(landingPanel == true && homePanel == false && registerPanel == false){
        // rgba(13, 71, 161, 1.0) -- Blue
        colorIndex.IndexZero = 'rgba(13, 71, 161, 0.0)';
        colorIndex.IndexOne = 'rgba(13, 71, 161, 0.1)';
        colorIndex.IndexTwo = 'rgba(13, 71, 161, 0.3)';
        colorIndex.IndexThree = 'rgba(13, 71, 161, 0.6)';
        colorIndex.IndexFour = 'rgba(13, 71, 161, 1.0)';
        return colorIndex;
    }else if(landingPanel == false && homePanel == true && registerPanel == false){
        // rgba(27, 94, 32,1.0) -- Green
        colorIndex.IndexZero = 'rgba(27, 94, 32, 0.0)';
        colorIndex.IndexOne = 'rgba(27, 94, 32, 0.1)';
        colorIndex.IndexTwo = 'rgba(27, 94, 32, 0.3)';
        colorIndex.IndexThree = 'rgba(27, 94, 32, 0.6)';
        colorIndex.IndexFour = 'rgba(27, 94, 32, 1.0)';
        return colorIndex;
    }else{
        return;
    }
}