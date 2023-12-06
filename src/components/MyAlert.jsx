import { Alert } from "@material-tailwind/react";


const MyAlert=(props)=>{
    return <Alert className=" w-2/4 absolute top-10 left-1/4"  color={props.color}>{props.message}</Alert>
}

export default MyAlert;