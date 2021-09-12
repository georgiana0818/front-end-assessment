import '../../css/button.scss'

const CustomButton = props =>{
    return(
        <div className={props.buttonClass}data-text={props.buttonDataText}>
            <a href={props.buttonAnchor} >
                {props.buttonText}
            </a>
        </div>
       
    )
}

export default CustomButton