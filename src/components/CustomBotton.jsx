import '../Assets/CSS/button.css'

function  CustomButton({name='default button', bgColor = 'blue', cr='white'})
{
    return(
        <div>
            <button style ={{
                color : cr,
                backgroundColor: bgColor,
                fontSize : '10px',
                boxShadow:'2px 2px 2px',
                padding : '2%'
            }

            }>{name}</button>
        </div>
    )
}
export default CustomButton

//inline css