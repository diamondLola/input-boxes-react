import React, {useState} from 'react';
import './Input.css'

export default function MyInput(props){
 let [inp1, setInp1] = useState(' ')
 let [inp2, setInp2] = useState(' ')
 let [inp3, setInp3] = useState(' ')

 function functionChange(item){
    if(item.target.name === 'inp1'){
        setInp1(item.target.value)
    } else if(item.target.name === 'inp2'){
        setInp2(item.target.value)
    } else if (item.target.name === 'inp3'){
        setInp3(item.target.value)
    }
 }


    return(
        <div className="box1">
            <input type="text" className="input1" name='inp1' onChange={functionChange}  />
            <div className="box2">
                <input type="text" name='inp2'className="input2" onChange={functionChange} />
                <div className="box3">
                    <input type="text" name='inp3'className="input3" onChange={functionChange} />
                    <div className="box4">
                        <h1>{inp1}</h1>
                        <h1>{inp2}</h1>
                        <h1>{inp3}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}



