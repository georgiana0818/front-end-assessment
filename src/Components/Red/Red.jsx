import Menu from '../Menu/Menu';
import '../../css/red.css';
import Cursor from '../Cursor/Cursor'
import CustomButton from '../Button/CustomButton'
import speaker1 from '../../AssessmentAssets/medium17.png';
import speaker2 from '../../AssessmentAssets/medium27.png';

const Red = () => {

    return(
        <div className="container-red">
            <Cursor text={"Click"}/>
            <Menu/>
            <div className="container-red-button1">
                    <CustomButton buttonAnchor="#" buttonClass="btn-white" buttonDataText="Try-it-now" buttonText="Try it Now"/>
                </div>
            <div className="container-red-box1">
                <div id="intro1">SUPERIOR SOUND</div>
                <div id="intro2">Experience live versions of your favourite songs</div>
                <div className="container-red-button2">
                    <CustomButton buttonAnchor="#" buttonClass="btn-white" buttonDataText="See-Demo" buttonText="See Demo"/>
                </div>
                       
            </div>
           
    
                <div className="container-red-box2" >
                    <div id="speaker1">
                        <img className="speaker" src={speaker1}/>
                    </div>
                    <div id="speaker2">
                        <img className="speaker" src={speaker2}/>
                    </div>
                </div>
           
            

        </div>
    )
}

export default Red