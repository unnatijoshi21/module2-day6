import {useForm} from "react-hook-form"

function Contact () 
{
    const {register, handleSubmit} = useForm()
    const OutPut = (data) => console.log(data);
        
    return(
        <div>
            <form onSubmit = {handleSubmit(OutPut)}>
                <label>Enter you Name</label>
                <input {...register('fullName')} type='text'/>
                <br/>
                <label htmlFor="">Enter you email</label>
                <input {...register('email')} type='email'/>
                <br/>
                <label htmlFor="">Enter you message</label>
                <input {...register('msg')} type='text'/>
                <br/>
                <input type='submit'/>
            </form>
            
        </div>
    )
}
export default Contact