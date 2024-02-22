// Code Keypad Component Here

function Keypad (){

    function onChangeHandle(){
        console.log("Entering password...")
    }

    return (
        <div>
            <input type="password" onChange={onChangeHandle} />
        </div>
    )
}

export default Keypad;