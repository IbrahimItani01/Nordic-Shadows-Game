function handleHealth(scene) {
    HealthText = scene.add.text(220, 10, `Health:  ${playerHealth}`, {
       fontSize: "50px",
       fill: "#ffffff",
       fontFamily: "norse",
       backgroundColor:'rgba(0,0,0,0.5)',
});
}

     
function updateHealth(){
    if(attacked){
            playerHealth = playerHealth - 25;
    }
    HealthText.setText(`Health:  ${playerHealth}`);

}